import {
  Box,
  Button,
  Grid,
  Stack,
  Tooltip,
  useMediaQuery,
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

type Props = {
  movie: Movie;
};

const MovieCard: React.FC<Props> = ({ movie }) => {
  const isMobileXs = useMediaQuery("(max-width:380px)");
  const isMobile = useMediaQuery("(min-width:600px)");

  const { user } = useContext(AppContext);

  const handleLike = async () => {
    try {
      const res = await addToFavorites(user.id, "movie", movie.id);
      toast.success("Added to Favorites!");
      return res;
    } catch (error) {
      toast.error("Error in adding to Favorites!");
      return error;
    }
  };

  const handleAddToWatchlist = async () => {
    try {
      const res = await addToWatchlist(user.id, "movie", movie.id);
      toast.success("Added to Watchlist!");
      return res;
    } catch (error) {
      toast.error("Error in adding to Watchlist!");
      return error;
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
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "100%",
            borderRadius: "12px",
            opacity: "0",
            ":hover": { opacity: "0.8" },
            transition: "all 0.5s",
            background: (theme) =>
              `linear-gradient(to bottom, transparent 0%, ${theme.palette.background.paper} 0%)`,
          }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Stack
            direction={"row"}
            gap={1}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Tooltip title={"Add to Favorites"}>
              <FavoriteIcon
                color="error"
                style={{ fontSize: 28 }}
                onClick={handleLike}
              />
            </Tooltip>
            <Tooltip title={"Add to Watchlist"}>
              <BookmarkAddIcon
                style={{ fontSize: 28 }}
                onClick={handleAddToWatchlist}
              />
            </Tooltip>
            <Tooltip title={"Add to List"}>
              <FormatListBulletedIcon
                color="primary"
                style={{ fontSize: 28 }}
              />
            </Tooltip>
          </Stack>
        </Box>
      </Box>
    </Grid>
  );
};

export default MovieCard;
