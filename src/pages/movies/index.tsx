import Box from "@mui/material/Box";
import MainLayout from "@/layout/main-layout";

import { GetServerSideProps, NextPage } from "next";
import { Movie } from "@/types/movie";
import { getMoviesByGenre } from "@/api/movies";
import MoviesList from "@/components/movies/movies-list";

interface Props {
  movies: Movie[];
}

const MoviesPage: NextPage<Props> = ({ movies }) => {
  return (
    <MainLayout>
      <Box
        sx={{
          marginTop: 14,
          minHeight: "100vh",
        }}
      >
        <MoviesList initialMovies={movies} />
      </Box>
    </MainLayout>
  );
};
export default MoviesPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: movies } = await getMoviesByGenre({ with_genres: 28, page: 1 });

  return {
    props: {
      movies: movies.results,
    },
  };
};
