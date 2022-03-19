import {
  ThunkAction,
  applyMiddleware,
  combineReducers,
  createStore,
  AnyAction,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import CarouselReducer from '@Redux/Reducers/CarouselReducer/CarouselReducer';
import QuanLyPhimReducer from '@Redux/Reducers/QuanLyPhimReducer/QuanLyPhimReducer';
import QuanLyRapReducer from '@Redux/Reducers/QuanLyRapReducer/QuanLyRapReducer';
import QuanLyNguoiDungReducer from '@Redux/Reducers/QuanLyNguoiDungReducer/QuanLyNguoiDungReducer';
import QuanLyDatVeReducer from '@Redux/Reducers/QuanLyDatVeReducer/QuanLyDatVeReducer';
import LoadingReducer from '@Redux/Reducers/LoadingReducer';

export const rootReducer = combineReducers({
  CarouselReducer,
  QuanLyPhimReducer,
  QuanLyRapReducer,
  QuanLyNguoiDungReducer,
  QuanLyDatVeReducer,
  LoadingReducer,
});

export const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, any, AnyAction>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;
