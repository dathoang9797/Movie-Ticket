import { NguoiDungVM } from '@Models/NguoiDung.type';
import _ from 'lodash';

export const localService = {
  setUserInfo(value: Omit<NguoiDungVM, 'matKhau'>) {
    const data = JSON.stringify(value);
    localStorage.setItem(process.env.REACT_APP_LOCALSTORAGE_USER_INFO, data);
  },

  getUserInfo() {
    const userInfo = localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_USER_INFO);
    if (!_.isEmpty(userInfo) && !_.isNull(userInfo)) return JSON.parse(userInfo);
  },

  removeUserInfo() {
    localStorage.setItem(process.env.REACT_APP_LOCALSTORAGE_USER_INFO, '');
  },
};
