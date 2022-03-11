import {
  ThunkAction,
  Action,
  createStore,
  applyMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';

export const rootReducer = combineReducers({});

export const store = createStore(rootReducer, applyMiddleware(logger));

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
