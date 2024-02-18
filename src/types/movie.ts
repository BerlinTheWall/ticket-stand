import { profileListType } from "./general";
import { Genre } from "./genres";

export type Movie = {
  id: number;
  title: string;
  original_title: string;
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
};

export type MovieVideo = {
  name: string;
  key: string;
  site: string;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
};
