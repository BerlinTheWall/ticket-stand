import { Box, Grid, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { Movie } from "@/types/movie";
import MovieCardDetail from "../movie-card-detail";
import Link from "next/link";
import { SINGLE_MOVIE_PAGE } from "@/constants/urls";

type Props = {
  movie: Movie;
};

const MovieCard: React.FC<Props> = ({ movie }) => {
  const isMobileXs = useMediaQuery("(max-width:380px)");
  const isMobile = useMediaQuery("(min-width:600px)");
  const isLaptop = useMediaQuery("(max-width:1400px)");

  return (
    <Grid item xs={12} sm={6} md={3} lg={2}>
      <Box
        sx={{
          height: !isMobile && !isMobileXs ? 550 : 350,
          cursor: "pointer",
          position: "relative",
        }}
      >
        <Link href={`${SINGLE_MOVIE_PAGE}/${movie.id}`}>
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
              right: 0,
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
        </Link>
      </Box>
    </Grid>
  );
};

export default MovieCard;
