import {
  CardFlipBack,
  CardFlipContainer,
  CardFlipFont,
  CardFlipItem,
  CardFlipBookTickets,
  CardFlipBackDiv1,
  CardFlipBackDiv2,
  CardFlipBackDiv2Desc,
} from '@Components/Card/CardFlip/CardFlip.styles';
import { PlayCircleOutlined } from '@ant-design/icons';
import { ThongTinPhim } from '@Core/Models/Phim.type';
import React from 'react';

type PropsCardFlip = {
  phim: ThongTinPhim;
};

function CardFlip({ phim }: PropsCardFlip) {
  return (
    <div className='mx-3 my-3'>
      <CardFlipContainer>
        <CardFlipItem>
          <CardFlipFont>
            <img src={phim.hinhAnh} alt={phim.hinhAnh} />
          </CardFlipFont>
          <CardFlipBack>
            <CardFlipBackDiv1>
              <img src={phim.hinhAnh} alt={phim.hinhAnh} />
            </CardFlipBackDiv1>
            <CardFlipBackDiv2>
              <CardFlipBackDiv2Desc>
                <div>
                  <PlayCircleOutlined className='text-5xl	' />
                </div>
                <div>{phim.tenPhim}</div>
              </CardFlipBackDiv2Desc>
            </CardFlipBackDiv2>
          </CardFlipBack>
        </CardFlipItem>
      </CardFlipContainer>
      <CardFlipBookTickets to={`${process.env.REACT_APP_LINK_DETAIL}/${phim.maPhim}`}>
        Đặt Vé
      </CardFlipBookTickets>
    </div>
  );
}

export default CardFlip;
