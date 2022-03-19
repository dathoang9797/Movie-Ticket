import { RootState } from '@Redux/store';

export const selectorLoadingState = (state: RootState) => state.LoadingReducer;
