import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './slices/BlogSlice';
import cultureReducer from './slices/CultureSlice';
import culinaryReducer from './slices/CulinarySlice';

const store = configureStore({
  reducer: {
    blogs: blogReducer,
    culture: cultureReducer,
    culinary: culinaryReducer,
  },
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools only in development
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

