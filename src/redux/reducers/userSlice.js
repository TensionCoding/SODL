import { createSlice } from '@reduxjs/toolkit';

const initialState = { user: '' };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    applyUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { applyUser } = userSlice.actions;

export default userSlice.reducer;

export const selectUser = state => state.user;
