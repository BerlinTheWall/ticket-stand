import {
  Box,
  Button,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCardDetail from "../movie-card-detail";
import { Movie } from "@/types/movie";
import { useState } from "react";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { convertMovieGenreIdsToNames } from "@/utils/genre-converter";
import GenresList from "../genres-list";

interface Props {
  movies: Movie[];
}

const MovieSwiperFeatured: React.FC<Props> = ({ movies }) => {
  const theme = useTheme();
  const [selectedMovie, setSelectedMovie] = useState<Movie>(movies[0]);

  const handleSelectMovie = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const isMobile = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box position="relative" marginTop="5rem" height={620}>
      <Box>
        <Image
          src={
            "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces" +
            selectedMovie.backdrop_path
          }
          alt={selectedMovie.title}
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
            height: "100%",
            background: (theme) =>
              `linear-gradient(to left, transparent -40%, ${theme.palette.background.paper} 105%)`,
          }}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: { xs: "60%", md: "25%" },
          left: "3%",
          width: { xs: "95%", md: "40%" },
          height: "100px",
          px: 2,
        }}
      >
        <Typography
          sx={{ fontSize: "2.5rem", fontWeight: "bold" }}
          className="truncate-2-4"
          component="h1"
        >
          {selectedMovie.title}
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          gap={1}
          mt={1}
          whiteSpace="nowrap"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <StarRateRoundedIcon sx={{ color: "warning.light", mb: 0.3 }} />
          <Typography fontWeight="bold">
            {selectedMovie.vote_average.toFixed(1)}
          </Typography>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderRightWidth: "2px", bgcolor: "gray" }}
          />
          <Typography sx={{ opacity: 1, fontWeight: "bold" }}>
            {selectedMovie.release_date.slice(0, 4)}
          </Typography>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderRightWidth: "2px", bgcolor: "gray" }}
          />
          <GenresList
            genres={convertMovieGenreIdsToNames(selectedMovie.genre_ids)}
          />
        </Stack>
        {isMobile && (
          <Typography marginTop={1} className="truncate-2-4">
            {selectedMovie.overview}
          </Typography>
        )}
        {/* <Stack
          direction="row"
          alignItems="center"
          gap={2}
          mt={2}
          width="100%"
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
            <BookmarkBorderIcon style={{ marginRight: "8px" }} /> Add Watchlist
          </Button>
        </Stack> */}
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: { xs: "10%", md: "25%" },
          left: { xs: "3%", md: "50%" },
          width: { xs: "95%", md: "50%" },
          px: 2,
        }}
      >
        <Swiper
          className="swiper-just-release-navigation"
          spaceBetween={15}
          navigation={{
            enabled: true,
            nextEl: ".XlNextElSwiper",
            prevEl: ".XlPrevElSwiper",
          }}
          modules={[Autoplay, Navigation]}
          grabCursor={true}
          breakpoints={{
            320: {
              slidesPerView: 1.25,
              spaceBetween: 20,
            },
            350: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            470: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            840: {
              slidesPerView: 3.5,
              spaceBetween: 20,
            },
            900: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1100: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
            1250: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1450: {
              slidesPerView: 3.5,
              spaceBetween: 10,
            },
            1750: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
        >
          {movies?.map((movie: Movie) => {
            return (
              <SwiperSlide
                key={movie.id}
                style={{ width: "100%" }}
                onClick={() => handleSelectMovie(movie)}
              >
                <Box
                  width="95%"
                  height={300}
                  position="relative"
                  sx={{ cursor: "pointer" }}
                  borderRadius={5}
                  border={(theme) =>
                    selectedMovie.id === movie.id
                      ? `3px solid ${theme.palette.primary.main}`
                      : "none"
                  }
                >
                  <Image
                    src={
                      "https://www.themoviedb.org/t/p/w500/" + movie.poster_path
                    }
                    alt={movie.title}
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
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "35%",
                      borderBottomLeftRadius: "15px",
                      borderBottomRightRadius: "15px",
                      background: (theme) =>
                        `linear-gradient(to bottom, transparent 0%, ${theme.palette.background.paper} 20%)`,
                    }}
                  />
                  <MovieCardDetail
                    title={movie.title}
                    rating={movie.vote_average}
                    genres={movie.genre_ids}
                    isMovie={false}
                  />
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </Box>
  );
};

export default MovieSwiperFeatured;
