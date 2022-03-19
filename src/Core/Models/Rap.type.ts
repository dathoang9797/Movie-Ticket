import { DanhSachPhim, LichChieuPhim } from '@Core/Models/Phim.type';

export type Rap = {
  maRap: number;
  tenRap: string;
};

export type CumRap = {
  danhSachPhim: DanhSachPhim[];
  maCumRap: string;
  tenCumRap: string;
  hinhAnh: string;
  diaChi: string;
};

export type CumRapChieu = {
  lichChieuPhim: LichChieuPhim[];
  maCumRap: string;
  tenCumRap: string;
  hinhAnh: string;
  diaChi: string;
};

export type ThongTinHeThongRap = {
  maHeThongRap: string;
  tenHeThongRap: string;
  biDanh: string;
  logo: string;
};

export type ThongTinHeThongCumRap = {
  maCumRap: string;
  tenCumRap: string;
  diaChi: string;
  danhSachRap: Rap[];
};

export type HeThongRapChieu = {
  cumRapChieu: CumRapChieu[];
  maHeThongRap: string;
  tenHeThongRap: string;
  logo: string;
};

export type ThongTinLichChieuHeThongRap = {
  lstCumRap: CumRap[];
  maHeThongRap: string;
  tenHeThongRap: string;
  logo: string;
  mahom: string;
};
