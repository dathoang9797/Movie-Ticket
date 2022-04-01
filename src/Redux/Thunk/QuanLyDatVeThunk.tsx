import { connection } from '@Config/WebSocket';
import { Ghe } from '@Core/Models/Ghe.type';
import { DanhSachPhongVe, DanhSachVeDat } from '@Core/Models/Ve.type';
import { AbortError } from '@microsoft/signalr';
import { quanLyDatVeAction } from '@Redux/Reducers/QuanLyDatVeSlice';
import { RootState } from '@Redux/store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { quanLyDatVeService } from '@Services/QuanLyDatVeService';
import { showError } from '@Utils/Alert/PopUp';
import { batch } from 'react-redux';

const getDanhSachPhongVeAsync = createAsyncThunk<
  DanhSachPhongVe,
  { maLichChieu: DanhSachVeDat['maLichChieu']; isLoading?: boolean },
  { rejectValue: string }
>(
  'quanLyDatVeReducer/getDanhSachPhongVeAsync',
  async ({ maLichChieu, isLoading }, { rejectWithValue }) => {
    const result = await quanLyDatVeService.layDanhSachPhongVe(maLichChieu, isLoading);

    if (typeof result.content === 'string') {
      return rejectWithValue(result.content);
    }
    return result.content;
  }
);

const setDatveAsync = createAsyncThunk<void | undefined, DanhSachVeDat, { state: RootState }>(
  'quanLyDatVeReducer/setDatveAsync',
  async (danhSachVeDat, { getState, dispatch }) => {
    const { setChuyenTab, setDatVeHoanTat } = quanLyDatVeAction;
    const { userInfo } = getState().QuanLyNguoiDungReducer;
    const { maLichChieu } = danhSachVeDat;
    const { taiKhoan } = userInfo;
    const connecSocketDatGheThanhCong = process.env.REACT_APP_SOCKET_DAT_GHE_THANH_CONG;
    const promise1 = quanLyDatVeService.datVe(danhSachVeDat);
    const promise2 = connection.invoke(connecSocketDatGheThanhCong, taiKhoan, maLichChieu);
    const results = await Promise.allSettled([promise1, promise2]);

    if (results.find((result) => result.status === 'rejected')) {
      showError('Đặt vé thất bại');
      return;
    }

    batch(() => {
      dispatch(setDatVeHoanTat());
      dispatch(setChuyenTab(2));
    });
  }
);

const setDatGheAsync = createAsyncThunk<
  void,
  { ghe: Ghe; maLichChieu: DanhSachVeDat['maLichChieu'] },
  { state: RootState; rejectValue: string }
>(
  'quanLyDatVeReducer/setDatGheAsync',
  async ({ ghe, maLichChieu }, { getState, rejectWithValue, dispatch }) => {
    const { setDatGhe } = quanLyDatVeAction;
    dispatch(setDatGhe(ghe));
    const { danhSachGheDangDat } = getState().QuanLyDatVeReducer;
    const { taiKhoan } = getState().QuanLyNguoiDungReducer.userInfo;
    const danhSachGheDangDatToString = JSON.stringify(danhSachGheDangDat);
    const eventSocketDatGhe = process.env.REACT_APP_SOCKET_DAT_GHE;
    await connection
      .invoke(eventSocketDatGhe, taiKhoan, danhSachGheDangDatToString, maLichChieu)
      .catch((err) => {
        const error = err as AbortError;
        rejectWithValue(error.message);
      });
  }
);

export const quanLyDatVeThunk = {
  getDanhSachPhongVeAsync,
  setDatveAsync,
  setDatGheAsync,
};
