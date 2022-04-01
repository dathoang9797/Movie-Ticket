import { DanhSachPhim, LichChieuPhim } from '@Core/Models/Phim.type';

export type Rap = {
  maRap: number;
  tenRap: string;
};

export type CumRap = {
  idCumRap: string;
  danhSachPhim: DanhSachPhim[];
  maCumRap: string;
  tenCumRap: string;
  hinhAnh: string;
  diaChi: string;
};

export type CumRapChieu = {
  idCumRapChieu: string;
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
  idHeThongRapChieu: string;
  cumRapChieu: CumRapChieu[];
  maHeThongRap: string;
  tenHeThongRap: string;
  logo: string;
};

export type ThongTinLichChieuHeThongRap = {
  idHeThongRapChieu: string;
  lstCumRap: CumRap[];
  maHeThongRap: string;
  tenHeThongRap: string;
  logo: string;
  mahom: string;
};
