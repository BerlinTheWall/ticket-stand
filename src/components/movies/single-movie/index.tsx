import { Box, Divider, Stack, Typography, useMediaQuery } from "@mui/material";
import { convertMovieGenreIdArraysToNames } from "@/utils/genre-converter";
import GenresList from "@/components/swiper-slides/genres-list";
import { Movie, MovieVideo } from "@/types/movie";
import Image from "next/image";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { convertMinuteToHour } from "@/utils/movie-length-converter";
import ActionBar from "@/components/media/action-bar";
import { W1920_IMAGE_URL, W500_IMAGE_URL } from "@/constants/image-urls";

interface Props {
  movie: Movie;
  trailer: MovieVideo;
}

const SingleMovie: React.FC<Props> = ({ movie, trailer }) => {
  const isMobile = useMediaQuery("(min-width:600px)");
  const isTablet = useMediaQuery("(min-width:900px)");
  return (
    <Box position="relative" height={isTablet ? 620 : 480}>
      <Box
        sx={{
          backgroundImage: `url(${W1920_IMAGE_URL + movie.backdrop_path})`,
          height: "100%",
          backgroundPosition: "center center",
          objectFit: "cover",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "75%",
          background: (theme) =>
            `linear-gradient(to bottom, transparent 0%, ${theme.palette.background.paper} 95%)`,
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
          background: (theme) =>
            `linear-gradient(to top, transparent 0%, ${theme.palette.background.paper} 95%)`,
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
          background: (theme) =>
            `linear-gradient(to left, transparent 0%, ${theme.palette.background.paper} 95%)`,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: { xs: "25%", md: "20%" },
          left: "3%",
          height: "80%",
          width: { xs: "95%", md: "95%" },
          px: 2,
          display: "flex",
          justifyContent: "start",
          gap: 5,
        }}
      >
        {isMobile && (
          <Box
            position="relative"
            borderRadius="15px"
            border="3px solid"
            borderColor="primary.main"
            sx={{ height: { xs: "70%", md: "90%" } }}
          >
            <Image
              src={W500_IMAGE_URL + movie.poster_path}
              alt={movie.title}
              width={100}
              height={100}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                backgroundPosition: "center center",
                borderRadius: "12px",
              }}
            />
          </Box>
        )}
        <Box
          sx={{
            width: { xs: "100%", sm: "65%" },
            paddingTop: { xs: 0, md: 5 },
          }}
        >
          <Box>
            <Typography
              sx={{ fontSize: "3rem", fontWeight: "bold" }}
              className="truncate-2-4"
              component="h1"
            >
              {movie.title}
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              gap={1}
              mt={1}
              whiteSpace="nowrap"
              display={"flex"}
            >
              <StarRateRoundedIcon sx={{ color: "warning.light", mb: 0.3 }} />
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
            <Typography marginTop={1} fontSize="1rem" className="truncate-2-4">
              {movie.overview}
            </Typography>
          </Box>
          <ActionBar
            mediaId={movie.id}
            url={`https://www.youtube.com/watch?v=${trailer.key}`}
            isMovie
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SingleMovie;
