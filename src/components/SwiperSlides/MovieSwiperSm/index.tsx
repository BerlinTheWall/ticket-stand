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
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";

interface Props {
  title: string;
  movies: Movie[];
}

const MovieSwiperSm: React.FC<Props> = ({ title, movies }) => {
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
          className="SmNextElSwiper"
          sx={{ right: 0 }}
          Icon={<ChevronRightRoundedIcon color="inherit" />}
        />
        <NextPrevEl
          className="SmPrevElSwiper"
          sx={{ left: 0 }}
          Icon={<ChevronLeftRoundedIcon color="inherit" />}
        />

        <Swiper
          className="swiper-just-release-navigation"
          spaceBetween={15}
          navigation={{
            enabled: true,
            nextEl: ".SmNextElSwiper",
            prevEl: ".SmPrevElSwiper",
          }}
          modules={[Autoplay, Navigation]}
          grabCursor={true}
          style={{ position: "relative" }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            400: {
              slidesPerView: 1.25,
              spaceBetween: 20,
            },
            500: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            700: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            950: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1250: {
              slidesPerView: 3.5,
              spaceBetween: 10,
            },
            1400: {
              slidesPerView: 4.5,
              spaceBetween: 10,
            },
          }}
        >
          {movies?.map((movie: Movie, index) => {
            return (
              <>
                <SwiperSlide
                  key={movie?.id}
                  style={{ width: "100%", display: "flex" }}
                >
                  <Typography
                    top={-1.5}
                    left={0}
                    textAlign={"center"}
                    width={"50px"}
                    height={"41px"}
                    fontWeight="bold"
                    fontSize={27}
                    component="h2"
                    bgcolor="#00925D"
                    position={"absolute"}
                    sx={{ borderRadius: "15px 0px" }}
                    zIndex={999}
                  >
                    {++index}
                  </Typography>
                  <Stack
                    direction="row"
                    justifyItems="center"
                    width="100%"
                    height={175}
                    position="relative"
                    gap={2}
                    bgcolor="#000"
                    borderRadius={4}
                    px={0}
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
                        width: "35%",
                        height: "100%",
                        objectFit: "cover",
                        backgroundPosition: "center center",
                        borderRadius: "15px",
                      }}
                    />
                    <Stack direction={"column"} justifyContent={"space-evenly"}>
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          fontSize: "12px",
                          border: "1px solid #FFF",
                          opacity: "0.7",
                          borderRadius: "7px",
                          width: "55px",
                          px: 1,
                          display: !movie.adult ? "block" : "none",
                        }}
                        component="h3"
                      >
                        PG-13
                      </Typography>
                      <Typography
                        sx={{ fontWeight: "bold", fontSize: "1rem" }}
                        component="h3"
                      >
                        {movie.original_title}
                      </Typography>
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
                            style={{
                              listStyleType: "none",
                              fontSize: "0.8rem",
                            }}
                          >
                            Action
                          </Typography>
                          <Typography
                            component="li"
                            style={{ fontSize: "0.8rem" }}
                          >
                            Movie
                          </Typography>
                        </Box>
                      </Stack>

                      <Stack
                        direction={"row"}
                        alignItems={"center"}
                        gap={1}
                        mt={1}
                        whiteSpace={"nowrap"}
                      >
                        <StarRateRoundedIcon
                          sx={{ color: "#f7cf4b", mb: 0.3 }}
                        />
                        <Typography fontWeight={"bold"}>
                          {movie.vote_average}
                        </Typography>
                        <Divider
                          orientation="vertical"
                          flexItem
                          sx={{ borderRightWidth: "2px", color: "gray" }}
                        ></Divider>
                        <Typography fontWeight={"bold"}>
                          {movie.release_date.slice(0, 4)}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </Box>
    </Box>
  );
};

export default MovieSwiperSm;
