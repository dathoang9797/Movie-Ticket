import { PropsRouterComponent } from '@Core/Models/Global.type';
import { ThongTinTaiKhoan } from '@Core/Models/NguoiDung.type';
import { useAppDispatch } from '@Redux/hook';
import { quanLyNguoiDungThunk } from '@Redux/Thunk/QuanLyNguoiDungThunk';
import _ from 'lodash';
import moment from 'moment';
import React, { useEffect } from 'react';

type PropsCheckoutKetQuaDatVe = {
  thongTinNguoiDung: ThongTinTaiKhoan;
} & PropsRouterComponent;

const { setThongTinNguoiDungAsync } = quanLyNguoiDungThunk;

function CheckoutKetQuaDatVe(props: PropsCheckoutKetQuaDatVe) {
  const { thongTinNguoiDung } = props;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setThongTinNguoiDungAsync());
  }, [dispatch]);

  const renderTicketItem = () => {
    if (_.isNull(thongTinNguoiDung.thongTinDatVe) || _.isEmpty(thongTinNguoiDung.thongTinDatVe)) {
      return <div>Chưa có thông tin đặt vé</div>;
    }
    return thongTinNguoiDung.thongTinDatVe.map((ticket) => {
      const seats = _.first(ticket.danhSachGhe);
      return (
        <div className='p-2 lg:w-1/3 md:w-1/2 w-full' key={`Ticket-${ticket.idNguoiDung}`}>
          <div className='h-full flex items-center border-gray-200 border p-4 rounded-lg'>
            <img
              alt='team'
              className='w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4'
              src={ticket.hinhAnh}
            />
            <div className='flex-grow'>
              <h2 className='text-gray-900 title-font font-medium'>{ticket.tenPhim}</h2>
              <p className='text-gray-500'>
                Giờ chiếu:
                {moment(ticket.ngayDat).format('hh:mm A')} - Ngày chiếu:
                {moment(ticket.ngayDat).format('D-MM-YYYY')}
              </p>
              <p> Địa điểm {seats?.tenHeThongRap}</p>
              <p>
                Tên rạp: {seats?.tenCumRap} - Ghế{' '}
                {ticket.danhSachGhe.map((ghe, key) => (
                  <span key={`Ghe-${ghe.idDanhSachNguoiDung}`} className='mr-2 inline-block'>
                    {ghe.tenGhe}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-col text-center w-full mb-20'>
          <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-purple-600'>
            Lịch sử đặt vé khách hàng
          </h1>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
            Hãy em thông tin địa điểm và thời gian để xem phim vui vẻ bạn nhé !
          </p>
        </div>
        <div className='flex flex-wrap -m-2'>{renderTicketItem()}</div>
      </div>
    </section>
  );
}

export default CheckoutKetQuaDatVe;
