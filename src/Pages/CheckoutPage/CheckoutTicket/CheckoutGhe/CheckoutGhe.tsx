import { CloseOutlined, UserOutlined } from '@ant-design/icons';
import { Ghe } from '@Core/Models/Ghe.type';
import { NguoiDungVM } from '@Core/Models/NguoiDung.type';
import { GheStyle } from '@Pages/CheckoutPage/CheckoutTicket/CheckoutGhe/CheckoutGhe.styles';
import { useAppDispatch } from '@Redux/hook';
import { quanLyDatVeThunk } from '@Redux/Reducers/QuanLyDatVeReducer/QuanLyDatVeThunk';
import React from 'react';
import { SmileOutlined } from '@ant-design/icons';

type PropsCheckoutGhe = {
  ghe: Ghe;
  userInfo: Omit<NguoiDungVM, 'matKhau'>;
  maLichChieu: string;
};

const { setDatGheAsync } = quanLyDatVeThunk;

function CheckoutGhe(props: PropsCheckoutGhe) {
  const dispatch = useAppDispatch();
  const { ghe, userInfo, maLichChieu } = props;
  const { taiKhoan } = userInfo;
  const { taiKhoanNguoiDat, loaiGhe, daDat, stt } = ghe;
  console.log('CheckoutGhe render');

  const handleDatGhe = () => {
    const params = { ghe, maLichChieu: +maLichChieu };
    dispatch(setDatGheAsync(params));
  };

  const checkGhe = () => {
    switch (true) {
      case !daDat && ghe.status?.length !== 0 && taiKhoan !== taiKhoanNguoiDat: {
        return (
          <GheStyle.GheKhanhDangDat>
            <SmileOutlined />
          </GheStyle.GheKhanhDangDat>
        );
      }

      case daDat && taiKhoan !== taiKhoanNguoiDat: {
        return (
          <GheStyle.GheDaDat disabled onClick={handleDatGhe}>
            <CloseOutlined style={{ fontWeight: 'bold', lineHeight: '35px', verticalAlign: 0 }} />
          </GheStyle.GheDaDat>
        );
      }

      case daDat && taiKhoan === taiKhoanNguoiDat: {
        return (
          <GheStyle.GheUserDaDat>
            <UserOutlined />
          </GheStyle.GheUserDaDat>
        );
      }

      case !daDat && loaiGhe === 'Vip' && !ghe.status?.split('-').reverse()[0]: {
        return <GheStyle.GheVip onClick={handleDatGhe}>{stt}</GheStyle.GheVip>;
      }

      case !daDat && taiKhoan === ghe.status?.split('-').reverse()[0]: {
        return <GheStyle.GheDangDat onClick={handleDatGhe}>{stt}</GheStyle.GheDangDat>;
      }

      default: {
        return <GheStyle.GheThuong onClick={handleDatGhe}>{ghe.stt}</GheStyle.GheThuong>;
      }
    }
  };
  return <>{checkGhe()}</>;
}

export default React.memo(CheckoutGhe);
