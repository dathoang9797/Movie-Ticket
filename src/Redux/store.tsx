import CarouselReducer from '@Redux/Reducers/CarouselReducer';
import LoadingReducer from '@Redux/Reducers/LoadingReducer';
import QuanLyDatVeReducer from '@Redux/Reducers/QuanLyDatVeReducer';
import QuanLyNguoiDungReducer from '@Redux/Reducers/QuanLyNguoiDungReducer';
import QuanLyPhimReducer from '@Redux/Reducers/QuanLyPhimReducer';
import QuanLyRapReducer from '@Redux/Reducers/QuanLyRapReducer';
import { AnyAction, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import logger from 'redux-logger';

export const rootReducer = combineReducers({
  CarouselReducer,
  QuanLyPhimReducer,
  QuanLyRapReducer,
  QuanLyNguoiDungReducer,
  QuanLyDatVeReducer,
  LoadingReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;
