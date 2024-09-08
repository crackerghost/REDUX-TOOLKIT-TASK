// src/store/store.js

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import pageReducer from './slices/pageSlice'

export const store = configureStore({
  reducer: {
    items: counterReducer,
    page : pageReducer,
  },
});
