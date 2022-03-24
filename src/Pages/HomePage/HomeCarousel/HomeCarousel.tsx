import { Banner } from '@Core/Models/Banner.type';
import { CarouselStyle } from '@Pages/HomePage/HomeCarousel/HomeCarousel.styles';
import React from 'react';

type PropsHomeCarousel = {
  arrImg: Banner[];
};

function HomeCarousel({ arrImg }: PropsHomeCarousel) {
  const renderCarousel = () => {
    return arrImg.map((carouselItem) => {
      return (
        <CarouselStyle.CarouselItem
          image={carouselItem.hinhAnh}
          key={`CarouselContainer-${carouselItem.idBanner}`}
        >
          <CarouselStyle.CarouselItemImage
            src={carouselItem.hinhAnh}
            alt={carouselItem.hinhAnh}
            className='w-full opacity-0'
          />
        </CarouselStyle.CarouselItem>
      );
    });
  };

  return (
    <CarouselStyle.CarouselContainer effect='fade'>
      {renderCarousel()}
    </CarouselStyle.CarouselContainer>
  );
}

export default React.memo(HomeCarousel);
