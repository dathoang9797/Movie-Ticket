import { Ghe } from '@Core/Models/Ghe.type';

export type VeVM = {
  maGhe: number;
  giaVe: number;
};

export type DanhSachVeDat = {
  maLichChieu: number;
  danhSachVe: VeVM[];
};

export type ThongTinVePhim = {
  idThongTinVePhim: string;
  maLichChieu: number;
  tenCumRap: string;
  tenRap: string;
  diaChi: string;
  tenPhim: string;
  hinhAnh: string;
  ngayChieu: string;
  gioChieu: string;
};

export type DanhSachPhongVe = {
  thongTinPhim: ThongTinVePhim;
  danhSachGhe: Ghe[];
};
