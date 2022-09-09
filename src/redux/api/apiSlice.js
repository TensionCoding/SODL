import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IP_ADDRESS } from '@env';

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
  baseQuery: fetchBaseQuery({ baseUrl: `http://${IP_ADDRESS}:8080` }),
  tagTypes: ['Trips'],
  endpoints: builder => ({
    fetchUsers: builder.query({
      query: username => `/getTrips/${username}`,
      providesTags: ['Trips'],
    }),
    loginUser: builder.mutation({
      query: loginInfo => ({
        url: '/login',
        method: 'POST',
        body: loginInfo,
      }),
    }),
    signUpUser: builder.mutation({
      query: userInfo => ({
        url: '/createUser',
        method: 'POST',
        body: userInfo,
      }),
    }),
    deleteTrip: builder.mutation({
      query: tripInfo => ({
        url: '/deleteTrip',
        method: 'DELETE',
        body: tripInfo,
      }),
      invalidatesTags: ['Trips'],
    }),
    addTrip: builder.mutation({
      query: tripInfo => ({
        url: '/addTrip',
        method: 'PATCH',
        body: tripInfo,
      }),
      invalidatesTags: ['Trips'],
    }),
  }),
});

export const {
  useFetchUsersQuery,
  useLoginUserMutation,
  useSignUpUserMutation,
  useDeleteTripMutation,
  useAddTripMutation,
} = apiSlice;
