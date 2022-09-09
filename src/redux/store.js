import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from './reducers/countReducer';
import userReducer from './reducers/userSlice';
import { apiSlice } from './api/apiSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
