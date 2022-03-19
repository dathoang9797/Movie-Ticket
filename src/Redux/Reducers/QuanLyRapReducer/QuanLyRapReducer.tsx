import { ThongTinLichChieuPhim } from '@Core/Models/Phim.type';
import { ThongTinLichChieuHeThongRap } from '@Core/Models/Rap.type';
import { TypeActionsRap } from '@Redux/Reducers/QuanLyRapReducer/QuanLyRapAction';
import {
  FETCH_THONG_TIN_LICH_CHIEU_HE_THONG_RAP,
  FETCH_THONG_TIN_LICH_CHIEU_PHIM,
} from '@Redux/Reducers/QuanLyRapReducer/QuanLyRapConstant';

type RapInitialState = {
  filmDetail: ThongTinLichChieuPhim;
  heThongRapChieu: Array<ThongTinLichChieuHeThongRap>;
};

const initialState = {
  filmDetail: {
    maPhim: 0,
    tenPhim: '',
    biDanh: '',
    trailer: '',
    hinhAnh: '',
    moTa: '',
    maNhom: '',
    hot: false,
    dangChieu: false,
    sapChieu: false,
    ngayKhoiChieu: '',
    danhGia: 0,
    heThongRapChieu: [],
  },
  heThongRapChieu: [],
} as RapInitialState;

const quanLyRapReducer = (state = initialState, action: TypeActionsRap) => {
  switch (action.type) {
    case FETCH_THONG_TIN_LICH_CHIEU_HE_THONG_RAP: {
      return { ...state, heThongRapChieu: [...action.payload] };
    }

    case FETCH_THONG_TIN_LICH_CHIEU_PHIM: {
      return { ...state, filmDetail: action.payload };
    }

    default: {
      return state;
    }
  }
};

export default quanLyRapReducer;
