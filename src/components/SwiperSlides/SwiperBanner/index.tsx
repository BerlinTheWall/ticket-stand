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
import GenresList from "../GenresList";

type Props = {
  movies: Movie[];
};

const SwiperBanner: React.FC<Props> = ({ movies }) => {
  const firstFiveMovies = movies.slice(0, 5);

  return (
    <Box sx={{ paddingBottom: 5 }}>
      <Swiper
        className="swiper-banner-panigation"
        spaceBetween={10}
        autoplay={{
          delay: 500000,
          disableOnInteraction: false,
        }}
        noSwiping
        allowTouchMove={false}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={true}
      >
        {firstFiveMovies?.map((movie: Movie) => {
          // const genres = convertMovieGenreIdsToNames(movie.genre_ids);
          return (
            <SwiperSlide key={movie?.id} style={{ width: "100%" }}>
              <Box width={"100%"} height={600} position={"relative"}>
                <Image
                  src={
                    "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces" +
                    movie.backdrop_path
                  }
                  alt={movie.original_title}
                  width={10000}
                  height={100}
                  priority={true}
                  className="swiper-banner-image"
                  style={{
                    width: "100%",
                    objectFit: "cover",
                    backgroundPosition: "center center",
                  }}
                />
                <Box
                  sx={{
                    width: { xs: "100%", sm: "55%", md: "50%", xl: "25%" },
                    left: { xs: 0, sm: 50 },
                    px: { xs: "10px", sm: "20px" },
                    py: { xs: "10px", sm: "10px" },
                    borderRadius: 2,
                    bgcolor: "rgba(3,3,3,0.7)",
                  }}
                  bottom={70}
                  component={"div"}
                  data-swiper-parallax="-300"
                  data-swiper-parallax-duration="600"
                  data-swiper-parallax-opacity="0.5"
                  position={"absolute"}
                >
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    gap={1}
                    mt={1}
                    // sx={{ whiteSpace: "pre-line" }}
                  >
                    <StarRateRoundedIcon sx={{ color: "#f7cf4b", mb: 0.3 }} />
                    <Typography fontWeight={"bold"}>
                      {movie.vote_average}
                    </Typography>
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{ borderRightWidth: "2px", bgcolor: "gray" }}
                    ></Divider>
                    <Typography fontWeight={"bold"} sx={{ opacity: 1 }}>
                      {movie.release_date.slice(0, 4)}
                    </Typography>
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{ borderRightWidth: "2px", bgcolor: "gray" }}
                    ></Divider>

                    <GenresList
                      genres={convertMovieGenreIdsToNames(movie.genre_ids)}
                    />
                  </Stack>
                  <Typography marginTop={1} className="truncate">
                    {movie.overview}
                  </Typography>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    gap={2}
                    mt={2}
                    sx={{ width: { md: "85%", lg: "85%" } }}
                    whiteSpace={"nowrap"}
                  >
                    <Button
                      variant="contained"
                      fullWidth
                      color="primary"
                      onClick={() => {}}
                    >
                      <PlayCircleFilledIcon style={{ marginRight: "8px" }} />
                      Watch Trailer
                    </Button>
                    <Button variant="outlined" fullWidth color="secondary">
                      <BookmarkBorderIcon style={{ marginRight: "8px" }} /> Add
                      Watchlist
                    </Button>
                  </Stack>
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "15%",
                    background:
                      "linear-gradient(to bottom, transparent 0%, #0D0C0F 100%)",
                  }}
                ></Box>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default SwiperBanner;