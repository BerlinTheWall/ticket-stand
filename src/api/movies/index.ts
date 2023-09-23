import { simpleAxiosApi } from "../newApi";

export const getPopularMovies = async () => {
  try {
    const res = await simpleAxiosApi({
      url: "/movie/popular",
      headers: {
        "Cache-Control": "public, max-age=3600, stale-while-revalidate=59", // 1 hour
      },
    });
    console.log(res.data.results);
    return res.data.results;
  } catch (error) {
    throw error;
  }
};
