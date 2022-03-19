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
  dangNhap(ndDangNhap: ThongTinDangNhapVM) {
    return AxiosClient.post<ResponseData<Omit<NguoiDungVM, 'matKhau'>> | ResponseData<string>>(
      process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG_DANG_NHAP,
      ndDangNhap
    );
  },

  dangKy(ndDangKy: Omit<NguoiDungVM, 'accessToken' | 'maLoaiNguoiDung'>) {
    return AxiosClient.post<
      ResponseData<Omit<NguoiDungVM, 'accessToken' | 'maLoaiNguoiDung'>> | ResponseData<string>
    >(process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG_DANG_KY, ndDangKy);
  },

  layDanhSachLoaiNguoiDung() {
    return AxiosClient.get<ResponseData<Array<LoaiNguoiDung>> | ResponseData<string>>(
      process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG_LAY_DANH_SACH_LOAI_NGUOI_DUNG
    );
  },

  layDanhSachNguoiDung(maNhom: NguoiDungVM['maNhom'], tuKhoa?: string) {
    return AxiosClient.get<
      ResponseData<
        | Array<Omit<NguoiDungVM, 'maNhom' | 'accessToken' | 'maLoaiNguoiDung'>>
        | ResponseData<string>
      >
    >(process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG_LAY_DANH_SACH_NGUOI_DUNG, {
      params: { maNhom, tuKhoa },
    });
  },

  layDanhSachNguoiDungPhanTrang(
    maNhom: NguoiDungVM['maNhom'],
    tuKhoa: string,
    soTrang: number,
    soPhanTuTrenTrang: number
  ) {
    return AxiosClient.get<ResponseData<DanhSachNguoiDungPhanTrang> | ResponseData<string>>(
      process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG_LAY_DANH_SACH_NGUOI_DUNG_PHAN_TRANG,
      {
        params: { maNhom, tuKhoa, soTrang, soPhanTuTrenTrang },
      }
    );
  },

  timKiemNguoiDung(maNhom: NguoiDungVM['maNhom'], tuKhoa: string) {
    return AxiosClient.get<
      ResponseData<Array<Omit<NguoiDungVM, 'maNhom' | 'accessToken'>>> | ResponseData<string>
    >(process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG_TIM_KIEM_NGUOI_DUNG, {
      params: { maNhom, tuKhoa },
    });
  },

  timKiemNguoiDungPhanTrang(
    maNhom: NguoiDungVM['maNhom'],
    tuKhoa: string,
    soTrang: number,
    soPhanTuTrenTrang: number
  ) {
    return AxiosClient.get<ResponseData<DanhSachNguoiDungPhanTrang> | ResponseData<string>>(
      process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG_TIM_KIEM_NGUOI_DUNG_PHAN_TRANG,
      {
        params: { maNhom, tuKhoa, soTrang, soPhanTuTrenTrang },
      }
    );
  },

  thongTinTaiKhoan() {
    return AxiosClient.post<ResponseData<ThongTinTaiKhoan> | ResponseData<string>>(
      process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG_THONG_TIN_TAI_KHOAN
    );
  },

  layThongTinNguoiDung(taiKhoan: NguoiDungVM['taiKhoan']) {
    return AxiosClient.post<ResponseData<string>>(
      process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG_LAY_THONG_TIN_NGUOI_DUNG,
      null,
      { params: { taiKhoan } }
    );
  },

  themNguoiDung(noiDung: Omit<NguoiDungVM, 'accessToken'>) {
    return AxiosClient.post<ResponseData<string>>(
      process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG_THEM_NGUOI_DUNG,
      noiDung
    );
  },

  capNhatThongTinNguoiDung(noiDung: Omit<NguoiDungVM, 'accessToken'>) {
    return AxiosClient.put<ResponseData<ThongTinTaiKhoan> | ResponseData<string>>(
      process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG_CAP_NHAT_THONG_TIN_NGUOI_DUNG,
      noiDung
    );
  },

  xoaNguoiDung(taiKhoan: NguoiDungVM['taiKhoan']) {
    return AxiosClient.delete<ResponseData<string>>(
      process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG_XOA_NGUOI_DUNG,
      { params: { taiKhoan } }
    );
  },
};
