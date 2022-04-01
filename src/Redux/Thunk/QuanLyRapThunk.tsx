import { Phim, ThongTinLichChieuPhim } from '@Core/Models/Phim.type';
import { ThongTinLichChieuHeThongRap } from '@Core/Models/Rap.type';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { quanLyRapService } from '@Services/QuanLyRapService';

const getCumRapAsync = createAsyncThunk<
  ThongTinLichChieuHeThongRap[],
  void,
  { rejectValue: string }
>('quanLyRapReducer/getCumRapAsync', async (_, { rejectWithValue }) => {
  const groupId = process.env.REACT_APP_MA_NHOM_GP01;
  const result = await quanLyRapService.layThongTinLichChieuHeThongRap(undefined, groupId);

  if (typeof result.content === 'string') {
    return rejectWithValue(result.content);
  }
  return result.content;
});

const getThongTinLichChieuPhimAsync = createAsyncThunk<
  ThongTinLichChieuPhim,
  Phim['maPhim'],
  { rejectValue: string }
>('quanLyRapReducer/getThongTinLichChieuPhimAsync', async (maPhim, { rejectWithValue }) => {
  const result = await quanLyRapService.layThongTinLichChieuPhim(maPhim);
  if (typeof result.content === 'string') {
    return rejectWithValue(result.content);
  }
  return result.content;
});

const getThongTinHeThongRapAsync = createAsyncThunk<
  ThongTinLichChieuPhim,
  Phim['maPhim'],
  { rejectValue: string }
>('quanLyRapReducer/getThongTinHeThongRapAsync', async (maPhim, { rejectWithValue }) => {
  const result = await quanLyRapService.layThongTinLichChieuPhim(maPhim);
  if (typeof result.content === 'string') {
    return rejectWithValue(result.content);
  }
  return result.content;
});

export const quanLyRapThunk = {
  getCumRapAsync,
  getThongTinLichChieuPhimAsync,
  getThongTinHeThongRapAsync,
};
