import { Rap, CumRap, ThongTinHeThongRap } from '@Core/Models/Rap.type';
import { Ghe } from '@Core/Models/Ghe.type';
import { VeVM } from '@Core/Models/Ve.type';

type IdDanhSachNguoiDung = { idDanhSachNguoiDung: string };

type DanhSachNguoiDung = Pick<
  Rap & CumRap & ThongTinHeThongRap & Ghe & IdDanhSachNguoiDung,
  | 'maRap'
  | 'tenRap'
  | 'maCumRap'
  | 'tenCumRap'
  | 'maHeThongRap'
  | 'tenHeThongRap'
  | 'maGhe'
  | 'tenGhe'
  | 'idDanhSachNguoiDung'
>[];

type ThongTinVeNguoiDung = VeVM & {
  idNguoiDung: string;
  tenPhim: string;
  hinhAnh: string;
  ngayDat: string;
  thoiLuongPhim: 120;
  danhSachGhe: DanhSachNguoiDung;
};

export type ThongTinDangNhapVM = {
  taiKhoan: string;
  matKhau: string;
};

export type NguoiDungVM = {
  taiKhoan: string;
  matKhau: string;
  email: string;
  soDT: string;
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
  thongTinDatVe: ThongTinVeNguoiDung[] | null;
};

export type DanhSachNguoiDungPhanTrang = {
  currentPage: number;
  count: number;
  totalPages: number;
  totalCount: number;
  items: Omit<NguoiDungVM, 'accessToken'>[];
};
