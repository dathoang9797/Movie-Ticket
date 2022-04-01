import { Ghe } from '@Core/Models/Ghe.type';
import { RootState } from '@Redux/store';
import { createSelector } from '@reduxjs/toolkit';

const selectTabActive = (state: RootState) => state.QuanLyDatVeReducer.tabActive;

const selectDanhSachGheKhachDat = (state: RootState) =>
  state.QuanLyDatVeReducer.danhSachGheKhachDat;

const selectDanhSachGheDangDat = (state: RootState) => state.QuanLyDatVeReducer.danhSachGheDangDat;

const selectChiTietPhongVe = (state: RootState) => state.QuanLyDatVeReducer.chiTietPhongVe;

const selectDanhSachGhe = (state: RootState) => state.QuanLyDatVeReducer.chiTietPhongVe.danhSachGhe;

const selectFilterGheDangDat: (state: RootState) => Ghe[] | -1 = createSelector(
  selectDanhSachGheDangDat,
  selectChiTietPhongVe,
  (danhSachGheDangDat, chiTietPhongVe) => {
    const { danhSachGhe } = chiTietPhongVe;
    if (danhSachGheDangDat.length === 0) return -1;
    return danhSachGheDangDat.filter((gheDangDat) => {
      return danhSachGhe.find((ghe) => ghe.maGhe === gheDangDat.maGhe);
    });
  }
);

const selectFilterGheKhachDat: (state: RootState) => Ghe[] | -1 = createSelector(
  selectDanhSachGheKhachDat,
  selectChiTietPhongVe,
  (danhSachGheKhachDat, chiTietPhongVe) => {
    const { danhSachGhe } = chiTietPhongVe;
    if (danhSachGheKhachDat.length === 0) return -1;
    return danhSachGheKhachDat.filter((gheKhachDat) => {
      return danhSachGhe.find((ghe) => ghe.maGhe === gheKhachDat.maGhe);
    });
  }
);

const selectFilterGheRender: (state: RootState) => Ghe[] = createSelector(
  selectDanhSachGhe,
  selectFilterGheDangDat,
  selectFilterGheKhachDat,
  (danhSachGhe, danhSachGheDangDat, danhSachGheKhachDat) => {
    const cloneDanhSachGhe = [...danhSachGhe];
    if (danhSachGheKhachDat !== -1) {
      danhSachGheKhachDat.forEach((gheKhachDat) => {
        const index = danhSachGhe.findIndex((ghe) => ghe.maGhe === gheKhachDat.maGhe);
        if (index !== -1) {
          cloneDanhSachGhe[index] = gheKhachDat;
        }
      });
    }

    if (danhSachGheDangDat !== -1) {
      danhSachGheDangDat.forEach((gheDangDat) => {
        const index = danhSachGhe.findIndex((ghe) => ghe.maGhe === gheDangDat.maGhe);
        if (index !== -1) {
          cloneDanhSachGhe[index] = gheDangDat;
        }
      });
    }
    return cloneDanhSachGhe;
  }
);

export const selecQuanLyDatVeState = {
  selectChiTietPhongVe,
  selectDanhSachGheDangDat,
  selectDanhSachGheKhachDat,
  selectTabActive,
  selectFilterGheRender,
  selectFilterGheDangDat,
  selectFilterGheKhachDat,
};
