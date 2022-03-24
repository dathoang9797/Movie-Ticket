import HomeCarousel from '@Pages/HomePage/HomeCarousel';
import HomeMenu from '@Pages/HomePage/HomeMenu';
import { HomePageContainer } from '@Pages/HomePage/HomePage.styles';
import MultipleItems from '@Pages/HomePage/MultipleSlick';
import { useAppDispatch, useAppSelector } from '@Redux/hook';
import { selectCarouselState } from '@Redux/Reducers/CarouselReducer/CarouselSelect';
import { getCarouselAsync } from '@Redux/Reducers/CarouselReducer/CarouselThunk';
import { selectQuanLyPhimState } from '@Redux/Reducers/QuanLyPhimReducer/QuanLyPhimSelect';
import { quanLyPhimThunk } from '@Redux/Reducers/QuanLyPhimReducer/QuanLyPhimThunk';
import { selectQuanLyRapState } from '@Redux/Reducers/QuanLyRapReducer/QuanLyRapSelect';
import { quanLyRapThunk } from '@Redux/Reducers/QuanLyRapReducer/QuanLyRapThunk';
import React, { useEffect } from 'react';

const { getFilmAsync } = quanLyPhimThunk;
const { getCumRapAsync } = quanLyRapThunk;

function HomePage() {
  const dispatch = useAppDispatch();
  const { selectFilmArrFilm, selectFilmDangChieu, selectFilmSapChieu } = selectQuanLyPhimState;
  const { selectRapHeThongRapChieu } = selectQuanLyRapState;
  const { selectCarouselArrImg } = selectCarouselState;
  const arrFilm = useAppSelector(selectFilmArrFilm);
  const dangChieu = useAppSelector(selectFilmDangChieu);
  const sapChieu = useAppSelector(selectFilmSapChieu);
  const heThongRapChieu = useAppSelector(selectRapHeThongRapChieu);
  const arrImg = useAppSelector(selectCarouselArrImg);

  useEffect(() => {
    Promise.all([
      dispatch(getFilmAsync()),
      dispatch(getCumRapAsync()),
      dispatch(getCarouselAsync()),
    ]);
  }, [dispatch]);
  console.log('render');
  return (
    <HomePageContainer>
      <HomeCarousel arrImg={arrImg} />
      <MultipleItems arrFilm={arrFilm} dangChieu={dangChieu} sapChieu={sapChieu} />
      <HomeMenu ThongTinLichChieuHeThongRap={heThongRapChieu} />
    </HomePageContainer>
  );
}

export default HomePage;
