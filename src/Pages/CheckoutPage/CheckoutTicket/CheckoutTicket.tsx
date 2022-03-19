import { Ghe } from '@Core/Models/Ghe.type';
import { PropsParams } from '@Core/Models/Global.type';
import { NguoiDungVM } from '@Core/Models/NguoiDung.type';
import { DanhSachPhongVe, DanhSachVeDat } from '@Core/Models/Ve.type';
import CheckoutGhe from '@Pages/CheckoutPage/CheckoutTicket/CheckoutGhe';
import {
  GheDaDat,
  GheDaDuocDat,
  GheDangDat,
  GheKhanhDangDat,
  GheThuong,
  GheVip,
} from '@Pages/CheckoutPage/CheckoutTicket/CheckoutGhe/CheckoutGhe.styles';
import {
  CheckoutGridColSpan3,
  CheckoutGridColSpan9,
  CheckoutTicketButtonDatVe,
  CheckoutTicketCart,
  CheckoutTicketCartContentGhe,
  CheckoutTicketCartGhe,
  CheckoutTicketCartListGheDangDat,
  CheckoutTicketCartTotalPrice,
  CheckoutTicketContainer,
  CheckoutTicketContentDatVe,
  CheckoutTicketContentScreen,
  CheckoutTicketContentTable,
  CheckoutTicketGrid,
  CheckoutTicketIconCheckOutlined,
} from '@Pages/CheckoutPage/CheckoutTicket/CheckoutTicket.styles';
import { useAppDispatch } from '@Redux/hook';
import { datveThunk } from '@Redux/Reducers/QuanLyDatVeReducer/QuanLyDatVeThunk';
import { showError } from '@Utils/ShowError';
import _ from 'lodash';
import React, { Fragment } from 'react';
import { RouteComponentProps } from 'react-router-dom';

type PropsCheckoutTicket = {
  userInfo: Omit<NguoiDungVM, 'matKhau'>;
  chiTietPhongVe: DanhSachPhongVe;
  danhSachGheDangDat: Ghe[];
  danhSachGheKhachDat: Ghe[];
} & RouteComponentProps<PropsParams>;

function CheckoutTicket(props: PropsCheckoutTicket) {
  const { match, danhSachGheDangDat, chiTietPhongVe, userInfo, danhSachGheKhachDat } = props;
  const { danhSachGhe, thongTinPhim } = chiTietPhongVe;
  const dispatch = useAppDispatch();

  const renderSeats = () => {
    return danhSachGhe.map((ghe, index) => {
      return (
        <Fragment key={index}>
          {
            <CheckoutGhe
              ghe={ghe}
              userInfo={userInfo}
              danhSachGheDangDat={danhSachGheDangDat}
              danhSachGheKhachDat={danhSachGheKhachDat}
              maLichChieu={match.params.maLichChieu ?? ''}
            />
          }
          {(index + 1) % 16 === 0 ? <br /> : null}
        </Fragment>
      );
    });
  };

  return (
    <CheckoutTicketContainer>
      <CheckoutTicketGrid>
        <CheckoutGridColSpan9>
          <CheckoutTicketContentScreen>
            <h3>screen</h3>
          </CheckoutTicketContentScreen>
          <div>{renderSeats()}</div>
          <CheckoutTicketContentTable>
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
                    <GheThuong>
                      <CheckoutTicketIconCheckOutlined />
                    </GheThuong>
                  </td>
                  <td>
                    <GheDangDat>
                      <CheckoutTicketIconCheckOutlined />
                    </GheDangDat>
                  </td>
                  <td>
                    <GheVip>
                      <CheckoutTicketIconCheckOutlined />
                    </GheVip>
                  </td>
                  <td>
                    <GheDaDat>
                      <CheckoutTicketIconCheckOutlined />
                    </GheDaDat>
                  </td>
                  <td>
                    <GheDaDuocDat>
                      <CheckoutTicketIconCheckOutlined />
                    </GheDaDuocDat>
                  </td>
                  <td>
                    <GheKhanhDangDat>
                      <CheckoutTicketIconCheckOutlined />
                    </GheKhanhDangDat>
                  </td>
                </tr>
              </tbody>
            </table>
          </CheckoutTicketContentTable>
        </CheckoutGridColSpan9>
        <CheckoutGridColSpan3>
          <CheckoutTicketCart>
            <h2>0 đ</h2>
            <h3>{thongTinPhim.tenPhim}</h3>
            <p>
              Địa điểm {thongTinPhim.tenCumRap} - {thongTinPhim.tenRap}
            </p>
            <p>
              Ngày chiếu: {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu} RẠP 5
            </p>
            <hr />
            <CheckoutTicketGrid>
              <CheckoutTicketCartContentGhe>
                <CheckoutTicketCartListGheDangDat>
                  <span>Ghế </span>
                  {_.sortBy(danhSachGheDangDat, ['stt']).map((gheDD, index) => {
                    return <CheckoutTicketCartGhe key={index}>{gheDD.stt}</CheckoutTicketCartGhe>;
                  })}
                </CheckoutTicketCartListGheDangDat>
              </CheckoutTicketCartContentGhe>

              <CheckoutTicketCartTotalPrice>
                <span>
                  {danhSachGheDangDat
                    .reduce((tongTien, gheDD) => {
                      return (tongTien += gheDD.giaVe);
                    }, 0)
                    .toLocaleString()}
                </span>
              </CheckoutTicketCartTotalPrice>
            </CheckoutTicketGrid>
          </CheckoutTicketCart>
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
          <CheckoutTicketContentDatVe>
            <CheckoutTicketButtonDatVe
              onClick={() => {
                if (match.params.maLichChieu) {
                  const danhSachVe: DanhSachVeDat = {
                    maLichChieu: +match.params.maLichChieu,
                    danhSachVe: danhSachGheDangDat,
                  };
                  dispatch(datveThunk(danhSachVe, showError));
                }
              }}
            >
              ĐẶT VÉ
            </CheckoutTicketButtonDatVe>
          </CheckoutTicketContentDatVe>
        </CheckoutGridColSpan3>
      </CheckoutTicketGrid>
    </CheckoutTicketContainer>
  );
}

export default CheckoutTicket;
