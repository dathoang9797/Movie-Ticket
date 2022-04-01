import HomeCarousel from '@Pages/HomePage/HomeCarousel';
import HomeMenu from '@Pages/HomePage/HomeMenu';
import { HomePageContainer } from '@Pages/HomePage/HomePage.styles';
import MultipleItems from '@Pages/HomePage/MultipleSlick';
import { useAppDispatch, useAppSelector } from '@Redux/hook';
import { selectCarouselState } from '@Redux/Selector/CarouselSelect';
import { selectQuanLyPhimState } from '@Redux/Selector/QuanLyPhimSelect';
import { selectQuanLyRapState } from '@Redux/Selector/QuanLyRapSelect';
import { getCarouselAsync } from '@Redux/Thunk/CarouselThunk';
import { quanLyPhimThunk } from '@Redux/Thunk/QuanLyPhimThunk';
import { quanLyRapThunk } from '@Redux/Thunk/QuanLyRapThunk';
import React, { useEffect } from 'react';

const { getFilmAsync } = quanLyPhimThunk;
const { getCumRapAsync } = quanLyRapThunk;
const { selectFilmArrFilm, selectFilmDangChieu, selectFilmSapChieu } = selectQuanLyPhimState;
const { selectRapHeThongRapChieu } = selectQuanLyRapState;
const { selectCarouselArrImg } = selectCarouselState;

function HomePage() {
  const dispatch = useAppDispatch();
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
