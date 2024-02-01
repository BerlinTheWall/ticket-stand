import { Movie } from "@/types/movie";
import { TVSeries } from "@/types/tv-series";

export const isMovie = (item: Movie | TVSeries): item is Movie => {
  return (item as Movie).original_title !== undefined;
};
