import { Movie, MovieVideo } from "@/types/movie";
import { simpleAxiosApi } from "../new-api";
import { AxiosResponse } from "axios";
import { filteringMethod } from "@/utils/utils";
import { PaginatedList } from "@/types/paginated-list";
import { Comment } from "@/types/comment";

export const getPopularMovies = async (
  filters = {}
): Promise<PaginatedList<Movie>> => {
  const queryParams = filteringMethod(filters);
  try {
    const res = await simpleAxiosApi({
      url: `/movie/popular${queryParams}`,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getTrendingMovies = async (
  filters = {}
): Promise<PaginatedList<Movie>> => {
  const queryParams = filteringMethod(filters);
  try {
    const res = await simpleAxiosApi({
      url: `trending/movie/week${queryParams}`,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getTopRatedMovies = async (
  filters = {}
): Promise<PaginatedList<Movie>> => {
  const queryParams = filteringMethod(filters);
  try {
    const res = await simpleAxiosApi({
      url: `/movie/top_rated${queryParams}`,
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

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

export const getSingleMovie = async (
  movieId: string
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

export const getSearchMovie = async (movieName: string): Promise<any> => {
  try {
    const res = await simpleAxiosApi({
      url: `/search/multi?query=${movieName}`,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getMovieRecommendations = async (movieId: any): Promise<any> => {
  try {
    const res = await simpleAxiosApi({
      url: `/movie/${movieId}/recommendations`,
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export const getMovieComments = async (
  movieId: string
): Promise<PaginatedList<Comment>> => {
  try {
    const res = await simpleAxiosApi({
      url: `/movie/${movieId}/reviews`,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const createComment = async (
  // session_id: string,
  media_id: string,
  media_type: string,
  comment: string
): Promise<AxiosResponse<any>> => {
  try {
    const res = await simpleAxiosApi({
      method: "POST",
      url: "/review/new",
      data: {
        // session_id: session_id,
        media_id: media_id,
        media_type: media_type,
        content: comment,
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export const getMovieVideos = async (
  movieId: string
): Promise<PaginatedList<MovieVideo>> => {
  try {
    const res = await simpleAxiosApi({
      url: `/movie/${movieId}/videos`,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};
