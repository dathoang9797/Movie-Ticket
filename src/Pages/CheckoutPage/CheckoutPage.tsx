import { connection } from '@Config/WebSocket';
import { DanhSachGheDaDat, Ghe } from '@Core/Models/Ghe.type';
import { PropsParams } from '@Core/Models/Global.type';
import CheckoutKetQuaDatVe from '@Pages/CheckoutPage/CheckoutKetQuaDatVe';
import CheckoutTicket from '@Pages/CheckoutPage/CheckoutTicket';
import { useAppDispatch, useAppSelector } from '@Redux/hook';
import {
  chuyenTabAction,
  setDanhSachGheKhachDatAction,
} from '@Redux/Reducers/QuanLyDatVeReducer/QuanLyDatVeAction';
import { selectorVeState } from '@Redux/Reducers/QuanLyDatVeReducer/QuanLyDatVeSelector';
import { fetchDanhSachPhongVeThunk } from '@Redux/Reducers/QuanLyDatVeReducer/QuanLyDatVeThunk';
import { selectorNguoiDungState } from '@Redux/Reducers/QuanLyNguoiDungReducer/QuanLyNguoiDungSelector';
import { localService } from '@Services/LocalStorageService';
import History from '@Utils/Libs/History';
import { showError } from '@Utils/ShowError';
import { message, Tabs } from 'antd';
import _ from 'lodash';
import React, { Fragment, useCallback, useEffect } from 'react';
import { NavLink, RouteComponentProps } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;

type PropsCheckoutPage = RouteComponentProps<PropsParams>;

function CheckoutPage(props: PropsCheckoutPage) {
  const { userInfo, thongTinNguoiDung } = useAppSelector(selectorNguoiDungState);
  const { danhSachGheDangDat, chiTietPhongVe, tabActive, danhSachGheKhachDat } =
    useAppSelector(selectorVeState);
  const dispatch = useAppDispatch();

  const operations = (
    <Fragment>
      {!_.isEmpty(userInfo) ? (
        <Fragment>
          <button
            onClick={() => {
              History.push(process.env.REACT_APP_LINK_PROFILE);
            }}
          >
            <div className='rounded-full bg-red-600 w-10 h-10 flex items-center justify-center m-auto'>
              {userInfo.taiKhoan.substring(0, 1)}
            </div>
            <p>Hello !{userInfo.taiKhoan}</p>
          </button>
          <button
            className='bg-red-600'
            onClick={() => {
              localService.removeUserInfo();
              History.push(process.env.REACT_APP_LINK_HOME);
              window.location.reload();
            }}
          >
            Đăng Xuất
          </button>
        </Fragment>
      ) : (
        ''
      )}
    </Fragment>
  );

  const clearGhe = useCallback(
    (event: BeforeUnloadEvent) => {
      const connectSocketHuyDatGhe = process.env.REACT_APP_CONNECT_EVENT_SOCKET_HUY_DAT;
      const taiKhoan = userInfo.taiKhoan;
      const maLichChieu = props.match.params.maLichChieu;
      connection.invoke(connectSocketHuyDatGhe, taiKhoan, maLichChieu);
    },
    [props.match.params.maLichChieu, userInfo.taiKhoan]
  );

  useEffect(() => {
    const connectSocketLoadDanhSachGheDaDat =
      process.env.REACT_APP_CONNECT_EVENT_SOCKET_LOAD_DANH_SACH_GHE_DA_DAT;
    connection.on(connectSocketLoadDanhSachGheDaDat, (dsGheDaDat: DanhSachGheDaDat) => {
      dsGheDaDat = dsGheDaDat.filter((item) => item.taiKhoan !== userInfo.taiKhoan);
      const arrGheKhachDat = dsGheDaDat.reduce((result, item) => {
        const arrGhe = JSON.parse(item.danhSachGhe) as Ghe[];
        return [...result, ...arrGhe];
      }, [] as Ghe[]);

      const sortArrGheKhachDatDuplicated = _.uniqBy(arrGheKhachDat, 'maGhe');
      dispatch(setDanhSachGheKhachDatAction(sortArrGheKhachDatDuplicated));
    });
    window.addEventListener('beforeunload', clearGhe);
    return () => window.removeEventListener('beforeunload', clearGhe);
  }, [clearGhe, dispatch, userInfo.taiKhoan]);

  useEffect(() => {
    const connectSocketLoadDanhSachGhe =
      process.env.REACT_APP_CONNECT_EVENT_SOCKET_LOAD_DANH_SACH_GHE;
    const maLichChieu = props.match.params.maLichChieu;
    connection.invoke(connectSocketLoadDanhSachGhe, maLichChieu);
  }, [props.match.params.maLichChieu]);

  useEffect(() => {
    const connectSocketDatVeThanhThong =
      process.env.REACT_APP_CONNECT_EVENT_SOCKET_DAT_VE_THANH_CONG;
    if (!props.match.params.maLichChieu) {
      return message.error('Không tìm thấy mã phim');
    }
    const maLichChieu = props.match.params.maLichChieu;
    dispatch(fetchDanhSachPhongVeThunk(+maLichChieu, showError));

    connection.on(connectSocketDatVeThanhThong, () => {
      dispatch(fetchDanhSachPhongVeThunk(+maLichChieu, showError));
    });
  }, [dispatch, props.match.params.maLichChieu]);

  useEffect(() => {
    return () => {
      dispatch(chuyenTabAction(1));
    };
  }, [dispatch]);

  return (
    <Tabs
      tabBarExtraContent={operations}
      defaultActiveKey='1'
      activeKey={tabActive}
      className='px-5'
      onChange={(key) => dispatch(chuyenTabAction(+key))}
    >
      <TabPane tab='01 CHỌN GHẾ & THANH TOÁN ' key='1'>
        <CheckoutTicket
          {...props}
          userInfo={userInfo}
          danhSachGheDangDat={danhSachGheDangDat}
          chiTietPhongVe={chiTietPhongVe}
          danhSachGheKhachDat={danhSachGheKhachDat}
        />
      </TabPane>
      <TabPane tab='02 KẾT QUẢ ĐẶT VÉ' key='2'>
        <CheckoutKetQuaDatVe {...props} thongTinNguoiDung={thongTinNguoiDung} />
      </TabPane>
      <TabPane
        tab={
          <div>
            <NavLink to={process.env.REACT_APP_LINK_HOME}>
              <HomeOutlined />
            </NavLink>
          </div>
        }
        key='3'
      ></TabPane>
    </Tabs>
  );
}

export default CheckoutPage;
