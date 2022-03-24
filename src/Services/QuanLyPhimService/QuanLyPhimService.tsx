import { Banner } from '@Core/Models/Banner.type';
import { ResponseData, ResponseErrorDanhSachPhim } from '@Core/Models/Global.type';
import { DanhSachPhimPhanTrang, Phim, ThongTinPhim } from '@Core/Models/Phim.type';
import AxiosClient from '@Utils/Http/AxiosClient';

export const quanLyPhimService = {
  layDanhSachBanner(isLoading?: boolean) {
    return AxiosClient.get<ResponseData<Array<Banner>> | ResponseData<string>>(
      process.env.REACT_APP_LINK_QUAN_LY_PHIM_LAY_DANH_SACH_BANNER,
      { headers: { isLoading: isLoading ?? true } }
    );
  },

  layDanhSachPhim(maNhom?: ThongTinPhim['maNhom'], tenPhim?: string, isLoading?: boolean) {
    return AxiosClient.get<
      | ResponseData<Array<ThongTinPhim>>
      | ResponseData<ResponseErrorDanhSachPhim>
      | ResponseData<string>
    >(process.env.REACT_APP_LINK_QUAN_LY_PHIM_LAY_DANH_SACH_PHIM, {
      params: { maNhom, tenPhim },
      headers: { isLoading: isLoading ?? true },
    });
  },

  layDanhSachPhimPhanTrang(
    maNhom?: ThongTinPhim['maNhom'],
    tenPhim?: string,
    soTrang?: number,
    soPhanTuTrenTrang?: number,
    isLoading?: boolean
  ) {
    return AxiosClient.get<ResponseData<DanhSachPhimPhanTrang> | ResponseData<string>>(
      process.env.REACT_APP_LINK_QUAN_LY_PHIM_LAY_DANH_SACH_PHIM_PHAN_TRANG,
      {
        params: { maNhom, soPhanTuTrenTrang, soTrang, tenPhim },
        headers: { isLoading: isLoading ?? true },
      }
    );
  },

  layDanhSachPhimTheoNgay(
    maNhom: ThongTinPhim['maNhom'],
    tenPhim: string,
    soTrang: number,
    soPhanTuTrenTrang: number,
    tuNgay: string,
    denNgay: string,
    isLoading?: boolean
  ) {
    return AxiosClient.get<ResponseData<Array<ThongTinPhim>> | ResponseData<string>>(
      process.env.REACT_APP_LINK_QUAN_LY_PHIM_LAY_DANH_PHIM_THEO_NGAY,
      {
        params: { maNhom, soPhanTuTrenTrang, soTrang, tenPhim, tuNgay, denNgay },
        headers: { isLoading: isLoading ?? true },
      }
    );
  },

  layThongTinPhim(maPhim: Phim['maPhim'], isLoading?: boolean) {
    return AxiosClient.get<ResponseData<ThongTinPhim> | ResponseData<string>>(
      process.env.REACT_APP_LINK_QUAN_LY_PHIM_LAY_THONG_TIN_PHIM,
      {
        params: { maPhim },
        headers: { isLoading: isLoading ?? true },
      }
    );
  },

  themPhimUpLoadHinh(formData: FormData, isLoading?: boolean) {
    return AxiosClient.post<ResponseData<ThongTinPhim> | ResponseData<string>>(
      process.env.REACT_APP_LINK_QUAN_LY_PHIM_THEM_PHIM_UP_LOAD_HINH,
      formData,
      { headers: { isLoading: isLoading ?? true } }
    );
  },

  capNhatPhimUpLoad(film: FormData, isLoading?: boolean) {
    return AxiosClient.post<ResponseData<ThongTinPhim | string>>(
      process.env.REACT_APP_LINK_QUAN_LY_PHIM_CAP_NHAT_PHIM_UPLOAD,
      film,
      { headers: { isLoading: isLoading ?? true } }
    );
  },

  quanLyPhim(file: FormData, tenPhim: string, maNhom: ThongTinPhim['maNhom'], isLoading?: boolean) {
    AxiosClient.post<ResponseData<string>>(process.env.REACT_APP_LINK_QUAN_LY_PHIM, file, {
      params: { tenPhim, maNhom },
      headers: { isLoading: isLoading ?? true },
    });
  },

  quanLyPhimXP(maPhim: Phim['maPhim'], isLoading?: boolean) {
    return AxiosClient.delete<ResponseData<string>>(process.env.REACT_APP_LINK_QUAN_LY_PHIM_XP, {
      params: { maPhim },
      headers: { isLoading: isLoading ?? true },
    });
  },

  xoaPhim(maPhim: Phim['maPhim'], isLoading?: boolean) {
    return AxiosClient.delete<ResponseData<string>>(
      process.env.REACT_APP_LINK_QUAN_LY_PHIM_XOA_PHIM,
      {
        params: { maPhim },
        headers: { isLoading: isLoading ?? true },
      }
    );
  },
};
