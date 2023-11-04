import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import {
  convertMovieGenreIdArraysToNames,
  convertMovieGenreIdsToNames,
} from "@/utils/genreConverter";
import GenresList from "@/components/SwiperSlides/GenresList";
import { Movie } from "@/types/movie";
import Image from "next/image";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { convertMinuteToHour } from "@/utils/movieLengthConverter";

interface Props {
  movie: Movie;
}

const SingleMovie: React.FC<Props> = ({ movie }) => {
  console.log(movie);
  return (
    <Box position="relative" height={620}>
      <Box>
        <Image
          src={
            "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces" +
            movie.backdrop_path
          }
          alt={movie.original_title}
          width={10000}
          height={100}
          className="swiper-featured-image"
          style={{
            width: "100%",
            objectFit: "cover",
            backgroundPosition: "center center",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "75%",
            borderBottomLeftRadius: "15px",
            borderBottomRightRadius: "15px",
            background: "linear-gradient(to bottom, transparent 0%, #000 95%)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "75%",
            borderBottomLeftRadius: "15px",
            borderBottomRightRadius: "15px",
            background: "linear-gradient(to top, transparent 0%, #000 95%)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderBottomLeftRadius: "15px",
            borderBottomRightRadius: "15px",
            background: "linear-gradient(to left, transparent 0%, #000 95%)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: { xs: "60%", md: "20%" },
            left: "3%",
            height: "80%",
            width: { xs: "95%", md: "95%" },
            px: 2,
            display: "flex",
            justifyContent: "start",
            gap: 5,
          }}
        >
          <Box
            height="90%"
            position="relative"
            borderRadius="15px"
            border={"3px solid #00925D"}
          >
            <Image
              src={"https://www.themoviedb.org/t/p/w500/" + movie.poster_path}
              alt={movie.original_title}
              width={100}
              height={100}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                backgroundPosition: "center center",
                borderRadius: "15px",
              }}
            />
          </Box>
          <Box width="65%" paddingTop={5}>
            <Box>
              <Typography
                sx={{ fontSize: "3rem", fontWeight: "bold" }}
                className="truncate"
                component="h1"
              >
                {movie.original_title}
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                gap={1}
                mt={1}
                whiteSpace="nowrap"
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                <StarRateRoundedIcon sx={{ color: "#f7cf4b", mb: 0.3 }} />
                <Typography fontWeight="bold">
                  {movie.vote_average.toFixed(1)}
                </Typography>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ borderRightWidth: "2px", bgcolor: "gray" }}
                />
                <Typography sx={{ opacity: 1, fontWeight: "bold" }}>
                  {movie.release_date.slice(0, 4)}
                </Typography>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ borderRightWidth: "2px", bgcolor: "gray" }}
                />
                <Typography>{convertMinuteToHour(movie.runtime)}</Typography>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ borderRightWidth: "2px", bgcolor: "gray" }}
                />
                <GenresList
                  genres={convertMovieGenreIdArraysToNames(movie.genres)}
                />
              </Stack>
              <Typography marginTop={1} fontSize="1rem">
                {movie.overview}
              </Typography>
            </Box>

            <Stack
              direction="row"
              alignItems="start"
              mt={7}
              gap={2}
              // width="50%"
              whiteSpace="nowrap"
            >
              <Button
                variant="contained"
                fullWidth
                color="primary"
                sx={{
                  fontSize: { xs: "0.7rem", sm: "0.8rem" },
                }}
                onClick={() => {}}
              >
                <PlayCircleFilledIcon style={{ marginRight: "8px" }} />
                Watch Trailer
              </Button>
              <Button
                variant="outlined"
                fullWidth
                color="secondary"
                sx={{ fontSize: { xs: "0.7rem", sm: "0.8rem" } }}
              >
                <BookmarkBorderIcon style={{ marginRight: "8px" }} /> Add
                Watchlist
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SingleMovie;
