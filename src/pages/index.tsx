import * as React from "react";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../Link";
import ProTip from "../ProTip";
import Copyright from "../Copyright";
import MainLayout from "@/layout/MainLayout";
import SwiperBanner from "@/components/SwiperBanner";
import axios from "axios";
import { axiosApi, simpleAxiosApi } from "@/api/newApi";
import SwiperJustRelease from "@/components/SwiperJustRelease";
import { GetServerSideProps } from "next";
import { getPopularMovies } from "@/api/movies";

export default function Home({ movies }) {
  // const [movie, setMovies] = useState(movies);

  console.log(process.env.NEXT_PUBLIC_API_URL);
  // const getMovies = async () => {
  //   try {
  //     const res = await simpleAxiosApi({
  //       url: "/movie/popular?page=1",
  //     });
  //     const firstFiveMovies = res.data.results.slice(0, 5);
  //     // console.log(res.data.results);
  //     setMovies(firstFiveMovies);
  //   } catch (error) {}
  // };

  // useEffect(() => {
  //   getMovies();
  // }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        // maxWidth: "lg",
        // mx: "auto",
      }}
    >
      <SwiperBanner movies={movies} />
      <SwiperJustRelease />
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Material UI - Next.js example in TypeScript
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Box>
  );
}

Home.PageLayout = MainLayout;

export const getServerSideProps: GetServerSideProps = async () => {
  const movies = await getPopularMovies();
  // console.log(movies);
  return {
    props: {
      movies,
    },
  };
};
