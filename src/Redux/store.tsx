import CarouselReducer from '@Redux/Reducers/CarouselSlice';
import LoadingReducer from '@Redux/Reducers/LoadingSlice';
import QuanLyDatVeReducer from '@Redux/Reducers/QuanLyDatVeSlice';
import QuanLyNguoiDungReducer from '@Redux/Reducers/QuanLyNguoiDungSlice';
import QuanLyPhimReducer from '@Redux/Reducers/QuanLyPhimSlice';
import QuanLyRapReducer from '@Redux/Reducers/QuanLyRapSlice';
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
