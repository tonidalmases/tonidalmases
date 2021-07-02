import { createSlice } from '@reduxjs/toolkit';

export const introductionSlice = createSlice({
  name: 'introduction',
  initialState: {
    imageHeight: 0,
  },
  reducers: {
    setImageHeight: (state, { payload }) => {
      state.imageHeight = payload;
    },
  },
});

export const { setImageHeight } = introductionSlice.actions;

export default introductionSlice.reducer;
