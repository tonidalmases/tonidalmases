import { createSlice } from '@reduxjs/toolkit';

export const scrollSlice = createSlice({
  name: 'scroll',
  initialState: {
    position: 0,
  },
  reducers: {
    setScrollPosition: (state, { payload }) => {
      state.position = Math.round(payload);
    },
  },
});

export const { setScrollPosition } = scrollSlice.actions;

export default scrollSlice.reducer;
