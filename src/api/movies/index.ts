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
