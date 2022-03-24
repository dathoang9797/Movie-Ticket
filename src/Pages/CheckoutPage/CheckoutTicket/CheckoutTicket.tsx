import { Ghe } from '@Core/Models/Ghe.type';
import { PropsRouterComponent } from '@Core/Models/Global.type';
import { NguoiDungVM } from '@Core/Models/NguoiDung.type';
import { DanhSachPhongVe, DanhSachVeDat } from '@Core/Models/Ve.type';
import CheckoutGhe from '@Pages/CheckoutPage/CheckoutTicket/CheckoutGhe';
import { GheStyle } from '@Pages/CheckoutPage/CheckoutTicket/CheckoutGhe/CheckoutGhe.styles';
import { CheckoutStyle } from '@Pages/CheckoutPage/CheckoutTicket/CheckoutTicket.styles';
import { useAppDispatch } from '@Redux/hook';
import { quanLyDatVeThunk } from '@Redux/Reducers/QuanLyDatVeReducer/QuanLyDatVeThunk';
import { showError } from '@Utils/Alert/PopUp';
import _ from 'lodash';
import React, { Fragment } from 'react';

type PropsCheckoutTicket = {
  userInfo: Omit<NguoiDungVM, 'matKhau'>;
  chiTietPhongVe: DanhSachPhongVe;
  danhSachGheDangDat: Ghe[] | -1;
  danhSachGheRender: Ghe[];
} & PropsRouterComponent;

const { setDatveAsync } = quanLyDatVeThunk;

function CheckoutTicket(props: PropsCheckoutTicket) {
  const { match, danhSachGheDangDat, chiTietPhongVe, userInfo, danhSachGheRender } = props;
  const { thongTinPhim } = chiTietPhongVe;
  const dispatch = useAppDispatch();

  console.log('CheckoutTicket render');
  const handleDatVe = () => {
    if (!match.params.maLichChieu) {
      return showError('Không có mã lịch chiếu');
    }
    if (danhSachGheDangDat === -1) {
      showError('Ban chưa chọn ghế nào');
      return;
    }
    const danhSachVe: DanhSachVeDat = {
      maLichChieu: +match.params.maLichChieu,
      danhSachVe: danhSachGheDangDat,
    };
    dispatch(setDatveAsync(danhSachVe));
  };

  const renderSeats = () => {
    return danhSachGheRender.map((ghe, index) => {
      return (
        <Fragment key={`CheckoutTicket-${ghe.maGhe}-${index}}`}>
          {
            <CheckoutGhe
              ghe={ghe}
              userInfo={userInfo}
              maLichChieu={match.params.maLichChieu ?? ''}
            />
          }
          {(index + 1) % 16 === 0 ? <br /> : null}
        </Fragment>
      );
    });
  };

  return (
    <CheckoutStyle.CheckoutTicketContainer>
      <CheckoutStyle.CheckoutTicketGrid>
        <CheckoutStyle.CheckoutGridColSpan9>
          <CheckoutStyle.CheckoutTicketContentScreen>
            <h3>screen</h3>
          </CheckoutStyle.CheckoutTicketContentScreen>
          <div>{renderSeats()}</div>
          <CheckoutStyle.CheckoutTicketContentTable>
            <table>
              <thead>
                <tr>
                  <th>Ghế chưa đặt</th>
                  <th>Ghế đang đặt</th>
                  <th>Ghế Vip</th>
                  <th>Ghế đã đặt</th>
                  <th>Ghế mình đặt</th>
                  <th>Ghế khách đặt</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <GheStyle.GheThuong>
                      <CheckoutStyle.CheckoutTicketIconCheckOutlined />
                    </GheStyle.GheThuong>
                  </td>
                  <td>
                    <GheStyle.GheDangDat>
                      <CheckoutStyle.CheckoutTicketIconCheckOutlined />
                    </GheStyle.GheDangDat>
                  </td>
                  <td>
                    <GheStyle.GheVip>
                      <CheckoutStyle.CheckoutTicketIconCheckOutlined />
                    </GheStyle.GheVip>
                  </td>
                  <td>
                    <GheStyle.GheDaDat>
                      <CheckoutStyle.CheckoutTicketIconCheckOutlined />
                    </GheStyle.GheDaDat>
                  </td>
                  <td>
                    <GheStyle.GheUserDaDat>
                      <CheckoutStyle.CheckoutTicketIconCheckOutlined />
                    </GheStyle.GheUserDaDat>
                  </td>
                  <td>
                    <GheStyle.GheKhanhDangDat>
                      <CheckoutStyle.CheckoutTicketIconCheckOutlined />
                    </GheStyle.GheKhanhDangDat>
                  </td>
                </tr>
              </tbody>
            </table>
          </CheckoutStyle.CheckoutTicketContentTable>
        </CheckoutStyle.CheckoutGridColSpan9>
        <CheckoutStyle.CheckoutGridColSpan3>
          <CheckoutStyle.CheckoutTicketCart>
            <h2>0 đ</h2>
            <h3>{thongTinPhim.tenPhim}</h3>
            <p>
              Địa điểm {thongTinPhim.tenCumRap} - {thongTinPhim.tenRap}
            </p>
            <p>
              Ngày chiếu: {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu} RẠP 5
            </p>
            <hr />
            <CheckoutStyle.CheckoutTicketGrid>
              <CheckoutStyle.CheckoutTicketCartContentGhe>
                <CheckoutStyle.CheckoutTicketCartListGheDangDat>
                  <span>Ghế </span>
                  {danhSachGheDangDat !== -1 &&
                    _.sortBy(danhSachGheDangDat, ['stt']).map((gheDD, index) => {
                      return (
                        <CheckoutStyle.CheckoutTicketCartGhe key={`GheDangDat-${gheDD.maGhe}`}>
                          {gheDD.stt}
                        </CheckoutStyle.CheckoutTicketCartGhe>
                      );
                    })}
                </CheckoutStyle.CheckoutTicketCartListGheDangDat>
              </CheckoutStyle.CheckoutTicketCartContentGhe>

              <CheckoutStyle.CheckoutTicketCartTotalPrice>
                <span>
                  {danhSachGheDangDat !== -1 &&
                    danhSachGheDangDat
                      .reduce((tongTien, gheDD) => {
                        return (tongTien += gheDD.giaVe);
                      }, 0)
                      .toLocaleString()}
                </span>
              </CheckoutStyle.CheckoutTicketCartTotalPrice>
            </CheckoutStyle.CheckoutTicketGrid>
          </CheckoutStyle.CheckoutTicketCart>
          <hr />

          <div className='my-5'>
            <i>Email </i>
            {userInfo.email}
          </div>
          <div className='my-5'>
            <i>Phone </i>
            {userInfo.soDT}
          </div>
          <hr />
          <CheckoutStyle.CheckoutTicketContentDatVe>
            <CheckoutStyle.CheckoutTicketButtonDatVe onClick={handleDatVe}>
              ĐẶT VÉ
            </CheckoutStyle.CheckoutTicketButtonDatVe>
          </CheckoutStyle.CheckoutTicketContentDatVe>
        </CheckoutStyle.CheckoutGridColSpan3>
      </CheckoutStyle.CheckoutTicketGrid>
    </CheckoutStyle.CheckoutTicketContainer>
  );
}

export default React.memo(CheckoutTicket);
