import { RootState } from '@Redux/store';

const selectCarouselArrImg = (state: RootState) => state.CarouselReducer.arrImg;

export const selectCarouselState = {
  selectCarouselArrImg,
};
