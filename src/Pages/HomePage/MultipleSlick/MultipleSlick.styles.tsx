import Slider, { Settings } from 'react-slick';

import tw, { styled } from 'twin.macro';

export const SliderStyle = styled(Slider)`
  & .slick-prev::before,
  & .slick-next::before {
    color: gray !important;
    font-size: 3rem !important;
  }
`;

export const MultipleSlickContainer = styled.div`
  ${tw`container px-5 py-10 mx-auto`}
`;
