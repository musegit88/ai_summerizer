import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) =>
        `/api/v1/summarize?url=${params.articleUrl}&lang=${params.lang}`,

    }),
  }),
});

export const { useLazyGetSummaryQuery } = articleApi;
