import { CloseOutlined, UserOutlined, SmileOutlined } from '@ant-design/icons';
import { Ghe } from '@Core/Models/Ghe.type';
import { NguoiDungVM } from '@Core/Models/NguoiDung.type';
import {
  GheDaDat,
  GheDaDuocDat,
  GheDangDat,
  GheThuong,
  GheVip,
  GheKhanhDangDat,
} from '@Pages/CheckoutPage/CheckoutTicket/CheckoutGhe/CheckoutGhe.styles';
import { useAppDispatch } from '@Redux/hook';
import { datGheThunk } from '@Redux/Reducers/QuanLyDatVeReducer/QuanLyDatVeThunk';
import { showError } from '@Utils/ShowError';
import React from 'react';

type PropsCheckoutGhe = {
  ghe: Ghe;
  userInfo: Omit<NguoiDungVM, 'matKhau'>;
  danhSachGheDangDat: Ghe[];
  danhSachGheKhachDat: Ghe[];
  maLichChieu: string;
};

function CheckoutGhe(props: PropsCheckoutGhe) {
  const dispatch = useAppDispatch();
  const { ghe, userInfo, danhSachGheDangDat, danhSachGheKhachDat, maLichChieu } = props;
  const indexGhe = danhSachGheDangDat.findIndex((gheDangDat) => gheDangDat.maGhe === ghe.maGhe);
  const indexGheKD = danhSachGheKhachDat.findIndex(
    (gheKhachDat) => gheKhachDat.maGhe === ghe.maGhe
  );

  const checkGhe = () => {
    switch (true) {
      case indexGheKD !== -1: {
        return (
          <GheKhanhDangDat>
            <SmileOutlined />
          </GheKhanhDangDat>
        );
      }
      case ghe.loaiGhe === 'Vip' && indexGhe === -1: {
        return (
          <GheVip onClick={() => dispatch(datGheThunk(ghe, +maLichChieu, showError))}>
            {ghe.stt}
          </GheVip>
        );
      }

      case ghe.daDat && userInfo.taiKhoan !== ghe.taiKhoanNguoiDat: {
        return (
          <GheDaDat disabled onClick={() => dispatch(datGheThunk(ghe, +maLichChieu, showError))}>
            <CloseOutlined style={{ fontWeight: 'bold', lineHeight: '35px', verticalAlign: 0 }} />
          </GheDaDat>
        );
      }

      case userInfo.taiKhoan === ghe.taiKhoanNguoiDat: {
        return (
          <GheDaDuocDat>
            <UserOutlined />
          </GheDaDuocDat>
        );
      }

      case indexGhe !== -1 || (ghe.loaiGhe === 'Vip' && indexGhe === -1): {
        return (
          <GheDangDat onClick={() => dispatch(datGheThunk(ghe, +maLichChieu, showError))}>
            {ghe.stt}
          </GheDangDat>
        );
      }

      default: {
        return (
          <GheThuong onClick={() => dispatch(datGheThunk(ghe, +maLichChieu, showError))}>
            {ghe.stt}
          </GheThuong>
        );
      }
    }
  };
  return <>{checkGhe()}</>;
}

export default CheckoutGhe;
