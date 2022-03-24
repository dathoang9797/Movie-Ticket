import { HeThongRapChieu } from '@Core/Models/Rap.type';

export type Phim = {
  maPhim: number;
  ngayChieuGioChieu: string;
  maRap: string;
  giaVe: number;
};

export type LichChieuTheoPhim = {
  idLichChieuTheoPhim: string;
  maLichChieu: number;
  maRap: string;
  tenRap: string;
  ngayChieuGioChieu: string;
  giaVe: number;
};

export type LichChieuPhim = { thoiLuong: number } & LichChieuTheoPhim;

export type ThongTinPhim = {
  idThongTinPhim: string;
  daXoa?: boolean;
  biDanh?: string;
  maPhim: number;
  tenPhim: string;
  trailer: string;
  hinhAnh: string;
  moTa: string;
  maNhom: string;
  hot: boolean;
  dangChieu: boolean;
  sapChieu: boolean;
  ngayKhoiChieu: string;
  danhGia: number;
};

export type DanhSachPhim = {
  idDanhSachPhim: string;
  lstLichChieuTheoPhim: LichChieuTheoPhim[];
} & Pick<ThongTinPhim, 'maPhim' | 'tenPhim' | 'hinhAnh' | 'hot' | 'dangChieu' | 'sapChieu'>;

export type DanhSachPhimPhanTrang = {
  currentPage: number;
  count: number;
  totalPages: number;
  totalCount: number;
  items: ThongTinPhim[];
};

export type ThongTinLichChieuPhim = {
  heThongRapChieu: HeThongRapChieu[];
} & ThongTinPhim;
