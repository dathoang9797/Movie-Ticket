import { setThongTinNguoiDungAction } from './QuanLyNguoiDungAction';
import { ThongTinDangNhapVM } from '@Core/Models/NguoiDung.type';
import { setUserInfoAction } from '@Redux/Reducers/QuanLyNguoiDungReducer/QuanLyNguoiDungAction';
import { AppThunk } from '@Redux/store';
import { localService } from '@Services/LocalStorageService/LocalStorageService';
import { quanLyNguoiDungService } from '@Services/QuanLyNguoiDungService';
import History from '@Utils/Libs/History';
import { MessageType } from 'antd/lib/message';

export const setUserInfoThunk = (
  user: ThongTinDangNhapVM,
  showError: (arg: string) => MessageType
): AppThunk => {
  return async (dispatch) => {
    const result = await quanLyNguoiDungService.dangNhap(user);

    if (typeof result.content === 'string') {
      showError(result.content);
      return;
    }

    dispatch(setUserInfoAction(result.content));
    localService.setUserInfo(result.content);
    History.goBack();
  };
};

export const setThongTinNguoiDungThunk = (showError: (arg: string) => MessageType): AppThunk => {
  return async (dispatch) => {
    const result = await quanLyNguoiDungService.thongTinTaiKhoan();

    if (typeof result.content === 'string') {
      showError(result.content);
      return;
    }

    dispatch(setThongTinNguoiDungAction(result.content));
  };
};
