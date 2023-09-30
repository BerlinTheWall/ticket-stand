import { Box, Button, Divider, Stack, Typography } from "@mui/material";
// core version +  pagination modules:
import { Autoplay, Pagination } from "swiper/modules";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
// import Swiper and modules styles
import "swiper/css/pagination";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Movie } from "@/types/movie";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import { convertMovieGenreIdsToNames } from "@/helper/genreConverter";
import { GenreType } from "@/types/genres";

type Props = {
  genres: string[];
};

const GenresList: React.FC<Props> = ({ genres }) => {
  return (
    <Box
      style={{
        listStyleType: "disc",
        display: "flex",
        gap: 20,
        opacity: 0.7,
      }}
      component="ul"
    >
      {genres.map((genre: string, index: number) => {
        return (
          <Box key={genre}>
            <Typography
              component="li"
              style={{ listStyleType: "none", fontSize: "0.8rem" }}
            >
              {}
            </Typography>
            <Typography
              component="li"
              style={{
                fontSize: "0.8rem",
                listStyleType: index === 0 ? "none" : "",
              }}
            >
              {genre}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default GenresList;
