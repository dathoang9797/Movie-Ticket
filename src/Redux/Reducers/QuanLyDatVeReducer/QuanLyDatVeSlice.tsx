import { Ghe } from '@Core/Models/Ghe.type';
import { DanhSachPhongVe, ThongTinVePhim } from '@Core/Models/Ve.type';
import { quanLyDatVeThunk } from '@Redux/Reducers/QuanLyDatVeReducer/QuanLyDatVeThunk';
import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { localService } from '@Services/LocalStorageService/LocalStorageService';
import { showError } from '@Utils/Alert/PopUp';
import _ from 'lodash';

type QuanLyDatVeInitialState = {
  chiTietPhongVe: DanhSachPhongVe;
  danhSachGheDangDat: Array<Ghe>;
  danhSachGheKhachDat: Array<Ghe>;
  tabActive: string;
};

const { getDanhSachPhongVeAsync, setDatGheAsync, setDatveAsync } = quanLyDatVeThunk;
const initialState = {
  chiTietPhongVe: {
    danhSachGhe: [],
    thongTinPhim: {} as ThongTinVePhim,
  },
  danhSachGheDangDat: [],
  danhSachGheKhachDat: [],
  tabActive: '1',
} as QuanLyDatVeInitialState;

const datVeSlice = createSlice({
  name: 'quanLyDatVeReducer',
  initialState,
  reducers: {
    setDatVeHoanTat: (state) => {
      state.danhSachGheDangDat = [];
    },
    setChuyenTab: (state, action: PayloadAction<number>) => {
      state.tabActive = action.payload.toString();
    },
    setDanhSachGheKhachDat: (state, action: PayloadAction<Ghe[]>) => {
      state.danhSachGheKhachDat = action.payload.map((gheKhachDat) => ({
        ...gheKhachDat,
      }));
    },
    setDatGhe: (state, action: PayloadAction<Ghe>) => {
      const index = state.danhSachGheDangDat.findIndex((ghe) => ghe.maGhe === action.payload.maGhe);
      if (index !== -1) {
        state.danhSachGheDangDat = state.danhSachGheDangDat.filter(
          (ghe) => ghe.maGhe !== action.payload.maGhe
        );
      } else {
        const userInfo = localService.getUserInfo();
        state.danhSachGheDangDat.push({
          ...action.payload,
          status: `user-${userInfo?.taiKhoan}`,
          taiKhoanNguoiDat: userInfo?.taiKhoan ?? null,
        });
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setDatGheAsync.rejected, (state, action) => {
      if (!action.payload) return;
      showError(action.payload);
    });
    builder.addCase(getDanhSachPhongVeAsync.fulfilled, (state, action) => {
      state.chiTietPhongVe = action.payload;
      state.chiTietPhongVe.danhSachGhe = state.chiTietPhongVe.danhSachGhe.map((ghe) => ({
        ...ghe,
        status: '',
        idGhe: nanoid(),
      }));
      state.chiTietPhongVe.thongTinPhim.idThongTinVePhim = nanoid();
    });
    builder.addCase(getDanhSachPhongVeAsync.rejected, (state, action) => {
      if (!action.payload) return;
      showError(action.payload);
    });
  },
});

const { setChuyenTab, setDanhSachGheKhachDat, setDatGhe, setDatVeHoanTat } = datVeSlice.actions;

export const quanLyDatVeAction = {
  setChuyenTab,
  setDanhSachGheKhachDat,
  setDatGhe,
  setDatVeHoanTat,
};

export default datVeSlice.reducer;
