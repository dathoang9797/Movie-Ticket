import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { Banner } from '@Core/Models/Banner.type';
import { getCarouselAsync } from '@Redux/Thunk/CarouselThunk';
import { showError } from '@Utils/Alert/PopUp';

type CarouselInitialState = {
  arrImg: Array<Banner>;
};

const initialState = {
  arrImg: [],
} as CarouselInitialState;

const carouselSlice = createSlice({
  name: 'carouselReducer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCarouselAsync.fulfilled, (state, action: PayloadAction<Banner[]>) => {
      state.arrImg = action.payload.map((carouselItem) => {
        return { ...carouselItem, idBanner: nanoid() };
      });
    });
    builder.addCase(getCarouselAsync.rejected, (state, action) => {
      if (!action.payload) return;
      showError(action.payload);
    });
  },
});

export default carouselSlice.reducer;
