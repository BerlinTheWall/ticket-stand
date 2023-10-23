import Box from "@mui/material/Box";
import MainLayout from "@/layout/MainLayout";

import { GetServerSideProps, NextPage } from "next";
import { Movie } from "@/types/movie";
import { getMoviesByGenre } from "@/api/movies";
import MoviesList from "@/components/MoviesList";

interface Props {
  movies: Movie[];
}

const MoviePage: NextPage<Props> = ({ movies }) => {
  return (
    <MainLayout>
      <Box
        sx={{
          marginTop: 14,
          minHeight: "100vh",
        }}
      >
        <MoviesList movies={movies} />
      </Box>
    </MainLayout>
  );
};
export default MoviePage;

export const getServerSideProps: GetServerSideProps = async () => {
  const movies = await getMoviesByGenre({ with_genres: 28, page: 1 });
  return {
    props: {
      movies,
    },
  };
};
