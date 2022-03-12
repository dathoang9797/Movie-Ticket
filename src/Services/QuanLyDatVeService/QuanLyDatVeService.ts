import AxiosClient from '@Utils/Http/AxiosClient';
import { ResponseData } from '@Models/Global.type';
import { Phim } from '@Models/Phim.type';
import { DanhSachVeDat, DanhSachPhongVe } from '@Models/Ve.type';

export const quanLyDatVeService = {
  datVe(DanhSachVe: DanhSachVeDat) {
    const url = '/QuanLyDatVe/DatVe';
    return AxiosClient.post<ResponseData<string>>(url, DanhSachVe);
  },

  taoLichChieu(lich: Phim) {
    const url = '/QuanLyDatVe/TaoLichChieu';
    return AxiosClient.post<ResponseData<string>>(url, lich);
  },

  layDanhSachPhongVe(maLichChieu: DanhSachVeDat['maLichChieu']) {
    const url = '/QuanLyDatVe/LayDanhSachPhongVe';
    return AxiosClient.get<ResponseData<DanhSachPhongVe> | ResponseData<string>>(url, {
      params: { maLichChieu },
    });
  },
};
