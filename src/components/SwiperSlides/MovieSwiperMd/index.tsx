import { Box, Typography } from "@mui/material";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCardDetail from "../MovieCardDetail";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import { Movie } from "@/types/movie";
import NextPrevEl from "../NextPrevButton";

interface Props {
  title: string;
  movies: Movie[];
}

const MovieSwiperMd: React.FC<Props> = ({ title, movies }) => {
  return (
    <Box sx={{ paddingX: { sm: 5 } }}>
      <Typography
        component="h1"
        fontSize={24}
        fontWeight="bold"
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
          className="mdNextElSwiper"
          sx={{ right: 0 }}
          Icon={<ChevronRightRoundedIcon color="inherit" />}
        />
        <NextPrevEl
          className="mdPrevElSwiper"
          sx={{ left: 0 }}
          Icon={<ChevronLeftRoundedIcon color="inherit" />}
        />

        <Swiper
          className="swiper-just-release-navigation"
          spaceBetween={15}
          navigation={{
            enabled: true,
            nextEl: ".mdNextElSwiper",
            prevEl: ".mdPrevElSwiper",
          }}
          modules={[Autoplay, Navigation]}
          grabCursor={true}
          breakpoints={{
            320: {
              slidesPerView: 1.25,
              spaceBetween: 20,
            },
            400: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            650: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            950: {
              slidesPerView: 3.5,
              spaceBetween: 10,
            },
            1000: {
              slidesPerView: 3.5,
              spaceBetween: 10,
            },
            1250: {
              slidesPerView: 4.5,
              spaceBetween: 10,
            },
            1750: {
              slidesPerView: 5.5,
              spaceBetween: 20,
            },
          }}
        >
          {movies?.map((movie: Movie) => {
            return (
              <SwiperSlide key={movie?.id} style={{ width: "100%" }}>
                <Box width="100%" height={250} position="relative">
                  <Image
                    src={
                      "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces" +
                      movie.backdrop_path
                    }
                    alt={movie.original_title}
                    width={1000}
                    height={100}
                    style={{
                      width: "100%",
                      height: "70%",
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
                      height: "30%",
                      borderBottomLeftRadius: "15px",
                      borderBottomRightRadius: "15px",
                      background:
                        "linear-gradient(to bottom, transparent 0%, #000 50%)",
                    }}
                  ></Box>
                  <MovieCardDetail
                    isMd
                    title={movie.original_title}
                    rating={movie.vote_average}
                    genres={movie.genre_ids}
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

export default MovieSwiperMd;
