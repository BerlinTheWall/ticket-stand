import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { Fragment } from "react";
// core version + navigation, pagination modules:
import { Autoplay, Navigation, Pagination } from "swiper/modules";
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
  ,
  { id: 2, name: "v", position: 1, iconPosition: "right" },
  { id: 3, name: "d", position: 1, iconPosition: "right" },

  { id: 4, name: "s", position: 1, iconPosition: "right" },
  { id: 5, name: "e", position: 1, iconPosition: "right" },
  { id: 6, name: "kooni", position: 1, iconPosition: "right" },
  { id: 7, name: "kooni", position: 1, iconPosition: "right" },
];

const SwiperBanner: React.FC = () => {
  return (
    <Box sx={{ paddingBottom: 5 }}>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        modules={[Autoplay]}
        slidesPerView={1}
      >
        {blastTeam.map((e) => {
          return (
            <SwiperSlide key={e?.id} style={{ width: "100%" }}>
              <Box width="100%" bgcolor={"red"}>
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
                  ></Image>
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
