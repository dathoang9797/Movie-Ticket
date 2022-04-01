import AxiosClient from '@Utils/Http/AxiosClient';
import { Phim, ThongTinLichChieuPhim } from '@Core/Models/Phim.type';
import { ResponseData } from '@Core/Models/Global.type';
import { NguoiDungVM } from '@Core/Models/NguoiDung.type';
import {
  ThongTinHeThongRap,
  ThongTinHeThongCumRap,
  ThongTinLichChieuHeThongRap,
} from '@Core/Models/Rap.type';

export const quanLyRapService = {
  layThongTinHeThongRap(maHeThongRap?: string) {
    return AxiosClient.get<ResponseData<Array<ThongTinHeThongRap>> | ResponseData<string>>(
      process.env.REACT_APP_LINK_QUAN_LY_RAP_LAY_THONG_TIN_HE_THONG_RAP,
      {
        params: { maHeThongRap },
      }
    );
  },

  layThongTinCumRapTheoHeThong(maHeThongRap: string) {
    return AxiosClient.get<ResponseData<Array<ThongTinHeThongCumRap>> | ResponseData<string>>(
      process.env.REACT_APP_LINK_QUAN_LY_RAP_LAY_THONG_TIN_CUM_RAP_THEO_HE_THONG,
      {
        params: { maHeThongRap },
      }
    );
  },

  layThongTinLichChieuHeThongRap(maHeThongRap?: string, maNhom?: NguoiDungVM['maNhom']) {
    return AxiosClient.get<ResponseData<Array<ThongTinLichChieuHeThongRap>> | ResponseData<string>>(
      process.env.REACT_APP_LINK_QUAN_LY_RAP_LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP,
      {
        params: { maHeThongRap, maNhom },
      }
    );
  },

  layThongTinLichChieuPhim(MaPhim: Phim['maPhim']) {
    return AxiosClient.get<ResponseData<ThongTinLichChieuPhim> | ResponseData<string>>(
      process.env.REACT_APP_LINK_QUAN_LY_RAP_LAY_THONG_TIN_LICH_CHIEU_PHIM,
      {
        params: { MaPhim },
      }
    );
  },
};
