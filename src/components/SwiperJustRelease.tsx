import { Box, Divider, Stack, Typography } from "@mui/material";
// core version + navigation, pagination modules:
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Images from "@/utils/imageHelper";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCardDetail from "./MovieCardDetail";

const blastTeam = [
  { id: 0, name: "ab", position: 1, iconPosition: "right" },
  { id: 1, name: "b", position: 1, iconPosition: "right" },
  { id: 1, name: "b", position: 1, iconPosition: "right" },
  { id: 1, name: "b", position: 1, iconPosition: "right" },
  { id: 1, name: "b", position: 1, iconPosition: "right" },
  { id: 1, name: "b", position: 1, iconPosition: "right" },
  { id: 1, name: "b", position: 1, iconPosition: "right" },
  { id: 1, name: "b", position: 1, iconPosition: "right" },
];

const SwiperJustRelease: React.FC = () => {
  return (
    <Box sx={{ paddingX: 5 }}>
      <Typography component="h1" fontSize={24} fontWeight={"bold"} mb={3}>
        Just Release
      </Typography>
      <Swiper
        className="swiper-just-release-navigation"
        spaceBetween={15}
        navigation={true}
        modules={[Autoplay, Navigation]}
        grabCursor={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          500: {
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
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1250: {
            slidesPerView: 4.5,
            spaceBetween: 10,
          },
          1750: {
            slidesPerView: 6.5,
            spaceBetween: 10,
          },
        }}
      >
        {blastTeam.map((e) => {
          return (
            <SwiperSlide key={e?.id} style={{ width: "100%" }}>
              <Box width={"100%"} height={350} position={"relative"}>
                <Image
                  src={Images.DemoImage}
                  alt={""}
                  style={{
                    width: "100%",
                    height: "90%",
                    objectFit: "cover",
                    backgroundPosition: "center center",
                    borderRadius: "15px",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "20%",
                    borderBottomLeftRadius: "15px",
                    borderBottomRightRadius: "15px",
                    background:
                      "linear-gradient(to bottom, transparent 0%, #000 50%)",
                  }}
                ></Box>
                <MovieCardDetail />
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default SwiperJustRelease;
