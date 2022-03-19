import Circle from '@Components/Circle';
import TabHeThongRapChieu from '@Components/Tabs/TabHeThongRapChieu';
import { PropsParams } from '@Core/Models/Global.type';
import {
  CustomCardStyle,
  DetailContainer,
  DetailContent,
  DetailGridsColDesc,
  DetailItem,
} from '@Pages/DetailPage/DetailPage.styles';
import { useAppDispatch, useAppSelector } from '@Redux/hook';
import { selectorRapState } from '@Redux/Reducers/QuanLyRapReducer/QuanLyRapSelector';
import { fectThongTinLichChieuPhimThunk } from '@Redux/Reducers/QuanLyRapReducer/QuanLyRapThunk';
import moment from 'moment';
import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';

type PropsDetailPage = RouteComponentProps<PropsParams>;

function DetailPage(props: PropsDetailPage) {
  const dispatch = useAppDispatch();
  const { filmDetail } = useAppSelector(selectorRapState);

  useEffect(() => {
    if (!props.match.params.maPhim) {
      return console.log('Error: maPhim is undefined');
    }
    const maPhim = +props.match.params.maPhim;
    dispatch(fectThongTinLichChieuPhimThunk(maPhim));
  }, [dispatch, props.match.params.maPhim]);

  return (
    <DetailContainer filmDetail={filmDetail}>
      <CustomCardStyle effectColor='#C780FF' color='#14AEFF' blur={10} borderRadius={0}>
        <DetailContent>
          <DetailItem>
            <img
              src={filmDetail.hinhAnh}
              alt={filmDetail.hinhAnh}
              className='h-72 w-52 object-cover rounded-md'
            />
            <DetailGridsColDesc>
              <p className='text-lg text-white'>
                Ngày chiếu:{moment(filmDetail.ngayKhoiChieu).format('DD.MM.YYYY')}
              </p>
              <p className='text-2xl text-white  mb-5'>{filmDetail.tenPhim}</p>
              <p className='text-sm text-white'>{filmDetail.moTa}</p>
            </DetailGridsColDesc>
            <Circle danhGia={filmDetail.danhGia} />
          </DetailItem>
          <DetailItem>
            <TabHeThongRapChieu heThongRapChieu={filmDetail.heThongRapChieu} />
          </DetailItem>
        </DetailContent>
      </CustomCardStyle>
    </DetailContainer>
  );
}

export default DetailPage;
