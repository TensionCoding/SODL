import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './reducers/countReducer';
import usersReducer from './reducers/usersSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
  },
});
