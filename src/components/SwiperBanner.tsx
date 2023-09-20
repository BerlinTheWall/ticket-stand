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

const blastTeam = [
  { id: 0, name: "ab", position: 1, iconPosition: "right" },
  { id: 1, name: "b", position: 1, iconPosition: "right" },
  { id: 1, name: "b", position: 1, iconPosition: "right" },
  { id: 1, name: "b", position: 1, iconPosition: "right" },
  { id: 1, name: "b", position: 1, iconPosition: "right" },
];

const SwiperBanner: React.FC = () => {
  return (
    <Box sx={{ paddingBottom: 5 }}>
      <Swiper
        className="swiper-banner-panigation"
        spaceBetween={10}
        autoplay={{
          delay: 50000,
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
                    width: { xs: "100%", sm: "55%", md: "45%", xl: "25%" },
                    left: { xs: 0, sm: 50 },
                    px: { xs: "10px", sm: "20px" },
                    py: { xs: "10px", sm: "10px" },
                    borderRadius: 2,
                    bgcolor: "rgba(3,3,3,0.8)",
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
                    sx={{ width: { md: "85%", lg: "85%" } }}
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
