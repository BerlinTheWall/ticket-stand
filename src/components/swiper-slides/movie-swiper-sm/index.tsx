import { Box, Divider, Stack, Typography, useTheme } from "@mui/material";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import { Movie } from "@/types/movie";
import NextPrevEl from "../next-prev-button";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import GenresList from "../genres-list";
import { convertMovieGenreIdsToNames } from "@/utils/genre-converter";
import { useEffect, useState } from "react";
import Link from "next/link";
import { SINGLE_MOVIE_PAGE, SINGLE_TVSERIES_PAGE } from "@/constants/urls";
import { TVSeries } from "@/types/tv-series";
import { isMovie } from "@/utils/check-is-movie";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { W500_IMAGE_URL } from "@/constants/image-urls";

interface Props {
  title?: string;
  items: (Movie | TVSeries)[];
  href?: string;
}

const MovieSwiperSm: React.FC<Props> = ({ title, items, href }) => {
  const theme = useTheme();
  const [updatedMedias, setUpdatedMedias] = useState(items);
  const [page, setPages] = useState<number>(1);

  useEffect(() => {
    setUpdatedMedias(items);
  }, [items]);

  // const handleShow = async () => {
  //   setPages(page + 1);
  //   const movies = await getPopularMovies({
  //     page: page + 1,
  //   });
  //   setUpdatedMedias((prevMovies) => [...prevMovies, ...movies.results]);
  // };

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
          className={"SmNextElSwiper"}
          sx={{ right: 0 }}
          Icon={<ChevronRightRoundedIcon color="inherit" />}
        />
        <NextPrevEl
          className={"SmPrevElSwiper"}
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
          // onReachEnd={handleShow}
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
          {updatedMedias?.map((item: Movie | TVSeries, index) => {
            return (
              <SwiperSlide
                key={item.id}
                style={{ width: "100%", display: "flex" }}
              >
                <Link
                  href={
                    isMovie(item)
                      ? `${SINGLE_MOVIE_PAGE}/${item.id}`
                      : `${SINGLE_TVSERIES_PAGE}/${item.id}`
                  }
                  style={{ width: "100%" }}
                >
                  <Typography
                    top={-1.5}
                    left={0}
                    textAlign="center"
                    width="50px"
                    height="41px"
                    fontWeight="bold"
                    fontSize={27}
                    component="h2"
                    bgcolor="primary.main"
                    position="absolute"
                    borderRadius="15px 0px"
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
                    bgcolor="background.paper"
                    borderRadius={4}
                    px={0}
                  >
                    <Image
                      src={W500_IMAGE_URL + item.poster_path}
                      alt={isMovie(item) ? item.title : item.name}
                      width={100}
                      height={100}
                      style={{
                        width: "35%",
                        height: "100%",
                        objectFit: "cover",
                        backgroundPosition: "center center",
                        borderTopLeftRadius: "15px",
                        borderBottomLeftRadius: "15px",
                      }}
                    />
                    <Stack direction={"column"} justifyContent={"space-evenly"}>
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          fontSize: "12px",
                          border: "1px solid",
                          opacity: "0.7",
                          borderRadius: "7px",
                          width: "55px",
                          px: 1,
                          display: !item.adult ? "block" : "none",
                        }}
                        component="h3"
                      >
                        PG-13
                      </Typography>
                      <Typography
                        sx={{ fontWeight: "bold", fontSize: "1rem" }}
                        component="h3"
                      >
                        {isMovie(item) ? item.title : item.name}
                      </Typography>
                      <GenresList
                        genres={convertMovieGenreIdsToNames(item.genre_ids)}
                      />
                      <Stack
                        direction={"row"}
                        alignItems={"center"}
                        gap={1}
                        mt={1}
                        whiteSpace={"nowrap"}
                      >
                        <StarRateRoundedIcon
                          sx={{ color: "warning.light", mb: 0.3 }}
                        />
                        <Typography fontWeight={"bold"}>
                          {item.vote_average.toFixed(1)}
                        </Typography>
                        {isMovie(item) && (
                          <>
                            <Divider
                              orientation="vertical"
                              flexItem
                              sx={{ borderRightWidth: "2px", color: "gray" }}
                            />
                            <Typography fontWeight={"bold"}>
                              {item.release_date.slice(0, 4)}
                            </Typography>
                          </>
                        )}
                      </Stack>
                    </Stack>
                  </Stack>
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

export default MovieSwiperSm;
