import { NguoiDungVM, ThongTinTaiKhoan } from '@Core/Models/NguoiDung.type';
import {
  SET_USER_INFO,
  SET_THONG_TIN_NGUOI_DUNG,
} from '@Redux/Reducers/QuanLyNguoiDungReducer/QuanLyNguoiDungConstant';
import { ActionUserType } from '@Redux/Reducers/QuanLyNguoiDungReducer/QuanLyNguoiDungAction';
import { localService } from '@Services/LocalStorageService/LocalStorageService';

type UserReducerInitialState = {
  userInfo: Omit<NguoiDungVM, 'matKhau'>;
  thongTinNguoiDung: ThongTinTaiKhoan;
};

const userReducerInitialState = {
  userInfo: localService.getUserInfo() ?? {
    taiKhoan: '',
    email: '',
    soDT: '',
    maNhom: '',
    maLoaiNguoiDung: '',
    hoTen: '',
    accessToken: '',
  },
  thongTinNguoiDung: {},
} as UserReducerInitialState;

const quanLyNguoiDungReducer = (state = userReducerInitialState, action: ActionUserType) => {
  switch (action.type) {
    case SET_USER_INFO: {
      return { ...state, userInfo: { ...action.payload } };
    }
    case SET_THONG_TIN_NGUOI_DUNG: {
      return { ...state, thongTinNguoiDung: { ...action.payload } };
    }
    default: {
      return state;
    }
  }
};

export default quanLyNguoiDungReducer;
