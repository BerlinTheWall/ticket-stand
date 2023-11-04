import { Movie } from "@/types/movie";
import { simpleAxiosApi } from "../newApi";
import { AxiosResponse } from "axios";
import { filteringMethod } from "@/utils/utils";
import { PaginatedList } from "@/types/paginatedList";

export const getPopularMovies = async (
  filters = {}
): Promise<AxiosResponse<PaginatedList<Movie>>> => {
  const queryParams = filteringMethod(filters);
  try {
    const res = await simpleAxiosApi({
      url: `/movie/popular${queryParams}`,
    });
    return res;
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
): Promise<AxiosResponse<PaginatedList<Movie>>> => {
  const queryParams = filteringMethod(genre);
  try {
    const res = await simpleAxiosApi({
      url: `/discover/movie${queryParams}`,
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export const getSingleMovie = async (movieId: any): Promise<any> => {
  try {
    const res = await simpleAxiosApi({
      url: `/movie/${movieId}`,
    });
    // console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getSingleMovieCredits = async (movieId: any): Promise<any> => {
  try {
    const res = await simpleAxiosApi({
      url: `/movie/${movieId}/credits`,
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};
