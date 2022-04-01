import { NguoiDungVM, ThongTinDangNhapVM, ThongTinTaiKhoan } from '@Core/Models/NguoiDung.type';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { localService } from '@Services/LocalStorageService';
import { quanLyNguoiDungService } from '@Services/QuanLyNguoiDungService';
import { showSuccess } from '@Utils/Alert/PopUp';
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

const getDanhSachNguoiDungAsync = createAsyncThunk<
  Omit<NguoiDungVM, 'maNhom' | 'accessToken'>[],
  void,
  { rejectValue: string }
>('quanLyNguoiDungReducer/getDanhSachNguoiDungAsync', async (_, { rejectWithValue }) => {
  const maNhom = process.env.REACT_APP_MA_NHOM_GP01;
  const result = await quanLyNguoiDungService.layDanhSachNguoiDung(maNhom);
  if (typeof result.content === 'string') {
    return rejectWithValue(result.content);
  }
  return result.content;
});

const getChiTietNguoiDungAsync = createAsyncThunk<
  ThongTinTaiKhoan,
  NguoiDungVM['taiKhoan'],
  { rejectValue: string }
>('quanLyNguoiDungReducer/getChiTietNguoiDungAsync', async (taiKhoan, { rejectWithValue }) => {
  console.log({ taiKhoan });
  const result = await quanLyNguoiDungService.layThongTinNguoiDung(taiKhoan);
  console.log({ result });
  if (typeof result.content === 'string') {
    return rejectWithValue(result.content);
  }
  return result.content;
});

const setXoaNguoiDungAsync = createAsyncThunk<
  void,
  NguoiDungVM['taiKhoan'],
  { rejectValue: string }
>('quanLyNguoiDungReducer/setXoaNguoiDungAsync', async (taiKhoan, { rejectWithValue }) => {
  const result = await quanLyNguoiDungService.xoaNguoiDung(taiKhoan);
  if (result.statusCode !== 200) {
    return rejectWithValue(result.content);
  }
  showSuccess(result.content);
});

export const quanLyNguoiDungThunk = {
  setUserInfoAsync,
  setThongTinNguoiDungAsync,
  getDanhSachNguoiDungAsync,
  setXoaNguoiDungAsync,
  getChiTietNguoiDungAsync,
};
