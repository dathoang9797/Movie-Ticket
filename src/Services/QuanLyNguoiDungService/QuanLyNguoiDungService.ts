import AxiosClient from '@Utils/Http/AxiosClient';
import { ResponseData } from '@Models/Global.type';
import {
  ThongTinDangNhapVM,
  NguoiDungVM,
  LoaiNguoiDung,
  DanhSachNguoiDungPhanTrang,
  ThongTinTaiKhoan,
} from '@Models/NguoiDung.type';

export const quanLyNguoiDungService = {
  dangNhap(ndDangNhap: ThongTinDangNhapVM) {
    const url = '/QuanLyNguoiDung/DangNhap';
    return AxiosClient.post<ResponseData<Omit<NguoiDungVM, 'matKhau'>> | ResponseData<string>>(
      url,
      ndDangNhap
    );
  },

  dangKy(ndDangKy: Omit<NguoiDungVM, 'accessToken' | 'maLoaiNguoiDung'>) {
    const url = '/QuanLyNguoiDung/DangKy';
    return AxiosClient.post<
      ResponseData<Omit<NguoiDungVM, 'accessToken' | 'maLoaiNguoiDung'>> | ResponseData<string>
    >(url, ndDangKy);
  },

  layDanhSachLoaiNguoiDung() {
    const url = '/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung';
    return AxiosClient.get<ResponseData<Array<LoaiNguoiDung>> | ResponseData<string>>(url);
  },

  layDanhSachNguoiDung(maNhom: NguoiDungVM['maNhom'], tuKhoa?: string) {
    const url = '/QuanLyNguoiDung/LayDanhSachNguoiDung';
    return AxiosClient.get<
      ResponseData<
        | Array<Omit<NguoiDungVM, 'maNhom' | 'accessToken' | 'maLoaiNguoiDung'>>
        | ResponseData<string>
      >
    >(url, { params: { maNhom, tuKhoa } });
  },

  layDanhSachNguoiDungPhanTrang(
    maNhom: NguoiDungVM['maNhom'],
    tuKhoa: string,
    soTrang: number,
    soPhanTuTrenTrang: number
  ) {
    const url = '/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang';
    return AxiosClient.get<ResponseData<DanhSachNguoiDungPhanTrang> | ResponseData<string>>(url, {
      params: { maNhom, tuKhoa, soTrang, soPhanTuTrenTrang },
    });
  },

  timKiemNguoiDung(maNhom: NguoiDungVM['maNhom'], tuKhoa: string) {
    const url = '/QuanLyNguoiDung/TimKiemNguoiDung';
    return AxiosClient.get<
      ResponseData<Array<Omit<NguoiDungVM, 'maNhom' | 'accessToken'>>> | ResponseData<string>
    >(url, {
      params: { maNhom, tuKhoa },
    });
  },

  timKiemNguoiDungPhanTrang(
    maNhom: NguoiDungVM['maNhom'],
    tuKhoa: string,
    soTrang: number,
    soPhanTuTrenTrang: number
  ) {
    const url = '/QuanLyNguoiDung/TimKiemNguoiDungPhanTrang';
    return AxiosClient.get<ResponseData<DanhSachNguoiDungPhanTrang> | ResponseData<string>>(url, {
      params: { maNhom, tuKhoa, soTrang, soPhanTuTrenTrang },
    });
  },

  thongTinTaiKhoan() {
    const url = '/QuanLyNguoiDung/ThongTinTaiKhoan';
    return AxiosClient.post<ResponseData<ThongTinTaiKhoan> | ResponseData<string>>(url);
  },

  layThongTinNguoiDung(taiKhoan: NguoiDungVM['taiKhoan']) {
    const url = '/QuanLyNguoiDung/LayThongTinNguoiDung';
    return AxiosClient.post<ResponseData<string>>(url, null, { params: { taiKhoan } });
  },

  themNguoiDung(noiDung: Omit<NguoiDungVM, 'accessToken'>) {
    const url = '/QuanLyNguoiDung/ThemNguoiDung';
    return AxiosClient.post<ResponseData<string>>(url, noiDung);
  },

  capNhatThongTinNguoiDung(noiDung: Omit<NguoiDungVM, 'accessToken'>) {
    const url = '/QuanLyNguoiDung/CapNhatThongTinNguoiDung';
    return AxiosClient.put<ResponseData<ThongTinTaiKhoan> | ResponseData<string>>(url, noiDung);
  },

  xoaNguoiDung(taiKhoan: NguoiDungVM['taiKhoan']) {
    const url = '/QuanLyNguoiDung/XoaNguoiDung';
    return AxiosClient.delete<ResponseData<string>>(url, { params: { taiKhoan } });
  },
};
