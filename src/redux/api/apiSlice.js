import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/api' }),
  endpoints: builder => ({
    fetchUsers: builder.query({
      query: () => '/users?delay=1',
    }),
  }),
});

export const { useFetchUsersQuery } = apiSlice;
