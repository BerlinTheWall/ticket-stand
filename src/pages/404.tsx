import MainLayout from "@/layout/main-layout";
import Images from "@/utils/image-helper";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import type { GetStaticProps, NextPage } from "next";

const NotFound: NextPage = () => {
  const isTablet = useMediaQuery("(min-width:600px)");
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <MainLayout>
      <Box
        sx={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: { xs: 0, md: "12%" },
          mx: { xs: 5, md: 12, lg: 30 },
        }}
      >
        <Typography
          component={"h1"}
          sx={{ fontSize: 36, textAlign: "justify" }}
        >
          Oops! 404 Error
        </Typography>
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="center"
          alignItems="center"
          gap={5}
        >
          <Image
            src={Images.Shrek404}
            alt={"Shrek 404"}
            layout="raw"
            style={{
              width: isMobile ? "80%" : isTablet ? "60%" : "55%",
              height: "100%",
              objectFit: "cover",
              backgroundPosition: "center center",
              borderRadius: "12px",
              marginTop: 16,
            }}
          />
          <Typography
            component={"h2"}
            sx={{ fontSize: 20, textAlign: "justify" }}
          >
            This page is as elusive as the Donkey trying to explain quantum
            physics to Shrek. Looks like we took a wrong turn in the script.
            Meanwhile head back to the homepage, and feel free to browse our
            other movie magic!
          </Typography>
        </Box>
      </Box>
    </MainLayout>
  );
};
export default NotFound;
