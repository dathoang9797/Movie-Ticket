import { DanhSachPhim } from '@Core/Models/Phim.type';
import { CumRap } from '@Core/Models/Rap.type';
import { nanoid } from '@reduxjs/toolkit';
import moment from 'moment';
import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

type PropsTabDanhSachPhim = {
  danhSachPhim: DanhSachPhim;
  cumRap: CumRap;
};

const urlCheckout = process.env.REACT_APP_LINK_CHECK_OUT;

function TabDanhSachPhim({ danhSachPhim, cumRap }: PropsTabDanhSachPhim) {
  return (
    <Fragment>
      <div className='my-5'>
        <div className='w-full flex h-48 border-b-1 border-gray-300 py-3 space-x-3 '>
          <img
            src={danhSachPhim.hinhAnh}
            alt={danhSachPhim.hinhAnh}
            width={150}
            height={150}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = `https://picsum.photos/id/75/75`;
            }}
          />
          <div className='ml-2 h-full flex-grow flex flex-col col-auto'>
            <h1 className='text-2xl text-green-700 '>{danhSachPhim.tenPhim}</h1>
            <p>{cumRap.diaChi}</p>
            <div className='w-full grid grid-cols-3 gap-3 overflow-y-auto  '>
              {danhSachPhim.lstLichChieuTheoPhim.map((lichChieu) => (
                <NavLink
                  to={`${urlCheckout}/${lichChieu.maLichChieu}`}
                  key={`LichChieuTheoPhim-${lichChieu.idLichChieuTheoPhim}}`}
                  className='text-xl text-orange-500'
                >
                  {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr />
    </Fragment>
  );
}

export default TabDanhSachPhim;
