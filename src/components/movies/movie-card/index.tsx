import { Box, Grid, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { Movie } from "@/types/movie";
import MovieCardDetail from "./movie-card-detail";
import Link from "next/link";
import { SINGLE_MOVIE_PAGE, SINGLE_TVSERIES_PAGE } from "@/constants/urls";
import MovieCardToolTipAction from "./movie-card-dropdown";
import { isMovie } from "@/utils/check-is-movie";
import { TVSeries } from "@/types/tv-series";

type Props = {
  media: Movie | TVSeries;
};

const MovieCard: React.FC<Props> = ({ media }) => {
  const isMobileXs = useMediaQuery("(max-width:380px)");
  const isMobile = useMediaQuery("(min-width:600px)");
  return (
    <Grid item xs={12} sm={6} md={3} lg={2.4}>
      <Box
        sx={{
          height: !isMobile && !isMobileXs ? 550 : 350,
          cursor: "pointer",
          position: "relative",
        }}
      >
        <Link
          href={
            isMovie(media)
              ? `${SINGLE_MOVIE_PAGE}/${media.id}`
              : `${SINGLE_TVSERIES_PAGE}/${media.id}`
          }
        >
          <Image
            src={"https://www.themoviedb.org/t/p/w500/" + media.poster_path}
            alt={isMovie(media) ? media.title : media.name}
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
            title={isMovie(media) ? media.title : media.name}
            rating={media.vote_average}
            genres={media.genre_ids}
            isMovie={isMovie(media)}
          />
        </Link>
        <MovieCardToolTipAction mediaId={media.id} isMovie={isMovie(media)} />
      </Box>
    </Grid>
  );
};

export default MovieCard;
