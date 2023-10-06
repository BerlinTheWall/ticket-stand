import { MovieGenreEnum, SeriesGenreEnum } from "@/types/genres";

// convert array of genre ids (Movies) to their genre name and return the fist two item
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

// convert array of genre ids (Series - TV Shows) to their genre name and return the fist two item
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
