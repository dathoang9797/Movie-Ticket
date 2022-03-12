import { ThongTinVePhim } from '@Models/Ve.type';

export type ThongTinDangNhapVM = {
  taiKhoan: string;
  matKhau: string;
};

export type NguoiDungVM = {
  taiKhoan: string;
  matKhau: string;
  email: string;
  soDt: string;
  maNhom: string;
  maLoaiNguoiDung: string;
  hoTen: string;
  accessToken: string;
};

export type LoaiNguoiDung = {
  maLoaiNguoiDung: string;
  tenLoai: string;
};

export type ThongTinTaiKhoan = Omit<NguoiDungVM, 'accessToken'> & {
  loaiNguoiDung: LoaiNguoiDung | null;
  thongTinDatVe: ThongTinVePhim[] | null;
};

export type DanhSachNguoiDungPhanTrang = {
  currentPage: number;
  count: number;
  totalPages: number;
  totalCount: number;
  items: Omit<NguoiDungVM, 'accessToken'>[];
};
