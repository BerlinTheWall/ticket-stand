import { MovieGenre, TVSeriesGenre } from "@/constants/movie-genre";
import { Genre } from "@/types/genres";

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

// convert array of genre ids (Movies) to their genre name and return the fist two item
export const convertMovieGenreIdArraysToNames = (genres: Genre[]): string[] => {
  const genreNames: string[] = [];
  genres.map((genre) => {
    for (const key in MovieGenre) {
      if (MovieGenre[key].id === genre.id) {
        genreNames.push(MovieGenre[key].name);
        break;
      }
    }
  });
  // for (const key in MovieGenre) {
  //   if (MovieGenre[key].id === genreIds.) {
  //     genreNames.push(MovieGenre[key].name);
  //     break;

  // }
  // }
  return genreNames.slice(0, 2);
};

// convert array of genre ids (Series - TV Shows) to their genre name and return the fist two item
// export const convertSeriesGenreIdsToNames = (genreIds: number[]): string[] => {
//   const genreNames: string[] = [];
//   for (const id of genreIds) {
//     for (const key in SeriesGenre) {
//       if (SeriesGenre[key].id === id) {
//         genreNames.push(key);
//         break;
//       }
//     }
//   }
//   return genreNames.slice(0, 2);
// };

export const convertTVSeriesGenreIdArraysToNames = (
  genres: Genre[]
): string[] => {
  const genreNames: string[] = [];
  genres.map((genre) => {
    for (const key in TVSeriesGenre) {
      if (TVSeriesGenre[key].id === genre.id) {
        genreNames.push(TVSeriesGenre[key].name);
        break;
      }
    }
  });
  return genreNames.slice(0, 2);
};
