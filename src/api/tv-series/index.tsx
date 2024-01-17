import { Movie } from "@/types/movie";
import { simpleAxiosApi } from "../new-api";
import { AxiosResponse } from "axios";
import { filteringMethod } from "@/utils/utils";
import { PaginatedList } from "@/types/paginated-list";
import { Comment } from "@/types/comment";
import { TVSeries } from "@/types/tv-series";

export const getPopularTVSeries = async (
  filters = {}
): Promise<AxiosResponse<PaginatedList<TVSeries>>> => {
  const queryParams = filteringMethod(filters);
  try {
    const res = await simpleAxiosApi({
      url: `/tv/popular${queryParams}`,
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

export const getTVSeriesByGenre = async (
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

export const getSingleTVSeries = async (
  movieId: any
): Promise<AxiosResponse<Movie>> => {
  try {
    const res = await simpleAxiosApi({
      url: `/movie/${movieId}`,
    });
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
    return res.data;
  } catch (error) {
    throw error;
  }
};

// export const getSearchMovie = async (movieName: string): Promise<any> => {
//   try {
//     const res = await simpleAxiosApi({
//       url: `/search/multi?query=${movieName}`,
//     });
//     return res.data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const getMovieRecommendations = async (movieId: any): Promise<any> => {
//   try {
//     const res = await simpleAxiosApi({
//       url: `/movie/${movieId}/recommendations`,
//     });
//     return res;
//   } catch (error) {
//     throw error;
//   }
// };

// export const getMovieComments = async (
//   movieId: any
// ): Promise<PaginatedList<Comment>> => {
//   try {
//     const res = await simpleAxiosApi({
//       url: `/movie/${movieId}/reviews`,
//     });
//     return res.data;
//   } catch (error) {
//     throw error;
//   }
// };
