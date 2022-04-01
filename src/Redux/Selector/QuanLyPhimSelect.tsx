import { RootState } from '@Redux/store';

const selectFilmArrFilm = (state: RootState) => state.QuanLyPhimReducer.arrFilm;

const selectFilmArrFilmDefault = (state: RootState) => state.QuanLyPhimReducer.arrFilmDefault;

const selectFilmDangChieu = (state: RootState) => state.QuanLyPhimReducer.dangChieu;

const selectFilmSapChieu = (state: RootState) => state.QuanLyPhimReducer.sapChieu;

const selectFilmThongTinPhim = (state: RootState) => state.QuanLyPhimReducer.thongTinPhim;

export const selectQuanLyPhimState = {
  selectFilmArrFilm,
  selectFilmArrFilmDefault,
  selectFilmDangChieu,
  selectFilmSapChieu,
  selectFilmThongTinPhim,
};
