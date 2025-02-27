import { MovieVideo } from "@/types/movie";
import { simpleAxiosApi } from "../new-api";
import { AxiosResponse } from "axios";
import { filteringMethod } from "@/utils/utils";
import { PaginatedList } from "@/types/paginated-list";
import { Comment } from "@/types/comment";
import { Season, TVSeries } from "@/types/tv-series";

export const getPopularTVSeries = async (
  filters = {}
): Promise<PaginatedList<TVSeries>> => {
  const queryParams = filteringMethod(filters);
  try {
    const res = await simpleAxiosApi({
      url: `/tv/popular${queryParams}`,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getTrendingTVSeries = async (
  filters = {}
): Promise<PaginatedList<TVSeries>> => {
  const queryParams = filteringMethod(filters);
  try {
    const res = await simpleAxiosApi({
      url: `trending/tv/week${queryParams}`,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getTopRatedTVSeries = async (
  filters = {}
): Promise<PaginatedList<TVSeries>> => {
  const queryParams = filteringMethod(filters);
  try {
    const res = await simpleAxiosApi({
      url: `/tv/top_rated${queryParams}`,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getTVSeriesByGenre = async (
  genre = {}
): Promise<AxiosResponse<PaginatedList<TVSeries>>> => {
  const queryParams = filteringMethod(genre);
  try {
    const res = await simpleAxiosApi({
      url: `/discover/tv${queryParams}`,
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export const getSingleTVSeries = async (
  tvSeriesId: string
): Promise<AxiosResponse<TVSeries>> => {
  try {
    const res = await simpleAxiosApi({
      url: `/tv/${tvSeriesId}`,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getTVSeriesSeasons = async (
  tvSeriesId: number,
  seasonNumber: number
): Promise<AxiosResponse<Season>> => {
  try {
    const res = await simpleAxiosApi({
      url: `/tv/${tvSeriesId}/season/${seasonNumber}`,
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export const getSingleTVSerieCredits = async (seriesId: any): Promise<any> => {
  try {
    const res = await simpleAxiosApi({
      url: `/tv/${seriesId}/credits`,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getTVSerieRecommendations = async (
  seriesId: string
): Promise<any> => {
  try {
    const res = await simpleAxiosApi({
      url: `/tv/${seriesId}/recommendations`,
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export const getTVSerieComments = async (
  seriesId: string
): Promise<PaginatedList<Comment>> => {
  try {
    const res = await simpleAxiosApi({
      url: `/tv/${seriesId}/reviews`,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getTvSeriesVideos = async (
  seriesId: string
): Promise<PaginatedList<MovieVideo>> => {
  try {
    const res = await simpleAxiosApi({
      url: `/tv/${seriesId}/season/1/videos`,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};
