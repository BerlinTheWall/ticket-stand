import { Movie } from "@/types/movie";
import { simpleAxiosApi } from "../newApi";
import { AxiosResponse } from "axios";
import { filteringMethod } from "@/utils/utils";

export const getPopularMovies = async (
  filters = {}
): Promise<AxiosResponse<Movie>> => {
  const queryParams = filteringMethod(filters);
  try {
    const res = await simpleAxiosApi({
      url: `/movie/popular${queryParams}`,
    });
    return res.data.results;
  } catch (error) {
    throw error;
  }
};

// export const getTrendingMovies = async (): Promise<AxiosResponse<Movie>> => {
//   const queryParams = filteringMethod(filters);
//   try {
//     const res = await simpleAxiosApi({
//       url: `/movie/popular${queryParams}`,
//     });
//     return res.data.results;
//   } catch (error) {
//     throw error;
//   }
// };

export const getMoviesByGenre = async (
  genre = {}
): Promise<AxiosResponse<Movie>> => {
  const queryParams = filteringMethod(genre);
  try {
    const res = await simpleAxiosApi({
      url: `/discover/movie${queryParams}`,
    });
    return res.data.results;
  } catch (error) {
    throw error;
  }
};
