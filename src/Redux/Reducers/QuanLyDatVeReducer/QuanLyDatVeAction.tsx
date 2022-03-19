import { Ghe } from '@Core/Models/Ghe.type';
import { DanhSachPhongVe } from '@Core/Models/Ve.type';
import {
  FETCH_CHI_TIET_PHONG_VE,
  DAT_VE_HOAN_TAT,
  CHUYEN_TAB,
  DAT_GHE,
  SET_DANH_SACH_GHE_KHACH_DAT,
} from '@Redux/Reducers/QuanLyDatVeReducer/QuanLyDatVeConstant';

export const fetchChiTietPhongVeAction = (payload: DanhSachPhongVe) => {
  return {
    type: FETCH_CHI_TIET_PHONG_VE,
    payload,
  } as const;
};

export const datGheAction = (payload: Ghe) => {
  return {
    type: DAT_GHE,
    payload,
  } as const;
};

export const datVeHoanTatAction = () => {
  return {
    type: DAT_VE_HOAN_TAT,
  } as const;
};

export const chuyenTabAction = (payload: number) => {
  return {
    type: CHUYEN_TAB,
    payload,
  } as const;
};

export const setDanhSachGheKhachDatAction = (payload: Ghe[]) => {
  return {
    type: SET_DANH_SACH_GHE_KHACH_DAT,
    payload,
  } as const;
};

export type ActionDatVeType = ReturnType<
  | typeof fetchChiTietPhongVeAction
  | typeof datVeHoanTatAction
  | typeof chuyenTabAction
  | typeof datGheAction
  | typeof setDanhSachGheKhachDatAction
>;
