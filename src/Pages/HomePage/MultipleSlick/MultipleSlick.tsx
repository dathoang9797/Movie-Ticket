import ArrowSlick from '@Components/ArrowSlick';
import Button from '@Components/Button';
import CardFlip from '@Components/Card/CardFlip';
import { ThongTinPhim } from '@Core/Models/Phim.type';
import { MultipleStyle } from '@Pages/HomePage/MultipleSlick/MultipleSlick.styles';
import { useAppDispatch } from '@Redux/hook';
import { quanLyPhimAction } from '@Redux/Reducers/QuanLyPhimReducer';
import React from 'react';
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
  const { getAllFilms, getFilmsDangChieu, getFilmsSapChieu } = quanLyPhimAction;
  const renderFilms = () => {
    return arrFilm.slice(0, 20).map((film) => {
      return <CardFlip phim={film} key={`Film-${film.idThongTinPhim}`} />;
      // return <CardBase phim={film} key={`Film-${film.maPhim}`} />;
    });
  };

  return (
    <MultipleStyle.MultipleSlickContainer>
      <Button
        onClick={() => {
          dispatch(getAllFilms());
        }}
        className={!dangChieu && !sapChieu ? 'active_film' : 'none_active_film'}
      >
        ALL PHIM
      </Button>
      <Button
        onClick={() => {
          dispatch(getFilmsDangChieu());
        }}
        className={dangChieu ? 'active_film' : 'none_active_film'}
      >
        PHIM ĐANG CHIẾU
      </Button>
      <Button
        onClick={() => {
          dispatch(getFilmsSapChieu());
        }}
        className={sapChieu ? 'active_film' : 'none_active_film'}
      >
        PHIM SẮP CHIẾU
      </Button>

      <MultipleStyle.MultipleSlider {...settings}>{renderFilms()}</MultipleStyle.MultipleSlider>
    </MultipleStyle.MultipleSlickContainer>
  );
}
export default React.memo(MultipleItems);
