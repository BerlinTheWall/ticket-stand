import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
// core version + navigation,  modules:
import { Autoplay, Navigation } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css/navigation";
import Image from "next/image";
import Images from "@/utils/imageHelper";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCardDetail from "./MovieCardDetail";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";

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
      <Box
        sx={{
          position: "relative",
          px: 2,
        }}
      >
        <NextPrevEl
          className="nextElSwiper"
          sx={{ right: 0 }}
          Icon={<ChevronRightRoundedIcon color="inherit" />}
        />
        <NextPrevEl
          className="prevElSwiper"
          sx={{ left: 0 }}
          Icon={<ChevronLeftRoundedIcon color="inherit" />}
        />

        <Swiper
          className="swiper-just-release-navigation"
          spaceBetween={15}
          navigation={{
            enabled: true,
            nextEl: ".nextElSwiper",
            prevEl: ".prevElSwiper",
          }}
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
    </Box>
  );
};

const NextPrevEl = ({
  className,
  Icon,
  sx,
}: {
  className: string;
  Icon: any;
  sx: any;
}) => {
  return (
    <Box
      sx={{
        px: 1,
        position: "absolute",
        top: 0,
        bottom: 0,
        color: "white",
        zIndex: 10,
        boxShadow: (theme) =>
          `inset -38px 0px 67px 5px ${theme.palette.background.default}`,
        display: "flex",
        alignItems: "center",
        // "& .swiper-button-disabled": {
        //   display: "none",
        // },
        ...sx,
      }}
    >
      <IconButton
        className={className}
        sx={{
          bgcolor: "background.paper",
          color: "text.primary",
        }}
      >
        {Icon}
      </IconButton>
    </Box>
  );
};

export default SwiperJustRelease;
