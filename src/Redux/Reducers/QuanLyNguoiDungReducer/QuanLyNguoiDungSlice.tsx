import { NguoiDungVM, ThongTinTaiKhoan } from '@Core/Models/NguoiDung.type';
import { quanLyNguoiDungThunk } from '@Redux/Reducers/QuanLyNguoiDungReducer/QuanLyNguoiDungThunk';
import { createSlice, nanoid } from '@reduxjs/toolkit';
import { localService } from '@Services/LocalStorageService';
import { showError } from '@Utils/Alert/PopUp';

type QuanLyNguoiDungInitialState = {
  userInfo: Omit<NguoiDungVM, 'matKhau'>;
  thongTinNguoiDung: ThongTinTaiKhoan;
};

const { setThongTinNguoiDungAsync, setUserInfoAsync } = quanLyNguoiDungThunk;

const initialState = {
  userInfo: localService.getUserInfo() ?? {},
  thongTinNguoiDung: {},
} as QuanLyNguoiDungInitialState;

const quanLyNguoiDungSlice = createSlice({
  name: 'quanLyNguoiDungReducer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setUserInfoAsync.fulfilled, (state, action) => {
      state.userInfo = action.payload;
    });
    builder.addCase(setUserInfoAsync.rejected, (state, action) => {
      if (!action.payload) return;
      showError(action.payload);
    });
    builder.addCase(setThongTinNguoiDungAsync.fulfilled, (state, action) => {
      state.thongTinNguoiDung.thongTinDatVe?.map((thongTinNguoiDung) => {
        thongTinNguoiDung.idNguoiDung = nanoid();
        thongTinNguoiDung.danhSachGhe.map((gheND) => {
          gheND.idDanhSachNguoiDung = nanoid();
        });
        return thongTinNguoiDung;
      });
      state.thongTinNguoiDung = action.payload;
    });
    builder.addCase(setThongTinNguoiDungAsync.rejected, (state, action) => {
      if (!action.payload) return;
      showError(action.payload);
    });
  },
});

export default quanLyNguoiDungSlice.reducer;
