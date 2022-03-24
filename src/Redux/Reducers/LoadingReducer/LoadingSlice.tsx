import { createSlice } from '@reduxjs/toolkit';

type LoadingInitialState = {
  isLoading: boolean;
  count: number;
};

const initialState = {
  isLoading: false,
  count: 0,
} as LoadingInitialState;

const loadingSlice = createSlice({
  name: 'loadingReducer',
  initialState,
  reducers: {
    setRequestSpinnerStarted: (state) => {
      state.count++;
      state.isLoading = true;
    },
    setRequestSpinnerEnded: (state) => {
      state.count--;
      if (state.count <= 0) {
        state.isLoading = false;
      }
    },
  },
});

export const { setRequestSpinnerEnded, setRequestSpinnerStarted } = loadingSlice.actions;

export default loadingSlice.reducer;
