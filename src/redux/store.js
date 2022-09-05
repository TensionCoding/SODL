import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from './reducers/countReducer';
import usersReducer from './reducers/usersSlice';
import { apiSlice } from './api/apiSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
