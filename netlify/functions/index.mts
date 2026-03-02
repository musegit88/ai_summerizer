import type { Config, Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const url = req.url.split("=")[1].split("&")[0];
  const lang = req.url.split("=")[2];

  try {
    const response = await fetch(
      `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${url}&length=4&lang=${lang === "en-US" ? "en" : lang}`,
      {
        headers: {
          "X-RapidAPI-Key": process.env.VITE_RAPID_API_ARTICLE_KEY,
          "X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
          "Content-Type": "application/json",
        },
      },
    );
    const data = await response.json();
    return new Response(JSON.stringify(data));
  } catch (error) {
    console.log("API Error:", error);
    return new Response(JSON.stringify(error));
  }
};

export const config: Config = {
  path: "/api/v1/summarize",
  rateLimit: {
    windowLimit: 1,
    windowSize: 180,
    aggregateBy: ["ip", "domain"],
  },
};
