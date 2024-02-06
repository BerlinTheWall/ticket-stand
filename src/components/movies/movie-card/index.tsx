import {
  Box,
  Button,
  Grid,
  Stack,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { Movie } from "@/types/movie";
import MovieCardDetail from "./movie-card-detail";
import Link from "next/link";
import { SINGLE_MOVIE_PAGE } from "@/constants/urls";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import { addToFavorites, addToWatchlist } from "@/api/profile";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import { toast } from "react-toastify";
import { useIsLoggedIn } from "@/hooks/useIsLoggedIn";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MovieCardToolTipAction from "./movie-card-dropdown";
import { ContextValue } from "@/types/general";

type Props = {
  movie: Movie;
};

const MovieCard: React.FC<Props> = ({ movie }) => {
  const isMobileXs = useMediaQuery("(max-width:380px)");
  const isMobile = useMediaQuery("(min-width:600px)");
  const theme = useTheme();

  const { user } = useContext(AppContext) as ContextValue;
  const loggedIn = useIsLoggedIn();

  const handleLike = async () => {
    try {
      const res = await addToFavorites(user!.id, "movie", movie.id);
      toast.success("Added to Favorites!");
      return res;
    } catch (error) {
      toast.error("Error in adding to Favorites!");
      return error;
    }
  };

  const handleAddToWatchlist = async () => {
    if (loggedIn) {
      // setIsWatchlistLoading(true);
      try {
        const res = await addToWatchlist(user!.id, "movie", movie.id);
        toast.success("Added to Watchlist!");
        // setIsWatchlistLoading(false);
        return res;
      } catch (error) {
        toast.error("Error in adding to Watchlist!");
        // setIsWatchlistLoading(false);
        return error;
      }
    }
  };

  return (
    <Grid item xs={12} sm={6} md={3} lg={2.4}>
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

        <MovieCardToolTipAction
          mediaId={movie.id}
          isMovie={true}
        />
      </Box>
    </Grid>
  );
};

export default MovieCard;
