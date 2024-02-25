import { Box, Typography, useTheme } from "@mui/material";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCardDetail from "../movie-card-detail";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import { Movie } from "@/types/movie";
import NextPrevEl from "../next-prev-button";
import Link from "next/link";
import { SINGLE_MOVIE_PAGE, SINGLE_TVSERIES_PAGE } from "@/constants/urls";
import { TVSeries } from "@/types/tv-series";
import { isMovie } from "@/utils/check-is-movie";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { W1920_IMAGE_URL } from "@/constants/image-urls";

interface Props {
  title: string;
  items: (Movie | TVSeries)[];
  href?: string;
}

const MovieSwiperMd: React.FC<Props> = ({ title, items, href }) => {
  const theme = useTheme();
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
          {items?.map((item: Movie | TVSeries) => {
            return (
              <SwiperSlide key={item.id} style={{ width: "100%" }}>
                <Link
                  href={
                    isMovie(item)
                      ? `${SINGLE_MOVIE_PAGE}/${item.id}`
                      : `${SINGLE_TVSERIES_PAGE}/${item.id}`
                  }
                >
                  <Box width="100%" height={250} position="relative">
                    <Image
                      src={W1920_IMAGE_URL + item.backdrop_path}
                      alt={isMovie(item) ? item.title : item.name}
                      width={1000}
                      height={100}
                      style={{
                        width: "100%",
                        height: "70%",
                        objectFit: "cover",
                        backgroundPosition: "center center",
                        borderTopLeftRadius: "15px",
                        borderTopRightRadius: "15px",
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
                        background: (theme) =>
                          `linear-gradient(to bottom, transparent 0%, ${theme.palette.background.paper} 50%)`,
                      }}
                    />
                    <MovieCardDetail
                      isMovie={isMovie(item)}
                      isMd
                      title={isMovie(item) ? item.title : item.name}
                      rating={item.vote_average}
                      genres={item.genre_ids}
                    />
                  </Box>
                </Link>
              </SwiperSlide>
            );
          })}
          {href && (
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
          )}
        </Swiper>
      </Box>
    </Box>
  );
};

export default MovieSwiperMd;
