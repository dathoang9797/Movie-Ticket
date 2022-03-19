import { ThongTinPhim } from '@Core/Models/Phim.type';
import {
  FETCH_FILM,
  FETCH_FILM_DANG_CHIEU,
  FETCH_FILM_SAP_CHIEU,
  FETCH_ALL_FILM,
} from './QuanLyPhimConstant';

export const fetchFilmlAction = (payload: ThongTinPhim[]) => {
  return {
    type: FETCH_FILM,
    payload,
  } as const;
};

export const fetchFilmDangChieulAction = () => {
  return {
    type: FETCH_FILM_DANG_CHIEU,
  } as const;
};

export const fetchFilmlSapChieuAction = () => {
  return {
    type: FETCH_FILM_SAP_CHIEU,
  } as const;
};

export const fetchAllFilmlAction = () => {
  return {
    type: FETCH_ALL_FILM,
  } as const;
};

export type TypeActionsFilm = ReturnType<
  | typeof fetchFilmlAction
  | typeof fetchFilmDangChieulAction
  | typeof fetchFilmlSapChieuAction
  | typeof fetchAllFilmlAction
>;
