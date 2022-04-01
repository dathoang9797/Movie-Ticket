import { RootState } from '@Redux/store';

//Write like this will rerender multile time can console.log to check in HomePage.tsx
//export const selectIsLoadingState = (state: RootState) => state.LoadingReducer;

export const selectIsLoadingState = (state: RootState) => state.LoadingReducer.isLoading;

const selectLoadingState = {
  selectIsLoadingState,
};

export default selectLoadingState;
