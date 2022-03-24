import Slider from 'react-slick';

import tw, { styled } from 'twin.macro';

const MultipleSlider = styled(Slider)`
  & .slick-prev::before,
  & .slick-next::before {
    color: gray !important;
    font-size: 3rem !important;
  }
`;

const MultipleSlickContainer = styled.div`
  ${tw`container px-5 py-10 mx-auto`}
`;

export const MultipleStyle = {
  MultipleSlickContainer,
  MultipleSlider,
};
