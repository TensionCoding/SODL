import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetch('https://reqres.in/api/users?delay=1');
  return (await response.json()).data;
});

export const userAdapter = createEntityAdapter();

const usersSlice = createSlice({
  name: 'users',
  initialState: userAdapter.getInitialState({
    loading: false,
  }),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      userAdapter.setAll(state, action.payload);
      state.loading = false;
    });
    builder.addCase(fetchUsers.rejected, state => {
      state.loading = false;
    });
  },
});

export const {
  selectById: selectUserById,
  selectIds: selectUserIds,
  selectEntities: selectUserEntities,
  selectAll: selectAllUsers,
  selectTotal: selectTotalUsers,
} = userAdapter.getSelectors(state => state.users);

export default usersSlice.reducer;
