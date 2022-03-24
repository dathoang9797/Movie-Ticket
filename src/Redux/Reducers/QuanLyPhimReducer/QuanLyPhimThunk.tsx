import { ResponseErrorDanhSachPhim } from '@Core/Models/Global.type';
import { ThongTinPhim } from '@Core/Models/Phim.type';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { quanLyPhimService } from '@Services/QuanLyPhimService';
import History from '@Utils/Libs/History';
import Swal from 'sweetalert2';

const getFilmAsync = createAsyncThunk<
  ThongTinPhim[],
  { maNhom?: string; tenPhim?: string } | void,
  { rejectValue: string | ResponseErrorDanhSachPhim }
>('quanLyPhimReducer/getFilmAsync', async (params, { rejectWithValue }) => {
  if (!params || !params.tenPhim?.trim().length) {
    const result = await quanLyPhimService.layDanhSachPhim();
    if (typeof result.content === 'string') {
      return rejectWithValue(result.content);
    }
    if ('content' in result.content) {
      return rejectWithValue(result.content);
    }
    return result.content;
  }

  const { maNhom, tenPhim } = params;
  const result = await quanLyPhimService.layDanhSachPhim(maNhom, tenPhim);
  if (typeof result.content === 'string') {
    return rejectWithValue(result.content);
  }
  if ('content' in result.content) {
    return rejectWithValue(result.content);
  }
  return result.content;
});

const layThongTinPhimAsync = createAsyncThunk<
  ThongTinPhim,
  ThongTinPhim['maPhim'],
  { rejectValue: string }
>('quanLyPhimReducer/layThongTinPhim', async (maPhim, { rejectWithValue }) => {
  const result = await quanLyPhimService.layThongTinPhim(maPhim);
  if (typeof result.content === 'string') {
    return rejectWithValue(result.content);
  }
  return result.content;
});

const setThemPhimUpLoadHinhAsync = createAsyncThunk<
  ThongTinPhim,
  FormData,
  { rejectValue: string }
>('quanLyPhimReducer/themPhimUpLoadHinh', async (formData, { rejectWithValue, dispatch }) => {
  const result = await quanLyPhimService.themPhimUpLoadHinh(formData);
  if (typeof result.content === 'string') {
    return rejectWithValue(result.content);
  }
  await dispatch(getFilmAsync());
  History.push(process.env.REACT_APP_LINK_ADMIN_FILMS);
  return result.content;
});

const setCapNhatPhimUpLoadAsync = createAsyncThunk<ThongTinPhim, FormData, { rejectValue: string }>(
  'quanLyPhimReducer/capNhatPhimUpLoad',
  async (formData, { rejectWithValue, dispatch }) => {
    const result = await quanLyPhimService.capNhatPhimUpLoad(formData);
    if (typeof result.content === 'string') {
      return rejectWithValue(`${result.content} ${result.message}`);
    }
    await dispatch(getFilmAsync());
    History.push(process.env.REACT_APP_LINK_ADMIN_FILMS);
    return result.content;
  }
);

const setXoaPhimThunk = createAsyncThunk<void, ThongTinPhim['maPhim'], { rejectValue: string }>(
  'quanLyPhimReducer/xoaPhim',
  async (maPhim, { rejectWithValue, dispatch }) => {
    const result = await quanLyPhimService.xoaPhim(maPhim);
    if (result.statusCode !== 200) {
      return rejectWithValue(`${result.content}`);
    }
    await dispatch(getFilmAsync());
    Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
  }
);

export const quanLyPhimThunk = {
  getFilmAsync,
  layThongTinPhimAsync,
  setThemPhimUpLoadHinhAsync,
  setCapNhatPhimUpLoadAsync,
  setXoaPhimThunk,
};
