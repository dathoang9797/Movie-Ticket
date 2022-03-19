import { ThongTinLichChieuPhim } from '@Core/Models/Phim.type';
import { ThongTinLichChieuHeThongRap } from '@Core/Models/Rap.type';
import {
  FETCH_THONG_TIN_LICH_CHIEU_HE_THONG_RAP,
  FETCH_THONG_TIN_LICH_CHIEU_PHIM,
} from '@Redux/Reducers/QuanLyRapReducer/QuanLyRapConstant';

export const fetchCumRapAction = (payload: ThongTinLichChieuHeThongRap[]) => {
  return {
    type: FETCH_THONG_TIN_LICH_CHIEU_HE_THONG_RAP,
    payload,
  } as const;
};

export const fetchThongTinLichChieuPhimAction = (payload: ThongTinLichChieuPhim) => {
  return {
    type: FETCH_THONG_TIN_LICH_CHIEU_PHIM,
    payload,
  } as const;
};

export type TypeActionsRap = ReturnType<
  typeof fetchCumRapAction | typeof fetchThongTinLichChieuPhimAction
>;
