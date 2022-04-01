import { RootState } from '@Redux/store';

const selectRapFilmDetail = (state: RootState) => state.QuanLyRapReducer.filmDetail;

const selectRapHeThongRapChieu = (state: RootState) => state.QuanLyRapReducer.heThongRapChieu;

export const selectQuanLyRapState = {
  selectRapFilmDetail,
  selectRapHeThongRapChieu,
};
