import { NguoiDungVM, ThongTinTaiKhoan } from '@Core/Models/NguoiDung.type';
import {
  SET_USER_INFO,
  SET_THONG_TIN_NGUOI_DUNG,
} from '@Redux/Reducers/QuanLyNguoiDungReducer/QuanLyNguoiDungConstant';

export const setUserInfoAction = (payload: Omit<NguoiDungVM, 'matKhau'>) => {
  return {
    type: SET_USER_INFO,
    payload,
  } as const;
};

export const setThongTinNguoiDungAction = (payload: ThongTinTaiKhoan) => {
  return {
    type: SET_THONG_TIN_NGUOI_DUNG,
    payload,
  } as const;
};

export type ActionUserType = ReturnType<
  typeof setUserInfoAction | typeof setThongTinNguoiDungAction
>;
