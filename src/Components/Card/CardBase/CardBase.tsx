import {
  CardButton,
  CardContainer,
  CardItem,
  CardTagA,
  CardTagH1,
  CardTagP,
} from '@Components/Card/CardBase/CardBase.styles';
import { ThongTinPhim } from '@Core/Models/Phim.type';
import React from 'react';

type PropsCard = { film: ThongTinPhim };

const Card = ({ film }: PropsCard) => {
  console.log('Card');

  return (
    <CardContainer>
      <CardItem>
        <img
          src={film.hinhAnh}
          alt={film.hinhAnh}
          className='h-44 w-full object-cover rounded-md'
        />
        <CardTagH1>
          {film.tenPhim.length > 25 ? film.tenPhim.slice(0, 25) + '...' : film.tenPhim}
        </CardTagH1>
        <CardTagP>
          {film.moTa.length > 120 ? film.moTa.slice(0, 120) + '...' : film.moTa}...
        </CardTagP>
        <CardTagA>
          <CardButton> Đặt Vé</CardButton>
        </CardTagA>
      </CardItem>
    </CardContainer>
  );
};

export default Card;
