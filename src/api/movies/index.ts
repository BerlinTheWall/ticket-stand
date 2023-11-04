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

/**
 * {
  "genres": [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]
}
 */
