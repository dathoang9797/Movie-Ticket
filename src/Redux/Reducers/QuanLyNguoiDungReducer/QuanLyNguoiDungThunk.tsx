import { NguoiDungVM, ThongTinDangNhapVM, ThongTinTaiKhoan } from '@Core/Models/NguoiDung.type';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { localService } from '@Services/LocalStorageService/LocalStorageService';
import { quanLyNguoiDungService } from '@Services/QuanLyNguoiDungService';
import History from '@Utils/Libs/History';

const setUserInfoAsync = createAsyncThunk<
  Omit<NguoiDungVM, 'matKhau'>,
  ThongTinDangNhapVM,
  { rejectValue: string }
>(
  'quanLyNguoiDungReducer/setUserInfoAsync',
  async (ThongTinDangNhapVM, { rejectWithValue, dispatch }) => {
    const result = await quanLyNguoiDungService.dangNhap(ThongTinDangNhapVM);

    if (typeof result.content === 'string') {
      return rejectWithValue(result.content);
    }

    localService.setUserInfo(result.content);
    History.goBack();
    return result.content;
  }
);

const setThongTinNguoiDungAsync = createAsyncThunk<ThongTinTaiKhoan, void, { rejectValue: string }>(
  'quanLyNguoiDungReducer/setThongTinNguoiDungAsync',
  async (_, { rejectWithValue, dispatch }) => {
    const result = await quanLyNguoiDungService.thongTinTaiKhoan();
    if (typeof result.content === 'string') {
      return rejectWithValue(result.content);
    }

    return result.content;
  }
);

export const quanLyNguoiDungThunk = {
  setUserInfoAsync,
  setThongTinNguoiDungAsync,
};
