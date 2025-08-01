import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const API_URL = import.meta.env.VITE_APP_BASE_URLs;
// const API_URL = "http://localhost:8800/api";

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  credentials: "include"
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: [],
  endpoints: (builder) => ({}),
});
