import { Grid, Pagination, Typography, useMediaQuery } from "@mui/material";
import { Movie } from "@/types/movie";
import MovieCard from "../movie-card";
import { useCallback, useEffect, useState } from "react";
import { getMoviesByGenre } from "@/api/movies";

type Props = {
  initialMovies: Movie[];
};

const MoviesList: React.FC<Props> = ({ initialMovies }) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  // const [page, setPage] = useState<number>(1);
  // const [movies, setMovies] = useState<Movie[]>(initialMovies);

  // const fetchMovies = useCallback(() => {
  //   getMoviesByGenre({ with_genres: 28, page: page })
  //     .then((movies) => {
  //       console.log(movies);
  //       setMovies(movies.data.results);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, [page]);

  // useEffect(() => {
  //   fetchMovies();
  // }, [fetchMovies, page]);

  // const handleChange = (event: any, value: number) => {
  //   setPage(value);
  // };

  return (
    <>
      <Typography
        component="h1"
        fontSize={24}
        fontWeight="bold"
        my={3}
        paddingLeft={5}
      >
        All Movies
      </Typography>
      {/* <Grid container justifyContent="center">
        {movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
        <Pagination
          count={10}
          color="primary"
          sx={{ marginTop: 5 }}
          size={isMobile ? "medium" : "large"}
          siblingCount={isMobile ? 0 : 1}
          onChange={handleChange}
        />
      </Grid> */}
    </>
  );
};

export default MoviesList;
