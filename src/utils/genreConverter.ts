import { MovieGenre, SeriesGenre } from "@/types/genres";

// convert array of genre ids (Movies) to their genre name and return the fist two item
export const convertMovieGenreIdsToNames = (genreIds: number[]): string[] => {
  const genreNames: string[] = [];
  for (const id of genreIds) {
    for (const key in MovieGenre) {
      if (MovieGenre[key].id === id) {
        genreNames.push(MovieGenre[key].name);
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
    for (const key in SeriesGenre) {
      if (SeriesGenre[key].id === id) {
        genreNames.push(key);
        break;
      }
    }
  }
  return genreNames.slice(0, 2);
};
