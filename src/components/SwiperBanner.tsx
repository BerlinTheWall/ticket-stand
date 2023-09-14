import { Box, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { Fragment } from "react";
// core version + navigation, pagination modules:
import { Autoplay } from "swiper/modules";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Images from "@/utils/imageHelper";
import { Swiper, SwiperSlide } from "swiper/react";

const blastTeam = [
  { id: 0, name: "ab", position: 1, iconPosition: "right" },
  ,
  { id: 1, name: "b", position: 1, iconPosition: "right" },
];

const SwiperBanner: React.FC = () => {
  return (
    <Box sx={{ paddingBottom: 5 }}>
      <Swiper
        autoplay={{
          delay: 500000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        slidesPerView={1}
      >
        {blastTeam.map((e) => {
          return (
            <SwiperSlide key={e?.id} style={{ width: "100%" }}>
              <Box width={"100%"} height={600} position={"relative"}>
                <Image
                  src={Images.DemoImage}
                  alt={""}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    backgroundPosition: "center center",
                  }}
                />
                <Box
                  sx={{
                    width: { xs: "100%", sm: "50%", md: "45%", xl: "25%" },
                    left: { xs: 0, sm: 50 },
                    px: { xs: "10px", sm: "0px" },
                  }}
                  bottom={70}
                  position={"absolute"}
                >
                  <Typography
                    sx={{ fontWeight: "bold", fontSize: "36px" }}
                    component="h2"
                  >
                    Star Wars: The force Awaken
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
                      2h40m
                    </Typography>
                    <Typography component="li">2022</Typography>
                    <Typography component="li">Fantasy</Typography>
                    <Typography component="li">Actions</Typography>
                  </Box>
                  <Typography marginTop={1}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                    blanditiis atque doloribus ducimus, minus reprehenderit
                    provident molestias sed placeat qui iste ipsam nulla quis
                    alias nisi totam obcaecati facere doloremque!
                  </Typography>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    gap={2}
                    mt={2}
                    sx={{ width: { md: "75%", lg: "75%" } }}
                    whiteSpace={"nowrap"}
                  >
                    <Button
                      variant="contained"
                      fullWidth
                      color="primary"
                      onClick={() => {}}
                    >
                      <PlayCircleFilledIcon style={{ marginRight: "8px" }} />{" "}
                      Watch Trailer
                    </Button>
                    <Button variant="outlined" fullWidth color="secondary">
                      <BookmarkBorderIcon style={{ marginRight: "8px" }} /> Add
                      Watchlist
                    </Button>
                  </Stack>
                </Box>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default SwiperBanner;