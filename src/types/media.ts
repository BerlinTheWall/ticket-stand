import { profileListType } from "./general";
import { Genre } from "./genres";
import { Season } from "./tv-series";

export type Media = {
  id: number;
  title?: string;
  original_title?: string;
  name?: string;
  original_name?: string;
  overview: string;
  genre_ids: number[];
  release_date: string;
  backdrop_path: string;
  poster_path: string;
  vote_average: number;
  adult: boolean;
  genres: Genre[];
  runtime: number;
  media_type: profileListType;
  first_air_date?: string;
  seasons?: Season[];
  number_of_seasons: number;
  number_of_episodes: number;
};
