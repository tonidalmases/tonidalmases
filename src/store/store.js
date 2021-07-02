import { configureStore } from '@reduxjs/toolkit';
import introductionSlice from './introduction-slice';
import scrollSlice from './scroll-slice';
import sectionsSlice from './sections-slice';

export default configureStore({
  reducer: {
    scroll: scrollSlice,
    introduction: introductionSlice,
    sections: sectionsSlice,
  },
});
