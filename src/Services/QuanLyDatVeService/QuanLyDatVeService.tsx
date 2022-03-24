import AxiosClient from '@Utils/Http/AxiosClient';
import { ResponseData } from '@Core/Models/Global.type';
import { Phim } from '@Core/Models/Phim.type';
import { DanhSachVeDat, DanhSachPhongVe } from '@Core/Models/Ve.type';

export const quanLyDatVeService = {
  datVe(DanhSachVe: DanhSachVeDat, isLoading?: boolean) {
    return AxiosClient.post<ResponseData<string>>(
      process.env.REACT_APP_LINK_QUAN_LY_DAT_VE_DAT_VE,
      DanhSachVe,
      { headers: { isLoading: isLoading ?? true } }
    );
  },

  taoLichChieu(lich: Phim, isLoading?: boolean) {
    return AxiosClient.post<ResponseData<string>>(
      process.env.REACT_APP_LINK_QUAN_LY_DAT_VE_TAO_LICH_CHIEU,
      lich,
      { headers: { isLoading: isLoading ?? true } }
    );
  },

  layDanhSachPhongVe(maLichChieu: DanhSachVeDat['maLichChieu'], isLoading?: boolean) {
    return AxiosClient.get<ResponseData<DanhSachPhongVe> | ResponseData<string>>(
      process.env.REACT_APP_LINK_QUAN_LY_DAT_VE_LAY_DANH_SACH_PHONG_VE,
      {
        params: { maLichChieu },
        headers: { isLoading: isLoading ?? true },
      }
    );
  },
};
