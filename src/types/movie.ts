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
};
