import { RootState } from '@Redux/store';

const selectUserInfo = (state: RootState) => state.QuanLyNguoiDungReducer.userInfo;

const selectThongTinNguoiDung = (state: RootState) =>
  state.QuanLyNguoiDungReducer.thongTinNguoiDung;

const selectDanhSachNguoiDung = (state: RootState) =>
  state.QuanLyNguoiDungReducer.danhSachNguoiDung;

const selectChiTietNguoiDung = (state: RootState) => state.QuanLyNguoiDungReducer.chiTietNguoiDung;

export const selectNguoiDungState = {
  selectUserInfo,
  selectThongTinNguoiDung,
  selectDanhSachNguoiDung,
  selectChiTietNguoiDung,
};
