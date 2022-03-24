import { styled } from 'twin.macro';
import { Carousel } from 'antd';

type PropsCarouselIem = {
  image: string;
};

const CarouselContainer = styled(Carousel)`
  & .slick-dots-bottom {
    margin: 0;
    padding: 0;
  }
`;

const CarouselItem = styled.div<PropsCarouselIem>`
  height: 550px;
  color: #fff;
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${({ image }) => `url(${image})`};
`;
const CarouselItemImage = styled.img``;

export const CarouselStyle = { CarouselContainer, CarouselItem, CarouselItemImage };
