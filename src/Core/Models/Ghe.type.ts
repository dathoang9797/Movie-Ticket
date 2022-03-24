export type Ghe = {
  idGhe: string;
  status?: string;
  maGhe: number;
  tenGhe: string;
  maRap: number;
  loaiGhe: string;
  stt: string;
  giaVe: number;
  daDat: boolean;
  taiKhoanNguoiDat: string | null;
};

export type DanhSachGheDaDat = {
  taiKhoan: string;
  danhSachGhe: string;
  maLichChieu: number;
}[];
