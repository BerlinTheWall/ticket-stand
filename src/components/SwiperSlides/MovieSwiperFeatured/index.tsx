import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCardDetail from "../MovieCardDetail";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import { Movie } from "@/types/movie";
import NextPrevEl from "../NextPrevButton";
import { useState } from "react";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";

interface Props {
  movies: Movie[];
}

const MovieSwiperFeatured: React.FC<Props> = ({ movies }) => {
  const [selectedMovie, setSelectedMovie] = useState<Movie>(movies[0]);

  const handleSelectMovie = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  return (
    <Box position="relative" marginTop="5rem">
      <Box>
        <Image
          src={
            "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces" +
            selectedMovie.backdrop_path
          }
          alt={selectedMovie.original_title}
          width={10000}
          height={100}
          priority={true}
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
        ></Box>
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
        ></Box>
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
          component="h1"
        >
          {selectedMovie.original_title}
        </Typography>
        <Stack
          direction={"row"}
          alignItems={"center"}
          gap={1}
          mt={1}
          whiteSpace={"nowrap"}
        >
          <StarRateRoundedIcon sx={{ color: "#f7cf4b", mb: 0.3 }} />
          <Typography fontWeight={"bold"}>
            {selectedMovie.vote_average}
          </Typography>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderRightWidth: "2px", bgcolor: "gray" }}
          ></Divider>
          <Typography fontWeight={"bold"} sx={{ opacity: 1 }}>
            {selectedMovie.release_date.slice(0, 4)}
          </Typography>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderRightWidth: "2px", bgcolor: "gray" }}
          ></Divider>
          <Stack
            direction={"row"}
            alignItems={"center"}
            gap={1}
            sx={{ opacity: 0.7 }}
          >
            <LocalMoviesIcon sx={{ px: 0 }} />
            <Box
              style={{
                listStyleType: "disc",
                display: "flex",
                gap: 20,
              }}
              component="ul"
            >
              <Typography
                component="li"
                style={{ listStyleType: "none", fontSize: "0.8rem" }}
              >
                Action
              </Typography>
              <Typography component="li" style={{ fontSize: "0.8rem" }}>
                Movie
              </Typography>
            </Box>
          </Stack>
        </Stack>
        <Typography marginTop={1} className="truncate">
          {selectedMovie.overview}
        </Typography>
        <Stack
          direction={"row"}
          alignItems={"center"}
          gap={2}
          mt={2}
          width="100%"
          whiteSpace={"nowrap"}
        >
          <Button
            variant="contained"
            fullWidth
            color="primary"
            sx={{
              fontSize: { xs: "0.65rem", sm: "0.8rem" },
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
            sx={{ fontSize: { xs: "0.65rem", sm: "0.8rem" } }}
          >
            <BookmarkBorderIcon style={{ marginRight: "8px" }} /> Add Watchlist
          </Button>
        </Stack>
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
                key={movie?.id}
                style={{ width: "100%" }}
                onClick={() => handleSelectMovie(movie)}
              >
                <Box
                  width={"100%"}
                  height={300}
                  position="relative"
                  sx={{ cursor: "pointer" }}
                >
                  <Image
                    src={
                      "https://www.themoviedb.org/t/p/w220_and_h330_face" +
                      movie.poster_path
                    }
                    alt={movie.original_title}
                    width={100}
                    height={100}
                    style={{
                      width: "100%",
                      height: "90%",
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
                      background:
                        "linear-gradient(to bottom, transparent 0%, #000 20%)",
                    }}
                  ></Box>
                  <MovieCardDetail
                    title={movie.original_title}
                    rating={movie.vote_average}
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
