import AxiosClient from '@Utils/Http/AxiosClient';
import { Phim, ThongTinLichChieuPhim } from '@Models/Phim.type';
import { ResponseData } from '@Models/Global.type';
import { NguoiDungVM } from '@Models/NguoiDung.type';
import {
  ThongTinHeThongRap,
  ThongTinHeThongCumRap,
  ThongTinLichChieuHeThongRap,
} from '@Models/Rap.type';

export const quanLyRapService = {
  layThongTinHeThongRap(maHeThongRap?: string) {
    const url = 'QuanLyRap/LayThongTinHeThongRap';
    return AxiosClient.get<ResponseData<Array<ThongTinHeThongRap>> | ResponseData<string>>(url, {
      params: { maHeThongRap },
    });
  },

  layThongTinCumRapTheoHeThong(maHeThongRap: string) {
    const url = 'QuanLyRap/LayThongTinCumRapTheoHeThong';
    return AxiosClient.get<ResponseData<Array<ThongTinHeThongCumRap>> | ResponseData<string>>(url, {
      params: { maHeThongRap },
    });
  },

  layThongTinLichChieuHeThongRap(maHeThongRap?: string, maNhom?: NguoiDungVM['maNhom']) {
    const url = 'QuanLyRap/LayThongTinLichChieuHeThongRap';
    return AxiosClient.get<ResponseData<Array<ThongTinLichChieuHeThongRap>> | ResponseData<string>>(
      url,
      {
        params: { maHeThongRap, maNhom },
      }
    );
  },

  layThongTinLichChieuPhim(MaPhim: Phim['maPhim']) {
    const url = 'QuanLyRap/LayThongTinLichChieuPhim';
    return AxiosClient.get<ResponseData<ThongTinLichChieuPhim> | ResponseData<string>>(url, {
      params: { MaPhim },
    });
  },
};
