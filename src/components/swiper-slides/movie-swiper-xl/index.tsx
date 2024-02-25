import { Box, Typography, useTheme } from "@mui/material";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import { Movie } from "@/types/movie";
import NextPrevEl from "../next-prev-button";
import GenresList from "../genres-list";
import { convertMovieGenreIdsToNames } from "@/utils/genre-converter";
import Link from "next/link";
import { SINGLE_MOVIE_PAGE } from "@/constants/urls";
import SeeMoreSlide from "../see-more-slide";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { W500_IMAGE_URL } from "@/constants/image-urls";

interface Props {
  title: string;
  movies: Movie[];
  href: string;
}

const MovieSwiperXl: React.FC<Props> = ({ title, movies, href }) => {
  const theme = useTheme();

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
              <SwiperSlide key={movie.id} style={{ width: "100%" }}>
                <Link href={`${SINGLE_MOVIE_PAGE}/${movie.id}`}>
                  <Box
                    width={"100%"}
                    height={300}
                    position={"relative"}
                    color="text.primary"
                  >
                    <Image
                      src={W500_IMAGE_URL + movie.poster_path}
                      alt={movie.title}
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
                        background: (theme) =>
                          `linear-gradient(to bottom, transparent 0%, ${theme.palette.background.paper} 20%)`,
                      }}
                    />
                    <Box
                      sx={{
                        width: "100%",
                        px: "8px",
                        bottom: 12,
                        position: "absolute",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          fontSize: "18px",
                        }}
                        component="h3"
                        className="truncate-2"
                      >
                        {movie.title}
                      </Typography>
                      <GenresList
                        genres={convertMovieGenreIdsToNames(movie.genre_ids)}
                      />
                    </Box>
                  </Box>
                </Link>
              </SwiperSlide>
            );
          })}
          {/* <SeeMoreSlide href={href} /> */}
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              height: "100%",
              alignSelf: "center",
            }}
          >
            <Link
              href={href}
              style={{
                width: "100%",
              }}
            >
              <Box
                width={"65%"}
                py={0.5}
                px={1}
                position={"relative"}
                color="text.primary"
                border="1px solid"
                borderColor="primary.dark"
                borderRadius={4}
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={0}
                sx={{
                  bgcolor: `${theme.palette.primary.dark}15`,
                  transition: "background-color 0.3s",
                  "&:hover": {
                    bgcolor: `${theme.palette.primary.dark}50`,
                  },
                }}
              >
                <Typography sx={{ fontSize: 16, color: "primary.dark" }}>
                  See More
                </Typography>
                <ArrowForwardIosIcon
                  sx={{ color: "primary.dark", fontSize: 18 }}
                />
              </Box>
            </Link>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
};

export default MovieSwiperXl;
