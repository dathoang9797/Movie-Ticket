import { Banner } from '@Core/Models/Banner.type';
import { TypeActionsCarousel } from '@Redux/Reducers/CarouselReducer/CarouselAction';
import { FETCH_CAROUSEL } from '@Redux/Reducers/CarouselReducer/CarouselConstant';

type CarouselInitialState = {
  arrImg: Array<Banner>;
};

const initialState = {
  arrImg: [
    {
      maBanner: 1,
      maPhim: 1282,
      hinhAnh: 'https://picsum.photos/1920/1080',
    },
  ],
} as CarouselInitialState;

const carouselReducer = (state = initialState, action: TypeActionsCarousel) => {
  switch (action.type) {
    case FETCH_CAROUSEL: {
      return { ...state, arrImg: [...action.payload] };
    }
    default: {
      return state;
    }
  }
};

export default carouselReducer;
