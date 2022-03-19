import { PropsTemplate } from '@Core/Models/Global.type';
import { localService } from '@Services/LocalStorageService/LocalStorageService';
import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router';
import { useAppSelector } from '@Redux/hook';
import { selectorNguoiDungState } from '@Redux/Reducers/QuanLyNguoiDungReducer/QuanLyNguoiDungSelector';

const CheckoutTemplate = ({ Component, ...restRoute }: PropsTemplate) => {
  const { userInfo } = useAppSelector(selectorNguoiDungState);

  useEffect(() => window.scrollTo(0, 0));

  if (!localService.getUserInfo()) {
    return <Redirect to={process.env.REACT_APP_LINK_HOME} />;
  }

  if (userInfo.maLoaiNguoiDung !== process.env.REACT_APP_MA_LOAI_NGUOI_DUNG_QUAN_TRI) {
    alert('Bạn không có quyền truy cập vào trang này');
    return <Redirect to={process.env.REACT_APP_LINK_HOME} />;
  }

  return (
    <Route
      {...restRoute}
      render={(propsRoute) => (
        <>
          <Component {...propsRoute} />
        </>
      )}
    />
  );
};

export default CheckoutTemplate;
