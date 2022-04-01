import { ThongTinPhim } from '@Core/Models/Phim.type';
import { quanLyPhimThunk } from '@Redux/Thunk/QuanLyPhimThunk';
import { createSlice, nanoid } from '@reduxjs/toolkit';
import { showError, showSuccess } from '@Utils/Alert/PopUp';

type QuanLyPhimInitialState = {
  arrFilm: Array<ThongTinPhim>;
  dangChieu: ThongTinPhim['dangChieu'];
  sapChieu: ThongTinPhim['sapChieu'];
  arrFilmDefault: Array<ThongTinPhim>;
  thongTinPhim: ThongTinPhim;
};

const initialState = {
  arrFilm: [],
  dangChieu: false,
  sapChieu: false,
  arrFilmDefault: [],
  thongTinPhim: {} as ThongTinPhim,
} as QuanLyPhimInitialState;

const {
  getFilmAsync,
  layThongTinPhimAsync,
  setCapNhatPhimUpLoadAsync,
  setThemPhimUpLoadHinhAsync,
  setXoaPhimThunk,
} = quanLyPhimThunk;

const quanLyPhimDungSlice = createSlice({
  name: 'quanLyPhimReducer',
  initialState,
  reducers: {
    getAllFilms: (state) => {
      state.arrFilm = state.arrFilmDefault.filter((film) => film.dangChieu === state.dangChieu);
      state.dangChieu = false;
      state.sapChieu = false;
    },
    getFilmsSapChieu: (state) => {
      state.arrFilm = state.arrFilmDefault.filter((film) => film.sapChieu === state.sapChieu);
      state.dangChieu = false;
      state.sapChieu = true;
    },
    getFilmsDangChieu: (state) => {
      state.arrFilm = state.arrFilmDefault.filter((film) => film.dangChieu === state.dangChieu);
      state.dangChieu = true;
      state.sapChieu = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFilmAsync.fulfilled, (state, action) => {
      state.arrFilm = action.payload;
      state.arrFilmDefault = action.payload;
    });

    builder.addCase(layThongTinPhimAsync.fulfilled, (state, action) => {
      state.thongTinPhim = { ...action.payload, idThongTinPhim: nanoid() };
    });
    builder.addCase(setThemPhimUpLoadHinhAsync.fulfilled, (state, action) => {
      showSuccess('Thêm phim thành công');
    });
    builder.addCase(setCapNhatPhimUpLoadAsync.fulfilled, (state, action) => {
      showSuccess('Cập nhật phim thành công');
    });
    builder.addCase(getFilmAsync.rejected, (state, action) => {
      if (typeof action.payload === 'string') {
        showError(action.payload);
        return;
      }

      if (action.payload) {
        showError(action.payload?.content);
        return;
      }
    });
    builder.addCase(setThemPhimUpLoadHinhAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      }
    });
    builder.addCase(layThongTinPhimAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      }
    });
    builder.addCase(setCapNhatPhimUpLoadAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      }
    });
    builder.addCase(setXoaPhimThunk.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      }
    });
  },
});

const { getAllFilms, getFilmsDangChieu, getFilmsSapChieu } = quanLyPhimDungSlice.actions;

export const quanLyPhimAction = {
  getAllFilms,
  getFilmsDangChieu,
  getFilmsSapChieu,
};

export default quanLyPhimDungSlice.reducer;
