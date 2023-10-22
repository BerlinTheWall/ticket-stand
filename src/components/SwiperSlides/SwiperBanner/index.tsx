import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Movie } from "@/types/movie";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { convertMovieGenreIdsToNames } from "@/utils/genreConverter";
import GenresList from "../GenresList";

type Props = {
  movies: Movie[];
};

const SwiperBanner: React.FC<Props> = ({ movies }) => {
  return (
    <Box sx={{ paddingBottom: 5 }}>
      <Swiper
        className="swiper-banner-panigation"
        spaceBetween={10}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        noSwiping
        allowTouchMove={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, EffectFade]}
        slidesPerView={1}
        loop={true}
        effect="fade"
      >
        {movies.slice(0, 5)?.map((movie: Movie) => {
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
                  component="div"
                  position="absolute"
                >
                  <Typography
                    fontWeight="bold"
                    sx={{ fontSize: { xs: 28, sm: 36 } }}
                  >
                    {movie.original_title}
                  </Typography>
                  <Stack direction="row" alignItems="center" gap={1} mt={1}>
                    <StarRateRoundedIcon sx={{ color: "#f7cf4b", mb: 0.3 }} />
                    <Typography fontWeight="bold">
                      {movie.vote_average}
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

                    <GenresList
                      genres={convertMovieGenreIdsToNames(movie.genre_ids)}
                    />
                  </Stack>
                  <Typography marginTop={1} className="truncate">
                    {movie.overview}
                  </Typography>
                  <Stack
                    direction="row"
                    alignItems="center"
                    gap={2}
                    mt={2}
                    sx={{ width: { md: "85%", lg: "85%" } }}
                    whiteSpace="nowrap"
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
                      <BookmarkBorderIcon style={{ marginRight: "8px" }} />
                      Add Watchlist
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
                />
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default SwiperBanner;
