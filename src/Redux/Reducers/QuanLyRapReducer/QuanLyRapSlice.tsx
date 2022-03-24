import { DanhSachPhim, ThongTinLichChieuPhim } from '@Core/Models/Phim.type';
import { CumRap, ThongTinLichChieuHeThongRap } from '@Core/Models/Rap.type';
import { quanLyRapThunk } from '@Redux/Reducers/QuanLyRapReducer/QuanLyRapThunk';
import { createSlice, nanoid } from '@reduxjs/toolkit';
import { showError } from '@Utils/Alert/PopUp';

type QuanLyRapInitialState = {
  filmDetail: ThongTinLichChieuPhim;
  heThongRapChieu: Array<ThongTinLichChieuHeThongRap>;
};

const { getCumRapAsync, getThongTinLichChieuPhimAsync } = quanLyRapThunk;

const initialState = {
  filmDetail: {} as ThongTinLichChieuPhim,
  heThongRapChieu: [],
} as QuanLyRapInitialState;

const quanLyRapSlice = createSlice({
  name: 'quanLyRapReducer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getThongTinLichChieuPhimAsync.fulfilled, (state, action) => {
      state.filmDetail = action.payload;
    });
    builder.addCase(getThongTinLichChieuPhimAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      }
    });
    builder.addCase(getCumRapAsync.fulfilled, (state, action) => {
      state.heThongRapChieu = action.payload.map((htrc) => {
        htrc.lstCumRap = htrc.lstCumRap.map((cr) => {
          cr.danhSachPhim = cr.danhSachPhim.map((dp) => {
            dp = { ...dp, idDanhSachPhim: nanoid() };
            dp.lstLichChieuTheoPhim = dp.lstLichChieuTheoPhim.map((lc) => {
              return (lc = { ...lc, idLichChieuTheoPhim: nanoid() });
            });
            return dp;
          });
          return { ...cr, idCumRap: nanoid() } as CumRap;
        });
        return { ...htrc, idHeThongRapChieu: nanoid() };
      });
    });
    builder.addCase(getCumRapAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      }
    });
  },
});

export default quanLyRapSlice.reducer;
