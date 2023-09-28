import * as React from "react";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../Link";
import ProTip from "../ProTip";
import Copyright from "../Copyright";
import MainLayout from "@/layout/MainLayout";
import axios from "axios";
import { axiosApi, simpleAxiosApi } from "@/api/newApi";
import MovieSwiperXl from "@/components/SwiperSlides/MovieSwiperXl";
import { GetServerSideProps, NextPage } from "next";
import { getPopularMovies } from "@/api/movies";
import { Movie } from "@/types/movie";
import MovieSwiperMd from "@/components/SwiperSlides/MovieSwiperMd";
import SwiperBanner from "@/components/SwiperSlides/SwiperBanner";
import MovieSwiperSm from "@/components/SwiperSlides/MovieSwiperSm";
import MovieSwiperFeatured from "@/components/SwiperSlides/MovieSwiperFeatured";

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

      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <Typography variant="h4" component="h1" gutterBottom>
          Material UI - Next.js example in TypeScript
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
        <Copyright /> */}
      </Box>
    </Box>
  );
}

Home.PageLayout = MainLayout;

export const getServerSideProps: GetServerSideProps = async () => {
  const movies = await getPopularMovies({ page: 1 });
  return {
    props: {
      movies,
    },
  };
};
