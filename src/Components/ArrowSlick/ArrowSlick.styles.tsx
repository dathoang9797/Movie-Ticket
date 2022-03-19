import tw, { styled } from 'twin.macro';

export const ArrowStyle = styled.div`
  &.slick-prev:before,
  &.slick-next:before {
    color: gray;
    font-size: 3rem;
  }
  &.slick-prev {
    left: -55px;
  }
`;
