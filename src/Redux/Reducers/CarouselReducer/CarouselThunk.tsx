import { AppThunk } from '@Redux/store';
import { fetchCarouselAction } from '@Redux/Reducers/CarouselReducer/CarouselAction';
import { quanLyPhimService } from '@Services/QuanLyPhimService';

export const fetchCarouselThunk = (): AppThunk => {
  return async (dispatch) => {
    const result = await quanLyPhimService.layDanhSachBanner();

    if (typeof result.content === 'string') {
      console.log(result.content);
      return;
    }

    dispatch(fetchCarouselAction(result.content));
  };
};
