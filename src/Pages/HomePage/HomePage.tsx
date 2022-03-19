import HomeCarousel from '@Pages/HomePage/HomeCarousel';
import HomeMenu from '@Pages/HomePage/HomeMenu';
import { HomePageContainer } from '@Pages/HomePage/HomePage.styles';
import MultipleItems from '@Pages/HomePage/MultipleSlick';
import { useAppDispatch, useAppSelector } from '@Redux/hook';
import { selectorCarouselState } from '@Redux/Reducers/CarouselReducer/CarouselSelector';
import { fetchCarouselThunk } from '@Redux/Reducers/CarouselReducer/CarouselThunk';
import { selectorFilmState } from '@Redux/Reducers/QuanLyPhimReducer/QuanLyPhimSelector';
import { fetchFilmThunk } from '@Redux/Reducers/QuanLyPhimReducer/QuanLyPhimThunk';
import { selectorRapState } from '@Redux/Reducers/QuanLyRapReducer/QuanLyRapSelector';
import { fetchCumRapThunk } from '@Redux/Reducers/QuanLyRapReducer/QuanLyRapThunk';
import React, { useEffect } from 'react';

function HomePage() {
  const dispatch = useAppDispatch();

  const { arrImg } = useAppSelector(selectorCarouselState);
  const { arrFilm, dangChieu, sapChieu } = useAppSelector(selectorFilmState);
  const { heThongRapChieu } = useAppSelector(selectorRapState);

  useEffect(() => dispatch(fetchFilmThunk()), [dispatch]);
  useEffect(() => dispatch(fetchCumRapThunk()), [dispatch]);
  useEffect(() => dispatch(fetchCarouselThunk()), [dispatch]);

  return (
    <HomePageContainer>
      <HomeCarousel arrImg={arrImg} />
      <MultipleItems arrFilm={arrFilm} dangChieu={dangChieu} sapChieu={sapChieu} />
      <HomeMenu ThongTinLichChieuHeThongRap={heThongRapChieu} />
    </HomePageContainer>
  );
}

export default HomePage;
