import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const apiSlice = createApi({
//   reducerPath: 'api',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/api' }),
//   endpoints: builder => ({
//     fetchUsers: builder.query({
//       query: () => '/users?delay=1',
//     }),
//   }),
// });

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.1.4:8080' }),
  endpoints: builder => ({
    fetchUsers: builder.query({
      query: () => '/api',
    }),
  }),
});

export const { useFetchUsersQuery } = apiSlice;
