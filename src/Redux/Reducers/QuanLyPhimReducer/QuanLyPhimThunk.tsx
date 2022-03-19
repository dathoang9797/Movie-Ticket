import { AppThunk } from '@Redux/store';
import { fetchFilmlAction } from '@Redux/Reducers/QuanLyPhimReducer/QuanLyPhimAction';
import { quanLyPhimService } from '@Services/QuanLyPhimService';

export const fetchFilmThunk = (): AppThunk => {
  return async (dispatch) => {
    const result = await quanLyPhimService.layDanhSachPhim();

    if (typeof result.content === 'string') {
      console.log(result.content);
      return;
    }

    if ('content' in result.content) {
      console.log(result.content);
      return;
    }

    dispatch(fetchFilmlAction(result.content));
  };
};
