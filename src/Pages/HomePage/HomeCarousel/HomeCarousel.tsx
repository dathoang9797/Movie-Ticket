import { Banner } from '@Core/Models/Banner.type';
import {
  CarouselContainer,
  CarouselItem,
  CarouselItemImage,
  CarouselStyle,
} from '@Pages/HomePage/HomeCarousel/HomeCarousel.styles';
import React from 'react';

type PropsHomeCarousel = {
  arrImg: Banner[];
};

function HomeCarousel({ arrImg }: PropsHomeCarousel) {
  const renderCarousel = () => {
    return arrImg.map((item, index) => {
      return (
        <CarouselContainer key={index}>
          <CarouselItem image={item.hinhAnh}>
            <CarouselItemImage src={item.hinhAnh} alt={item.hinhAnh} className='w-full opacity-0' />
          </CarouselItem>
        </CarouselContainer>
      );
    });
  };

  return <CarouselStyle effect='fade'>{renderCarousel()}</CarouselStyle>;
}

export default React.memo(HomeCarousel);
