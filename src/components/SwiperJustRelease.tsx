import { Box, Divider, Stack, Typography } from "@mui/material";
// core version + navigation, pagination modules:
import { Autoplay, Pagination } from "swiper/modules";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
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
  { id: 1, name: "b", position: 1, iconPosition: "right" },
  { id: 1, name: "b", position: 1, iconPosition: "right" },
  { id: 1, name: "b", position: 1, iconPosition: "right" },
  { id: 1, name: "b", position: 1, iconPosition: "right" },
];

const SwiperJustRelease: React.FC = () => {
  return (
    <Box sx={{ paddingX: 5 }}>
      <Swiper
        className="swiper-banner-panigation"
        spaceBetween={10}
        autoplay={{
          delay: 500000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        slidesPerView={4.5}
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
                <Box
                  sx={{
                    width: "100%",
                    px: { xs: "20px", sm: "16px" },
                  }}
                  bottom={12}
                  position={"absolute"}
                >
                  <Typography
                    sx={{ fontWeight: "bold", fontSize: "18px" }}
                    component="h3"
                  >
                    Star Wars
                  </Typography>

                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    gap={1}
                    mt={1}
                    whiteSpace={"nowrap"}
                  >
                    <StarRateRoundedIcon sx={{ color: "yellow" }} />
                    <Typography fontWeight={"bold"}>4.8</Typography>
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{ borderRightWidth: "2px", color: "gray" }}
                    ></Divider>
                    <Box
                      style={{
                        listStyleType: "disc",
                        display: "flex",
                        gap: 20,
                        opacity: 0.7,
                      }}
                      component="ul"
                    >
                      <Typography
                        component="li"
                        style={{ listStyleType: "none", fontSize: "14px" }}
                      >
                        Action
                      </Typography>
                      <Typography component="li" style={{ fontSize: "14px" }}>
                        Movie
                      </Typography>
                    </Box>
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

export default SwiperJustRelease;
