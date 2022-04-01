import { Banner } from '@Core/Models/Banner.type';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { quanLyPhimService } from '@Services/QuanLyPhimService';

export const getCarouselAsync = createAsyncThunk<Banner[], void, { rejectValue: string }>(
  'carouselReducer/fetchCarouselBanner',
  async (_, { rejectWithValue }) => {
    const result = await quanLyPhimService.layDanhSachBanner();
    if (typeof result.content === 'string') {
      return rejectWithValue(result.content);
    }
    return result.content;
  }
);
