import { CumRapChieu } from '@Core/Models/Rap.type';
import { nanoid } from '@reduxjs/toolkit';
import moment from 'moment';
import React from 'react';
import { NavLink } from 'react-router-dom';

type PropsTabCumRapChieu = {
  cumRapChieu: CumRapChieu;
};

function TabCumRapChieu({ cumRapChieu }: PropsTabCumRapChieu) {
  return (
    <div className='mt-5'>
      <div className='flex items-center'>
        <img src={cumRapChieu.hinhAnh} alt={cumRapChieu.hinhAnh} width={60} height={60} />
        <div className='ml-2 '>
          <p className=' text-xl font-bold  pb-3'>{cumRapChieu.tenCumRap}</p>
          <p className='text-sm text-gray-500'>{cumRapChieu.diaChi}</p>
        </div>
      </div>
      <div className='thong-tin-lich-chieu grid grid-cols-4 pt-5'>
        {cumRapChieu.lichChieuPhim.map((lichChieu) => (
          <NavLink
            to={`${process.env.REACT_APP_LINK_CHECK_OUT}/${lichChieu.maLichChieu}`}
            key={`LichChieu-${lichChieu.idLichChieuTheoPhim}`}
            className='col-span-1 text-green-800 font-bold'
          >
            {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default TabCumRapChieu;
