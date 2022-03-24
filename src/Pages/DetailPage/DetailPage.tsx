import Circle from '@Components/Circle';
import TabHeThongRapChieu from '@Components/Tabs/TabHeThongRapChieu';
import { PropsRouterComponent } from '@Core/Models/Global.type';
import { DetailStyle } from '@Pages/DetailPage/DetailPage.styles';
import { useAppDispatch, useAppSelector } from '@Redux/hook';
import { selectQuanLyRapState } from '@Redux/Reducers/QuanLyRapReducer/QuanLyRapSelect';
import { quanLyRapThunk } from '@Redux/Reducers/QuanLyRapReducer/QuanLyRapThunk';
import moment from 'moment';
import React, { useEffect } from 'react';

type PropsDetailPage = PropsRouterComponent;

const { getThongTinLichChieuPhimAsync } = quanLyRapThunk;

function DetailPage(props: PropsDetailPage) {
  const dispatch = useAppDispatch();
  const { selectRapFilmDetail } = selectQuanLyRapState;
  const filmDetail = useAppSelector(selectRapFilmDetail);

  useEffect(() => {
    if (!props.match.params.maPhim) {
      return console.log('Error: maPhim is undefined');
    }
    const maPhim = +props.match.params.maPhim;
    dispatch(getThongTinLichChieuPhimAsync(maPhim));
  }, [dispatch, props.match.params.maPhim]);

  return (
    <DetailStyle.DetailContainer filmDetail={filmDetail}>
      <DetailStyle.CustomCardStyle effectColor='#C780FF' color='#14AEFF' blur={10} borderRadius={0}>
        <DetailStyle.DetailContent>
          <DetailStyle.DetailItem>
            <img
              src={filmDetail.hinhAnh}
              alt={filmDetail.hinhAnh}
              className='h-72 w-52 object-cover rounded-md'
            />
            <DetailStyle.DetailGridsColDesc>
              <p className='text-lg text-white'>
                Ngày chiếu:{moment(filmDetail.ngayKhoiChieu).format('DD.MM.YYYY')}
              </p>
              <p className='text-2xl text-white  mb-5'>{filmDetail.tenPhim}</p>
              <p className='text-sm text-white'>{filmDetail.moTa}</p>
            </DetailStyle.DetailGridsColDesc>
            <Circle danhGia={filmDetail.danhGia} />
          </DetailStyle.DetailItem>
          <DetailStyle.DetailItem>
            <TabHeThongRapChieu heThongRapChieu={filmDetail.heThongRapChieu} />
          </DetailStyle.DetailItem>
        </DetailStyle.DetailContent>
      </DetailStyle.CustomCardStyle>
    </DetailStyle.DetailContainer>
  );
}

export default DetailPage;
