import { Genre } from "./genres";

export type TVSeries = {
  id: number;
  name: string;
  original_name: string;
  overview: string;
  genre_ids: number[];
  first_air_date: string;
  backdrop_path: string;
  poster_path: string;
  vote_average: number;
  adult: boolean;
  genres: Genre[];
};
