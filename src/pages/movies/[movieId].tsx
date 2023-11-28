import Box from "@mui/material/Box";
import MainLayout from "@/layout/main-layout";

import { GetServerSideProps, NextPage } from "next";
import { Movie } from "@/types/movie";
import {
  getPopularMovies,
  getSingleMovie,
  getSingleMovieCredits,
} from "@/api/movies";
import SingleMovie from "@/components/movies/single-movie";
import { Credit } from "@/types/credits";
import Casts from "@/components/movies/single-movie/credits";
import MovieSwiperSm from "@/components/swiper-slides/movie-swiper-sm";

interface Props {
  movie: Movie;
  credits: Credit;
  movies: Movie[];
}

const MoviePage: NextPage<Props> = ({ movie, credits, movies }) => {
  return (
    <MainLayout>
      <Box
        sx={{
          minHeight: "100vh",
        }}
      >
        <SingleMovie movie={movie} />
        <Casts casts={credits.cast} />
        <Box sx={{ mt: 10 }}>
          <MovieSwiperSm movies={movies} title="Recommended for you" />
        </Box>
      </Box>
    </MainLayout>
  );
};
export default MoviePage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const movieId = ctx.params!.movieId;
  // const movieId = 951491;
  const { data: movies } = await getPopularMovies();
  const movie = await getSingleMovie(movieId);
  const credits = await getSingleMovieCredits(movieId);
  return {
    props: {
      movie,
      credits,
      movies: movies.results,
    },
  };
};
