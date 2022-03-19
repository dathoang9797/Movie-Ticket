import { Banner } from '@Core/Models/Banner.type';
import { FETCH_CAROUSEL } from './CarouselConstant';

export const fetchCarouselAction = (payload: Banner[]) => {
  return {
    type: FETCH_CAROUSEL,
    payload,
  } as const;
};

export type TypeActionsCarousel = ReturnType<typeof fetchCarouselAction>;
