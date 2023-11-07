import { Box, Grid, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { Movie } from "@/types/movie";
import MovieCardDetail from "../movie-card-detail";

type Props = {
  movie: Movie;
};

const MovieCard: React.FC<Props> = ({ movie }) => {
  const isMobileXs = useMediaQuery("(max-width:380px)");
  const isMobile = useMediaQuery("(min-width:600px)");
  const isLaptop = useMediaQuery("(max-width:1400px)");

  return (
    <Grid
      item
      height={!isMobile && !isMobileXs ? 550 : 350}
      xs={10}
      sm={5}
      md={2.5}
      lg={2}
      position={"relative"}
      sx={{ cursor: "pointer", mx: { xs: 1, sm: 2 } }}
      my={1}
    >
      <Image
        src={"https://www.themoviedb.org/t/p/w500/" + movie.poster_path}
        alt={movie.original_title}
        width={1000}
        height={100}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          backgroundPosition: "center center",
          borderRadius: "15px",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "45%",
          borderBottomLeftRadius: "12px",
          borderBottomRightRadius: "12px",

          background: (theme) =>
            `linear-gradient(to bottom, transparent 0%, ${theme.palette.background.paper} 50%)`,
        }}
      />
      <MovieCardDetail
        title={movie.original_title}
        rating={movie.vote_average}
        genres={movie.genre_ids}
      />
    </Grid>
  );
};

export default MovieCard;
