import { Box, Divider, Stack, Typography, useMediaQuery } from "@mui/material";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Movie } from "@/types/movie";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { convertMovieGenreIdsToNames } from "@/utils/genre-converter";
import GenresList from "../genres-list";

type Props = {
  movies: Movie[];
};

const SwiperBanner: React.FC<Props> = ({ movies }) => {
  const isMobile = useMediaQuery("(min-width:600px)");

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
              <Box
                width={"100%"}
                height={600}
                position={"relative"}
                bgcolor={"background.default"}
              >
                <Image
                  src={
                    "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces" +
                    movie.backdrop_path
                  }
                  alt={movie.title}
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
                    width: { xs: "100%", sm: "55%", md: "50%", xl: "30%" },
                    left: { xs: 0, sm: 50 },
                    px: { xs: "10px", sm: "20px" },
                    py: { xs: "10px", sm: "10px" },
                    pb: { sm: "20px" },
                    borderRadius: { sm: 2, xs: 0 },
                    bgcolor: (theme) => `${theme.palette.background.paper}d6`,
                    position: "absolute",
                    bottom: 70,
                  }}
                  component="div"
                >
                  <Typography component="h2" fontWeight="bold" fontSize={34}>
                    {movie.title}
                  </Typography>
                  <Stack direction="row" alignItems="center" gap={1} mt={1}>
                    <StarRateRoundedIcon
                      sx={{ color: "warning.light", mb: 0.3 }}
                    />
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
                    <GenresList
                      genres={convertMovieGenreIdsToNames(movie.genre_ids)}
                    />
                  </Stack>
                  {isMobile && (
                    <Typography sx={{ mt: 1 }} className="truncate-2-4">
                      {movie.overview}
                    </Typography>
                  )}
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "15%",
                    background: (theme) =>
                      `linear-gradient(to bottom, transparent 0%, ${theme.palette.background.paper} 100%)`,
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
