import * as React from "react";
import { useEffect } from "react";
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

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_API_URL);
  const getMovies = async () => {
    try {
      const res = await simpleAxiosApi({
        url: "/movie/popular?language=en-US&page=1",
      });
      console.log(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        // maxWidth: "lg",
        // mx: "auto",
      }}
    >
      <SwiperBanner />
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
