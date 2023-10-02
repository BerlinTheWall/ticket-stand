import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
// core version + navigation,  modules:
import { Autoplay, Navigation } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css/navigation";
import Image from "next/image";
import Images from "@/utils/imageHelper";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCardDetail from "../MovieCardDetail";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import { Movie } from "@/types/movie";
import NextPrevEl from "../NextPrevButton";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import GenresList from "../GenresList";
import { convertMovieGenreIdsToNames } from "@/helper/genreConverter";

interface Props {
  title: string;
  movies: Movie[];
}

const MovieSwiperXl: React.FC<Props> = ({ title, movies }) => {
  return (
    <Box sx={{ paddingX: { sm: 5 } }}>
      <Typography
        component="h1"
        fontSize={24}
        fontWeight={"bold"}
        my={3}
        paddingLeft={2}
      >
        {title}
      </Typography>
      <Box
        sx={{
          position: "relative",
          px: 2,
        }}
      >
        <NextPrevEl
          className="XlNextElSwiper"
          sx={{ right: 0 }}
          Icon={<ChevronRightRoundedIcon color="inherit" />}
        />
        <NextPrevEl
          className="XlPrevElSwiper"
          sx={{ left: 0 }}
          Icon={<ChevronLeftRoundedIcon color="inherit" />}
        />

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
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            400: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            500: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            650: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            800: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            950: {
              slidesPerView: 4.5,
              spaceBetween: 10,
            },
            1050: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            1200: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
            1450: {
              slidesPerView: 7.5,
              spaceBetween: 10,
            },
            1750: {
              slidesPerView: 8.5,
              spaceBetween: 10,
            },
          }}
        >
          {movies?.map((movie: Movie) => {
            return (
              <SwiperSlide key={movie?.id} style={{ width: "100%" }}>
                <Box width={"100%"} height={300} position={"relative"}>
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
                  <Box
                    sx={{
                      width: "100%",
                      px: { xs: "6px", sm: "6px" },
                    }}
                    bottom={12}
                    position={"absolute"}
                  >
                    <Typography
                      sx={{ fontWeight: "bold", fontSize: "18px" }}
                      component="h3"
                    >
                      {movie.original_title}
                    </Typography>
                    <GenresList
                      genres={convertMovieGenreIdsToNames(movie.genre_ids)}
                    />
                  </Box>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </Box>
  );
};

export default MovieSwiperXl;