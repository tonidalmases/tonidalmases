import { createSlice } from '@reduxjs/toolkit';

export const sectionsSlice = createSlice({
  name: 'sections',
  initialState: {
    positions: {
      about: 0,
      skills: 0,
      career: 0,
      education: 0,
      courses: 0,
    },
    current: undefined,
  },
  reducers: {
    setSectionPosition: (state, { payload }) => {
      state.positions[payload.id] = Math.round(payload.position);
    },
    setCurrentSection: (state, { payload }) => {
      state.current = payload;
    },
  },
});

export const { setSectionPosition, setCurrentSection } = sectionsSlice.actions;

export default sectionsSlice.reducer;
