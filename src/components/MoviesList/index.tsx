import {
  Box,
  Grid,
  Pagination,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Movie } from "@/types/movie";
import MovieCard from "./MovieCard";

type Props = {
  movies: Movie[];
};

const MoviesList: React.FC<Props> = ({ movies }) => {
  const isMobile = useMediaQuery("(max-width:600px)");

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
      <Grid container justifyContent="center">
        {movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
        <Pagination
          count={10}
          color="primary"
          sx={{ marginTop: 5 }}
          size={isMobile ? "medium" : "large"}
          siblingCount={isMobile ? 0 : 1}
        />
      </Grid>
    </>
  );
};

export default MoviesList;
