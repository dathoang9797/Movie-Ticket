import AxiosClient from '@Utils/Http/AxiosClient';
import { DanhSachPhimPhanTrang, Phim, ThongTinPhim } from '@Models/Phim.type';
import { ResponseData, ResponseErrorDanhSachPhim } from '@Models/Global.type';
import { Banner } from '@Models/Banner.type';

export const quanLyPhimService = {
  layDanhSachBanner() {
    const url = '/QuanLyPhim/LayDanhSachBanner';
    return AxiosClient.get<ResponseData<Array<Banner>> | ResponseData<string>>(url);
  },

  layDanhSachPhim(maNhom?: ThongTinPhim['maNhom'], tenPhim?: string) {
    const url = '/QuanLyPhim/LayDanhSachPhim';
    return AxiosClient.get<
      | ResponseData<Array<ThongTinPhim>>
      | ResponseData<ResponseErrorDanhSachPhim>
      | ResponseData<string>
    >(url, {
      params: { tenPhim, maNhom },
    });
  },

  layDanhSachPhimPhanTrang(
    maNhom?: ThongTinPhim['maNhom'],
    tenPhim?: string,
    soTrang?: number,
    soPhanTuTrenTrang?: number
  ) {
    const url = '/QuanLyPhim/LayDanhSachPhimPhanTrang';
    return AxiosClient.get<ResponseData<DanhSachPhimPhanTrang> | ResponseData<string>>(url, {
      params: { maNhom, soPhanTuTrenTrang, soTrang, tenPhim },
    });
  },

  layDanhSachPhimTheoNgay(
    maNhom: ThongTinPhim['maNhom'],
    tenPhim: string,
    soTrang: number,
    soPhanTuTrenTrang: number,
    tuNgay: string,
    denNgay: string
  ) {
    const url = '/QuanLyPhim/LayDanhSachPhimTheoNgay';
    return AxiosClient.get<ResponseData<Array<ThongTinPhim>> | ResponseData<string>>(url, {
      params: { maNhom, soPhanTuTrenTrang, soTrang, tenPhim, tuNgay, denNgay },
    });
  },

  layThongTinPhim(maPhim: Phim['maPhim']) {
    const url = '/QuanLyPhim/LayThongTinPhim';
    return AxiosClient.get<ResponseData<ThongTinPhim> | ResponseData<string>>(url, {
      params: { maPhim },
    });
  },

  themPhimUpLoadHinh(films: FormData) {
    const url = '/QuanLyPhim/ThemPhimUploadHinh';
    return AxiosClient.post<ResponseData<ThongTinPhim> | ResponseData<string>>(url, films);
  },

  capNhatPhimUpLoad(film: FormData) {
    const url = '/QuanLyPhim/CapNhatPhimUpLoad';
    return AxiosClient.post<ResponseData<string> | ResponseData<string>>(url, film);
  },

  quanLyPhim(file: FormData, tenPhim: string, maNhom: ThongTinPhim['maNhom']) {
    const url = '/QuanLyPhim';
    return AxiosClient.post<ResponseData<string>>(url, file, { params: { tenPhim, maNhom } });
  },

  quanLyPhimXP(maPhim: Phim['maPhim']) {
    const url = '/QuanLyPhim/XP';
    return AxiosClient.delete<ResponseData<string>>(url, { params: { maPhim } });
  },

  xoaPhim(maPhim: Phim['maPhim']) {
    const url = '/QuanLyPhim/XP';
    return AxiosClient.delete<ResponseData<string>>(url, { params: { maPhim } });
  },
};
