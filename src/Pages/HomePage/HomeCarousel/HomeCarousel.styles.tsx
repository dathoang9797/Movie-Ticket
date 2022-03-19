import { styled } from 'twin.macro';
import { Carousel } from 'antd';

type PropsCarouselIem = {
  image: string;
};

export const CarouselStyle = styled(Carousel)`
  & .slick-dots-bottom {
    margin: 0;
    padding: 0;
  }
`;

export const CarouselContainer = styled.div``;

export const CarouselItem = styled.div<PropsCarouselIem>`
  height: 550px;
  color: #fff;
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${({ image }) => `url(${image})`};
`;
export const CarouselItemImage = styled.img``;
