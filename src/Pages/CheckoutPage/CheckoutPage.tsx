import { HomeOutlined } from '@ant-design/icons';
import { socketApp } from '@Config/WebSocket';
import { PropsRouterComponent } from '@Core/Models/Global.type';
import CheckoutKetQuaDatVe from '@Pages/CheckoutPage/CheckoutKetQuaDatVe';
import CheckoutTicket from '@Pages/CheckoutPage/CheckoutTicket';
import { useAppDispatch, useAppSelector } from '@Redux/hook';
import { quanLyDatVeAction } from '@Redux/Reducers/QuanLyDatVeSlice';
import { selecQuanLyDatVeState } from '@Redux/Selector/QuanLyDatVeSelect';
import { quanLyDatVeThunk } from '@Redux/Thunk/QuanLyDatVeThunk';
import { selectNguoiDungState } from '@Redux/Selector/QuanLyNguoiDungSelect';
import { localService } from '@Services/LocalStorageService';
import { showError } from '@Utils/Alert/PopUp';
import History from '@Utils/Libs/History';
import { Tabs } from 'antd';
import _ from 'lodash';
import React, { Fragment, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
type PropsCheckoutPage = PropsRouterComponent;

const { TabPane } = Tabs;
const { setChuyenTab } = quanLyDatVeAction;
const { getDanhSachPhongVeAsync } = quanLyDatVeThunk;
const { selectUserInfo, selectThongTinNguoiDung } = selectNguoiDungState;
const { selectChiTietPhongVe, selectTabActive, selectFilterGheDangDat, selectFilterGheRender } =
  selecQuanLyDatVeState;
const { socketClearGhe, socketDatVeThanhCong, socketLoadDanhSachGhe, socketLoadDanhSachGheDaDat } =
  socketApp;

function CheckoutPage(props: PropsCheckoutPage) {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(selectUserInfo);
  const thongTinNguoiDung = useAppSelector(selectThongTinNguoiDung);
  const chiTietPhongVe = useAppSelector(selectChiTietPhongVe);
  const tabActive = useAppSelector(selectTabActive);
  const danhSachGheDangDat = useAppSelector(selectFilterGheDangDat);
  const danhSachGheRender = useAppSelector(selectFilterGheRender);

  const { taiKhoan } = userInfo;
  console.log({ danhSachGheRender });
  console.log('render CheckoutPage');
  const [count, setCount] = useState(0);

  const operations = (
    <Fragment>
      {!_.isEmpty(taiKhoan) ? (
        <Fragment>
          <button
            onClick={() => {
              History.push(process.env.REACT_APP_LINK_PROFILE);
            }}
          >
            <div className='rounded-full bg-red-600 w-10 h-10 flex items-center justify-center m-auto'>
              {taiKhoan.substring(0, 1)}
            </div>
            <p>Hello !{taiKhoan}</p>
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

  useEffect(() => {
    const { maLichChieu } = props.match.params;
    if (!maLichChieu) {
      return showError('Không tìm thấy mã phim');
    }
    socketLoadDanhSachGheDaDat();
    socketDatVeThanhCong(maLichChieu);
    socketLoadDanhSachGhe(maLichChieu);
    dispatch(getDanhSachPhongVeAsync({ maLichChieu: +maLichChieu }));
    window.addEventListener('beforeunload', () => {
      socketClearGhe(maLichChieu);
    });
    return () => {
      window.removeEventListener('beforeunload', () => socketClearGhe(maLichChieu));
      dispatch(setChuyenTab(1));
    };
  }, []);

  return (
    <Tabs
      tabBarExtraContent={operations}
      defaultActiveKey='1'
      activeKey={tabActive}
      className='px-5'
      onChange={(key) => dispatch(setChuyenTab(+key))}
    >
      <TabPane tab='01 CHỌN GHẾ & THANH TOÁN ' key='1'>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Count {count}
        </button>
        <CheckoutTicket
          {...props}
          danhSachGheRender={danhSachGheRender}
          danhSachGheDangDat={danhSachGheDangDat}
          userInfo={userInfo}
          chiTietPhongVe={chiTietPhongVe}
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
