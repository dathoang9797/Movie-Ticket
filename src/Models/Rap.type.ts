import { DanhSachPhim, LichChieuPhim } from '@Models/Phim.type';

type Rap = {
  maRap: number;
  tenRap: string;
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
  cumRapChieu: {
    lichChieuPhim: LichChieuPhim[];
    maCumRap: string;
    tenCumRap: string;
    hinhAnh: string;
    diaChi: string;
  }[];
  maHeThongRap: string;
  tenHeThongRap: string;
  logo: string;
};

export type ThongTinLichChieuHeThongRap = {
  lstCumRap: {
    danhSachPhim: DanhSachPhim[];
    maCumRap: string;
    tenCumRap: string;
    hinhAnh: string;
    diaChi: string;
  }[];
  maHeThongRap: string;
  tenHeThongRap: string;
  logo: string;
  mahom: string;
};
