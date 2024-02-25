import { profileListType } from "./general";
import { Genre } from "./genres";

export type TVSeries = {
  release_date: any;
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
  seasons: Season[];
  number_of_seasons: number;
  number_of_episodes: number;
  media_type: profileListType;
};

export type Season = {
  id: number;
  season_number: number;
  name: string;
  overview: string;
  poster_path: string;
  air_date: string;
  episode_count: number;
  vote_average: number;
  episodes: Episode[];
};

export type Episode = {
  id: number;
  name: string;
  episode_number: number;
  overview: string;
  air_date: string;
  runtime: string;
  vote_average: number;
  still_path: string;
};
