import { ThongTinPhim } from '@Core/Models/Phim.type';
import { TypeActionsFilm } from '@Redux/Reducers/QuanLyPhimReducer/QuanLyPhimAction';
import {
  FETCH_ALL_FILM,
  FETCH_FILM,
  FETCH_FILM_DANG_CHIEU,
  FETCH_FILM_SAP_CHIEU,
} from '@Redux/Reducers/QuanLyPhimReducer/QuanLyPhimConstant';

type FilmInitialState = {
  arrFilm: Array<ThongTinPhim>;
  dangChieu: ThongTinPhim['dangChieu'];
  sapChieu: ThongTinPhim['sapChieu'];
  arrFilmDefault: Array<ThongTinPhim>;
};

const initialState = {
  arrFilm: [],
  dangChieu: false,
  sapChieu: false,
  arrFilmDefault: [],
} as FilmInitialState;

const quanLyPhimReducer = (state = initialState, action: TypeActionsFilm) => {
  switch (action.type) {
    case FETCH_FILM: {
      return { ...state, arrFilm: [...action.payload], arrFilmDefault: [...action.payload] };
    }

    case FETCH_ALL_FILM: {
      return {
        ...state,
        arrFilm: state.arrFilmDefault.filter((film) => film.dangChieu === state.dangChieu),
        sapChieu: false,
        dangChieu: false,
      };
    }

    case FETCH_FILM_DANG_CHIEU: {
      return {
        ...state,
        arrFilm: state.arrFilmDefault.filter((film) => film.dangChieu === state.dangChieu),
        sapChieu: false,
        dangChieu: true,
      };
    }
    case FETCH_FILM_SAP_CHIEU: {
      return {
        ...state,
        arrFilm: state.arrFilmDefault.filter((film) => film.sapChieu === state.sapChieu),
        sapChieu: true,
        dangChieu: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default quanLyPhimReducer;
