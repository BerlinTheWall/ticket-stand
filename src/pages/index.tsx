import * as React from "react";
import Box from "@mui/material/Box";
import MainLayout from "@/layout/MainLayout";
import MovieSwiperXl from "@/components/SwiperSlides/MovieSwiperXl";
import { GetServerSideProps } from "next";
import { getPopularMovies } from "@/api/movies";
import { Movie } from "@/types/movie";
import MovieSwiperMd from "@/components/SwiperSlides/MovieSwiperMd";
import SwiperBanner from "@/components/SwiperSlides/SwiperBanner";
import MovieSwiperSm from "@/components/SwiperSlides/MovieSwiperSm";
import MovieSwiperFeatured from "@/components/SwiperSlides/MovieSwiperFeatured";
import { simpleAxiosApi } from "@/api/newApi";
import { useEffect } from "react";

interface Props {
  movies: Movie[];
}
export default function Home({ movies }: Props) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
      }}
    >
      <SwiperBanner movies={movies} />
      <MovieSwiperXl title="Just Release" movies={movies} />
      <MovieSwiperSm title="Movies" movies={movies} />
      <MovieSwiperFeatured movies={movies} />
      <MovieSwiperMd title="Movies" movies={movies} />
    </Box>
  );
}

Home.PageLayout = MainLayout;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: movies } = await getPopularMovies({ page: 1 });
  // console.log(movies);
  return {
    props: {
      movies: movies.results,
    },
  };
};
