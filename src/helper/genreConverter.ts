import { MovieGenreEnum } from "@/types/genres";
import { SeriesGenreEnum } from "@/types/genres";

export const convertMovieGenreIdsToNames = (genreIds: number[]): string[] => {
  const genreNames: string[] = [];
  for (const id of genreIds) {
    for (const key in MovieGenreEnum) {
      if (MovieGenreEnum[key].id === id) {
        genreNames.push(MovieGenreEnum[key].name);
        break;
      }
    }
  }
  return genreNames.slice(0, 2);
};

const convertSeriesGenreIdsToNames = (genreIds: number[]): string[] => {
  const genreNames: string[] = [];
  for (const id of genreIds) {
    for (const key in SeriesGenreEnum) {
      if (SeriesGenreEnum[key].id === id) {
        genreNames.push(key);
        break;
      }
    }
  }
  return genreNames.slice(0, 2);
};
