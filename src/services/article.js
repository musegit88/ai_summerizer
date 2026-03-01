import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
    // prepareHeaders: (headers) => {
    //   headers.set("X-RapidAPI-Key", rapidApiKey);
    //   headers.set(
    //     "X-RapidAPI-Host",
    //     "article-extractor-and-summarizer.p.rapidapi.com"
    //   );

    //   return headers;
    // },
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) =>
        // fix for the API to work with en-US      
        // `/.netlify/functions/index?url=${params.articleUrl}&lang=${params.lang}`,
        `/api/v1/summarize?url=${params.articleUrl}&lang=${params.lang}`,

    }),
  }),
});

export const { useLazyGetSummaryQuery } = articleApi;
