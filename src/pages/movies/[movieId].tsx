import Box from "@mui/material/Box";
import MainLayout from "@/layout/MainLayout";

import { GetStaticProps, NextPage } from "next";
import { Movie } from "@/types/movie";
import {
  getPopularMovies,
  getSingleMovie,
  getSingleMovieCredits,
} from "@/api/movies";
import SingleMovie from "@/components/Movies/SingleMovie";
import { Credit } from "@/types/credits";
import Casts from "@/components/Movies/SingleMovie/Credits";

interface Props {
  movie: Movie;
  credits: Credit;
}

const MoviePage: NextPage<Props> = ({ movie, credits }) => {
  return (
    <MainLayout>
      <Box
        sx={{
          minHeight: "100vh",
        }}
      >
        <SingleMovie movie={movie} />
        <Casts casts={credits.cast} />
      </Box>
    </MainLayout>
  );
};
export default MoviePage;

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export async function getStaticPaths() {
  const { data } = await getPopularMovies();
  //   const movies = moviesResponse.data.results;
  //   const res = await fetch("https://.../posts");
  //   const posts = await movies.json();
  // Get the paths we want to pre-render based on posts
  // console.log(movies.data.results[0].id);
  // movies.map((movie: Movie) => ({
  //   console.log(movie.id)
  // }))
  const paths = data.results.map((movie: Movie) => ({
    params: { movieId: movie.id.toString() },
  }));
  // console.log(paths);
  // We'll pre-render only these paths at build time.
  // { fallback: 'blocking' } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // console.log(params);
  const movie = await getSingleMovie(params!.movieId);
  const credits = await getSingleMovieCredits(params!.movieId);

  // const movie = await getPopularMovies();
  // console.log(movie);
  //   const posts = await res.json();
  // const movie = {};
  return {
    props: {
      movie,
      credits,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 100 seconds
    revalidate: 1000, // In seconds
  };
};
