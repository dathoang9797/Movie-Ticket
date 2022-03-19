import ArrowSlick from '@Components/ArrowSlick';
import Button from '@Components/Button';
import CardFlip from '@Components/Card/CardFlip';
import {
  MultipleSlickContainer,
  SliderStyle,
} from '@Pages/HomePage/MultipleSlick/MultipleSlick.styles';
import { ThongTinPhim } from '@Core/Models/Phim.type';
import { useAppDispatch } from '@Redux/hook';
import {
  fetchAllFilmlAction,
  fetchFilmDangChieulAction,
  fetchFilmlSapChieuAction,
} from '@Redux/Reducers/QuanLyPhimReducer/QuanLyPhimAction';
import React, { useCallback } from 'react';
import { Settings } from 'react-slick';

const settings: Settings = {
  className: 'center variable-width',
  centerMode: true,
  infinite: true,
  rows: 1,
  variableWidth: true,
  speed: 500,
  slidesPerRow: 2,
  slidesToShow: 4,
  nextArrow: <ArrowSlick />,
  prevArrow: <ArrowSlick />,
};

type PropsMultipleItems = {
  arrFilm: ThongTinPhim[];
  dangChieu: boolean;
  sapChieu: boolean;
};

function MultipleItems({ arrFilm, dangChieu, sapChieu }: PropsMultipleItems) {
  const dispatch = useAppDispatch();

  const renderFilms = () => {
    return arrFilm.slice(0, 20).map((film, index) => {
      return <CardFlip phim={film} key={index} />;
      // return <CardBase phim={film} key={index} />;
    });
  };

  return (
    <MultipleSlickContainer>
      <Button
        onClick={() => {
          dispatch(fetchAllFilmlAction());
        }}
        className={!dangChieu && !sapChieu ? 'active_film' : 'none_active_film'}
      >
        ALL PHIM
      </Button>
      <Button
        onClick={() => {
          dispatch(fetchFilmDangChieulAction());
        }}
        className={dangChieu ? 'active_film' : 'none_active_film'}
      >
        PHIM ĐANG CHIẾU
      </Button>
      <Button
        onClick={() => {
          dispatch(fetchFilmlSapChieuAction());
        }}
        className={sapChieu ? 'active_film' : 'none_active_film'}
      >
        PHIM SẮP CHIẾU
      </Button>

      <SliderStyle {...settings}>{renderFilms()}</SliderStyle>
    </MultipleSlickContainer>
  );
}
export default React.memo(MultipleItems);
