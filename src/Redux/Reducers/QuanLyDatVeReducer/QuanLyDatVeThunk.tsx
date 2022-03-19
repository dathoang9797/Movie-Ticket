import { connection } from '@Config/WebSocket';
import { AbortError } from '@microsoft/signalr';
import { Ghe } from '@Core/Models/Ghe.type';
import { DanhSachVeDat } from '@Core/Models/Ve.type';
import {
  fetchChiTietPhongVeAction,
  datVeHoanTatAction,
  chuyenTabAction,
  datGheAction,
} from '@Redux/Reducers/QuanLyDatVeReducer/QuanLyDatVeAction';
import { AppThunk } from '@Redux/store';
import { quanLyDatVeService } from '@Services/QuanLyDatVeService';
import { MessageType } from 'antd/lib/message';

export const fetchDanhSachPhongVeThunk = (
  maLichChieu: DanhSachVeDat['maLichChieu'],
  showError: (arg: string) => MessageType
): AppThunk => {
  return async (dispatch) => {
    const result = await quanLyDatVeService.layDanhSachPhongVe(maLichChieu);

    if (typeof result.content === 'string') {
      showError(result.content);
      return;
    }

    dispatch(fetchChiTietPhongVeAction(result.content));
  };
};

export const datveThunk = (
  danhSachVeDat: DanhSachVeDat,
  showError: (arg: string) => MessageType
): AppThunk => {
  return async (dispatch, getState) => {
    const result = await quanLyDatVeService.datVe(danhSachVeDat);
    const { userInfo } = getState().QuanLyNguoiDungReducer;
    const maLichChieu = danhSachVeDat.maLichChieu;
    const taiKhoan = userInfo.taiKhoan;

    if (!result) {
      showError('Đặt vé thất bại');
      return;
    }

    await dispatch(fetchDanhSachPhongVeThunk(maLichChieu, showError));
    dispatch(datVeHoanTatAction());
    dispatch(chuyenTabAction(2));
    const connecSocketDatGheThanhCong =
      process.env.REACT_APP_CONNECT_EVENT_SOCKET_DAT_GHE_THANH_CONG;
    console.log(connecSocketDatGheThanhCong);
    connection.invoke(connecSocketDatGheThanhCong, taiKhoan, maLichChieu);
  };
};

export const datGheThunk = (
  ghe: Ghe,
  maLichChieu: DanhSachVeDat['maLichChieu'],
  showError: (arg: string) => MessageType
): AppThunk => {
  return async (dispatch, getState) => {
    dispatch(datGheAction(ghe));
    const { danhSachGheDangDat } = getState().QuanLyDatVeReducer;
    const { userInfo } = getState().QuanLyNguoiDungReducer;
    const danhSachGheDangDatToString = JSON.stringify(danhSachGheDangDat);
    const taiKhoan = userInfo.taiKhoan;
    const eventSocketDatGhe = process.env.REACT_APP_CONNECT_EVENT_SOCKET_DAT_GHE;

    connection
      .invoke(eventSocketDatGhe, taiKhoan, danhSachGheDangDatToString, maLichChieu)
      .catch((err) => {
        const error = err as AbortError;
        console.log(error.message);
      });
  };
};
