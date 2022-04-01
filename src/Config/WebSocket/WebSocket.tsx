import { DanhSachGheDaDat, Ghe } from '@Core/Models/Ghe.type';
import * as signalR from '@microsoft/signalr';
import { store } from '@Redux/store';
import { localService } from '@Services/LocalStorageService';
import _ from 'lodash';

export const connection = new signalR.HubConnectionBuilder()
  .withUrl(`${process.env.REACT_APP_URL_WEB_SOCKET}`)
  .configureLogging(signalR.LogLevel.Information)
  .build();

const socketLoadDanhSachGheDaDat = async () => {
  const quanLyDatVeReducer = await import('@Redux/Reducers/QuanLyDatVeSlice');
  const { quanLyDatVeAction } = quanLyDatVeReducer;
  const { setDanhSachGheKhachDat } = quanLyDatVeAction;
  const userInfo = localService.getUserInfo();
  const urlLoadDanhSachGheDaDat = process.env.REACT_APP_SOCKET_LOAD_DANH_SACH_GHE_DA_DAT;
  connection.on(urlLoadDanhSachGheDaDat, (dsGheDaDat: DanhSachGheDaDat) => {
    const arrGheKhachDat = dsGheDaDat.reduce((result, item) => {
      const arrGhe = JSON.parse(item.danhSachGhe) as Ghe[];
      const addPropsArrGhe = arrGhe.map((ghe) => {
        ghe.taiKhoanNguoiDat = item.taiKhoan ?? userInfo?.taiKhoan;
        return ghe;
      });
      return [...result, ...addPropsArrGhe];
    }, [] as Ghe[]);
    const sortArrGheKhachDatDuplicated = _.uniqBy(arrGheKhachDat, 'maGhe');
    store.dispatch(setDanhSachGheKhachDat(sortArrGheKhachDatDuplicated));
  });
};

const socketDatVeThanhCong = async (maLichChieu: string) => {
  const quanLyDatVeReducer = await import('@Redux/Thunk/QuanLyDatVeThunk');
  const { quanLyDatVeThunk } = quanLyDatVeReducer;
  const { getDanhSachPhongVeAsync } = quanLyDatVeThunk;
  const urlDatVeThanhCong = process.env.REACT_APP_SOCKET_DAT_VE_THANH_CONG;
  connection.on(urlDatVeThanhCong, () => {
    const params = { maLichChieu: +maLichChieu };
    store.dispatch(getDanhSachPhongVeAsync(params));
  });
};

const socketLoadDanhSachGhe = async (maLichChieu: string) => {
  const urlLoadDanhSachGhe = process.env.REACT_APP_SOCKET_LOAD_DANH_SACH_GHE;
  await connection.invoke(urlLoadDanhSachGhe, maLichChieu);
};

const socketClearGhe = async (maLichChieu: string) => {
  const userInfo = localService.getUserInfo();
  const urlHuyDatGhe = process.env.REACT_APP_SOCKET_HUY_DAT;
  await connection.invoke(urlHuyDatGhe, userInfo?.taiKhoan, maLichChieu);
};

export const socketApp = {
  socketLoadDanhSachGheDaDat,
  socketDatVeThanhCong,
  socketLoadDanhSachGhe,
  socketClearGhe,
};
