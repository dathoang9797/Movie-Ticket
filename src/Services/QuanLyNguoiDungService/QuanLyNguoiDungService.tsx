import AxiosClient from '@Utils/Http/AxiosClient';
import { ResponseData } from '@Core/Models/Global.type';
import {
  ThongTinDangNhapVM,
  NguoiDungVM,
  LoaiNguoiDung,
  DanhSachNguoiDungPhanTrang,
  ThongTinTaiKhoan,
} from '@Core/Models/NguoiDung.type';

export const quanLyNguoiDungService = {
  dangNhap(ndDangNhap: ThongTinDangNhapVM, isLoading?: boolean) {
    return AxiosClient.post<ResponseData<Omit<NguoiDungVM, 'matKhau'>> | ResponseData<string>>(
      process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG_DANG_NHAP,
      ndDangNhap,
      { headers: { isLoading: isLoading ?? true } }
    );
  },

  dangKy(ndDangKy: Omit<NguoiDungVM, 'accessToken' | 'maLoaiNguoiDung'>, isLoading?: boolean) {
    return (
      AxiosClient.post<
        ResponseData<Omit<NguoiDungVM, 'accessToken' | 'maLoaiNguoiDung'>> | ResponseData<string>
      >(process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG_DANG_KY, ndDangKy),
      { headers: { isLoading: isLoading ?? true } }
    );
  },

  layDanhSachLoaiNguoiDung(isLoading?: boolean) {
    return AxiosClient.get<ResponseData<Array<LoaiNguoiDung>> | ResponseData<string>>(
      process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG_LAY_DANH_SACH_LOAI_NGUOI_DUNG,
      { headers: { isLoading: isLoading ?? true } }
    );
  },

  layDanhSachNguoiDung(maNhom: NguoiDungVM['maNhom'], tuKhoa?: string, isLoading?: boolean) {
    return AxiosClient.get<
      ResponseData<
        | Array<Omit<NguoiDungVM, 'maNhom' | 'accessToken' | 'maLoaiNguoiDung'>>
        | ResponseData<string>
      >
    >(process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG_LAY_DANH_SACH_NGUOI_DUNG, {
      params: { maNhom, tuKhoa },
      headers: { isLoading: isLoading ?? true },
    });
  },

  layDanhSachNguoiDungPhanTrang(
    maNhom: NguoiDungVM['maNhom'],
    tuKhoa: string,
    soTrang: number,
    soPhanTuTrenTrang: number,
    isLoading?: boolean
  ) {
    return AxiosClient.get<ResponseData<DanhSachNguoiDungPhanTrang> | ResponseData<string>>(
      process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG_LAY_DANH_SACH_NGUOI_DUNG_PHAN_TRANG,
      {
        params: { maNhom, tuKhoa, soTrang, soPhanTuTrenTrang },
        headers: { isLoading: isLoading ?? true },
      }
    );
  },

  timKiemNguoiDung(maNhom: NguoiDungVM['maNhom'], tuKhoa: string, isLoading?: boolean) {
    return AxiosClient.get<
      ResponseData<Array<Omit<NguoiDungVM, 'maNhom' | 'accessToken'>>> | ResponseData<string>
    >(process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG_TIM_KIEM_NGUOI_DUNG, {
      params: { maNhom, tuKhoa },
      headers: { isLoading: isLoading ?? true },
    });
  },

  timKiemNguoiDungPhanTrang(
    maNhom: NguoiDungVM['maNhom'],
    tuKhoa: string,
    soTrang: number,
    soPhanTuTrenTrang: number,
    isLoading?: boolean
  ) {
    return AxiosClient.get<ResponseData<DanhSachNguoiDungPhanTrang> | ResponseData<string>>(
      process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG_TIM_KIEM_NGUOI_DUNG_PHAN_TRANG,
      {
        params: { maNhom, tuKhoa, soTrang, soPhanTuTrenTrang },
        headers: { isLoading: isLoading ?? true },
      }
    );
  },

  thongTinTaiKhoan(isLoading?: boolean) {
    return AxiosClient.post<ResponseData<ThongTinTaiKhoan> | ResponseData<string>>(
      process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG_THONG_TIN_TAI_KHOAN,
      { headers: { isLoading: isLoading ?? true } }
    );
  },

  layThongTinNguoiDung(taiKhoan: NguoiDungVM['taiKhoan'], isLoading?: boolean) {
    return AxiosClient.post<ResponseData<string>>(
      process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG_LAY_THONG_TIN_NGUOI_DUNG,
      null,
      { params: { taiKhoan }, headers: { isLoading: isLoading ?? true } }
    );
  },

  themNguoiDung(noiDung: Omit<NguoiDungVM, 'accessToken'>, isLoading?: boolean) {
    return AxiosClient.post<ResponseData<string>>(
      process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG_THEM_NGUOI_DUNG,
      noiDung,
      { headers: { isLoading: isLoading ?? true } }
    );
  },

  capNhatThongTinNguoiDung(noiDung: Omit<NguoiDungVM, 'accessToken'>, isLoading?: boolean) {
    return AxiosClient.put<ResponseData<ThongTinTaiKhoan> | ResponseData<string>>(
      process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG_CAP_NHAT_THONG_TIN_NGUOI_DUNG,
      noiDung,
      { headers: { isLoading: isLoading ?? true } }
    );
  },

  xoaNguoiDung(taiKhoan: NguoiDungVM['taiKhoan'], isLoading?: boolean) {
    return AxiosClient.delete<ResponseData<string>>(
      process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG_XOA_NGUOI_DUNG,
      { params: { taiKhoan }, headers: { isLoading: isLoading ?? true } }
    );
  },
};
