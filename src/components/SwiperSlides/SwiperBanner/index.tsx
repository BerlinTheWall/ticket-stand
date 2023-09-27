import { Box, Button, Stack, Typography } from "@mui/material";
// core version +  pagination modules:
import { Autoplay, Pagination } from "swiper/modules";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
// import Swiper and modules styles
import "swiper/css/pagination";
import Image from "next/image";
import Images from "@/utils/imageHelper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Movie } from "@/types/movie";

type Props = {
  movies: Movie[];
};

const SwiperBanner: React.FC<Props> = ({ movies }) => {
  const firstFiveMovies = movies.slice(0, 5);

  // console.log(movies);
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
                    width: { xs: "100%", sm: "55%", md: "45%", xl: "25%" },
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
                  <Typography
                    sx={{ fontWeight: "bold", fontSize: "36px" }}
                    component="h2"
                  >
                    {movie.original_title}
                  </Typography>
                  <Box
                    style={{
                      listStyleType: "disc",
                      display: "flex",
                      gap: 20,
                      fontSize: "14px",
                    }}
                    component="ul"
                  >
                    <Typography
                      component="li"
                      style={{ listStyleType: "none" }}
                    >
                      2h40m {movie.vote_average}
                    </Typography>
                    <Typography component="li">{movie.release_date}</Typography>
                    <Typography component="li">Fantasy</Typography>
                    <Typography component="li">Actions</Typography>
                  </Box>
                  <Typography marginTop={1}>{movie.overview}</Typography>
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
