import { Phim } from '@Core/Models/Phim.type';
import {
  fetchCumRapAction,
  fetchThongTinLichChieuPhimAction,
} from '@Redux/Reducers/QuanLyRapReducer/QuanLyRapAction';
import { AppThunk } from '@Redux/store';
import { quanLyRapService } from '@Services/QuanLyRapService';

export const fetchCumRapThunk = (): AppThunk => {
  return async (dispatch) => {
    const groupId = process.env.REACT_APP_MA_NHOM_GP01;
    const result = await quanLyRapService.layThongTinLichChieuHeThongRap(undefined, groupId);

    if (typeof result.content === 'string') {
      console.log(result.content);
      return;
    }
    dispatch(fetchCumRapAction(result.content));
  };
};

export const fectThongTinLichChieuPhimThunk = (MaPhim: Phim['maPhim']): AppThunk => {
  return async (dispatch) => {
    const result = await quanLyRapService.layThongTinLichChieuPhim(MaPhim);

    if (typeof result.content === 'string') {
      console.log(result.content);
      return;
    }

    dispatch(fetchThongTinLichChieuPhimAction(result.content));
  };
};
