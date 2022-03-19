import {
  CHUYEN_TAB,
  DAT_GHE,
  DAT_VE_HOAN_TAT,
  FETCH_CHI_TIET_PHONG_VE,
  SET_DANH_SACH_GHE_KHACH_DAT,
} from '@Redux/Reducers/QuanLyDatVeReducer/QuanLyDatVeConstant';
import { ActionDatVeType } from '@Redux/Reducers/QuanLyDatVeReducer/QuanLyDatVeAction';
import { DanhSachPhongVe } from 'src/Core/Models/Ve.type';
import { Ghe } from '@Core/Models/Ghe.type';

type DatVeReducerInitialState = {
  chiTietPhongVe: DanhSachPhongVe;
  danhSachGheDangDat: Ghe[];
  danhSachGheKhachDat: Ghe[];
  tabActive: string;
};

const initialState = {
  chiTietPhongVe: {
    danhSachGhe: [],
    thongTinPhim: {
      maLichChieu: 0,
      tenCumRap: '',
      tenRap: '',
      diaChi: '',
      tenPhim: '',
      hinhAnh: '',
      ngayChieu: '',
      gioChieu: '',
    },
  },
  danhSachGheDangDat: [],
  danhSachGheKhachDat: [],
  tabActive: '1',
} as DatVeReducerInitialState;

const quanLyDatVeReducer = (state = initialState, action: ActionDatVeType) => {
  switch (action.type) {
    case FETCH_CHI_TIET_PHONG_VE: {
      return { ...state, chiTietPhongVe: action.payload };
    }
    case DAT_GHE: {
      const index = state.danhSachGheDangDat.findIndex((ghe) => ghe.maGhe === action.payload.maGhe);
      if (index !== -1) {
        return {
          ...state,
          danhSachGheDangDat: state.danhSachGheDangDat.filter(
            (ghe) => ghe.maGhe !== action.payload.maGhe
          ),
        };
      }
      return { ...state, danhSachGheDangDat: [...state.danhSachGheDangDat, action.payload] };
    }
    case DAT_VE_HOAN_TAT: {
      return { ...state, danhSachGheDangDat: [] };
    }
    case CHUYEN_TAB: {
      return { ...state, tabActive: action.payload.toString() };
    }
    case SET_DANH_SACH_GHE_KHACH_DAT: {
      return { ...state, danhSachGheKhachDat: action.payload };
    }

    default: {
      return state;
    }
  }
};

export default quanLyDatVeReducer;
