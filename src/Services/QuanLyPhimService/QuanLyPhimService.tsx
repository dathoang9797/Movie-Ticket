import { Banner } from '@Core/Models/Banner.type';
import { ResponseData, ResponseErrorDanhSachPhim } from '@Core/Models/Global.type';
import { DanhSachPhimPhanTrang, Phim, ThongTinPhim } from '@Core/Models/Phim.type';
import AxiosClient from '@Utils/Http/AxiosClient';

export const quanLyPhimService = {
  layDanhSachBanner() {
    return AxiosClient.get<ResponseData<Array<Banner>> | ResponseData<string>>(
      process.env.REACT_APP_LINK_QUAN_LY_PHIM_LAY_DANH_SACH_BANNER
    );
  },

  layDanhSachPhim(maNhom?: ThongTinPhim['maNhom'], tenPhim?: string) {
    return AxiosClient.get<
      | ResponseData<Array<ThongTinPhim>>
      | ResponseData<ResponseErrorDanhSachPhim>
      | ResponseData<string>
    >(process.env.REACT_APP_LINK_QUAN_LY_PHIM_LAY_DANH_SACH_PHIM, {
      params: { maNhom, tenPhim },
      headers: {},
    });
  },

  layDanhSachPhimPhanTrang(
    maNhom?: ThongTinPhim['maNhom'],
    tenPhim?: string,
    soTrang?: number,
    soPhanTuTrenTrang?: number
  ) {
    return AxiosClient.get<ResponseData<DanhSachPhimPhanTrang> | ResponseData<string>>(
      process.env.REACT_APP_LINK_QUAN_LY_PHIM_LAY_DANH_SACH_PHIM_PHAN_TRANG,
      {
        params: { maNhom, soPhanTuTrenTrang, soTrang, tenPhim },
      }
    );
  },

  layDanhSachPhimTheoNgay(
    maNhom: ThongTinPhim['maNhom'],
    tenPhim: string,
    soTrang: number,
    soPhanTuTrenTrang: number,
    tuNgay: string,
    denNgay: string
  ) {
    return AxiosClient.get<ResponseData<Array<ThongTinPhim>> | ResponseData<string>>(
      process.env.REACT_APP_LINK_QUAN_LY_PHIM_LAY_DANH_PHIM_THEO_NGAY,
      {
        params: { maNhom, soPhanTuTrenTrang, soTrang, tenPhim, tuNgay, denNgay },
      }
    );
  },

  layThongTinPhim(maPhim: Phim['maPhim']) {
    return AxiosClient.get<ResponseData<ThongTinPhim> | ResponseData<string>>(
      process.env.REACT_APP_LINK_QUAN_LY_PHIM_LAY_THONG_TIN_PHIM,
      {
        params: { maPhim },
      }
    );
  },

  themPhimUpLoadHinh(films: FormData) {
    return AxiosClient.post<ResponseData<ThongTinPhim> | ResponseData<string>>(
      process.env.REACT_APP_LINK_QUAN_LY_PHIM_THEM_PHIM_UP_LOAD_HINH,
      films
    );
  },

  capNhatPhimUpLoad(film: FormData) {
    return AxiosClient.post<ResponseData<string> | ResponseData<string>>(
      process.env.REACT_APP_LINK_QUAN_LY_PHIM_CAP_NHAT_PHIM_UPLOAD,
      film
    );
  },

  quanLyPhim(file: FormData, tenPhim: string, maNhom: ThongTinPhim['maNhom']) {
    AxiosClient.post<ResponseData<string>>(process.env.REACT_APP_LINK_QUAN_LY_PHIM, file, {
      params: { tenPhim, maNhom },
    });
  },

  quanLyPhimXP(maPhim: Phim['maPhim']) {
    return AxiosClient.delete<ResponseData<string>>(process.env.REACT_APP_LINK_QUAN_LY_PHIM_XP, {
      params: { maPhim },
    });
  },

  xoaPhim(maPhim: Phim['maPhim']) {
    return AxiosClient.delete<ResponseData<string>>(
      process.env.REACT_APP_LINK_QUAN_LY_PHIM_XOA_PHIM,
      {
        params: { maPhim },
      }
    );
  },
};
