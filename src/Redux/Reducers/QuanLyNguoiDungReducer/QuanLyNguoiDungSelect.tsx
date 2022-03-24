import { RootState } from '@Redux/store';

const selectUserInfo = (state: RootState) => state.QuanLyNguoiDungReducer.userInfo;

const selectThongTinNguoiDung = (state: RootState) =>
  state.QuanLyNguoiDungReducer.thongTinNguoiDung;

export const selectNguoiDungState = {
  selectUserInfo,
  selectThongTinNguoiDung,
};
