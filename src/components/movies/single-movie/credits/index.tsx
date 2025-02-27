import NextPrevEl from "@/components/swiper-slides/next-prev-button";
import { Box, Stack, Typography } from "@mui/material";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Cast } from "@/types/credits";
import Image from "next/image";
import { W276_IMAGE_URL } from "@/constants/image-urls";

interface Props {
  casts: Cast[];
}

const Credits: React.FC<Props> = ({ casts }) => {
  return (
    <Box sx={{ paddingX: { sm: 5 } }}>
      <Typography
        component="h1"
        fontSize={24}
        fontWeight={"bold"}
        my={3}
        paddingLeft={2}
      >
        Top Cast
      </Typography>
      <Box
        sx={{
          position: "relative",
          px: 2,
        }}
      >
        <NextPrevEl
          className="CreditsNextElSwiper"
          sx={{ right: 0 }}
          Icon={<ChevronRightRoundedIcon color="inherit" />}
        />
        <NextPrevEl
          className="CreditsPrevElSwiper"
          sx={{ left: 0 }}
          Icon={<ChevronLeftRoundedIcon color="inherit" />}
        />

        <Swiper
          className="swiper-just-release-navigation"
          spaceBetween={15}
          navigation={{
            enabled: true,
            nextEl: ".CreditsNextElSwiper",
            prevEl: ".CreditsPrevElSwiper",
          }}
          modules={[Autoplay, Navigation]}
          grabCursor={true}
          style={{ position: "relative" }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            400: {
              slidesPerView: 1.25,
              spaceBetween: 20,
            },
            500: {
              slidesPerView: 1.7,
              spaceBetween: 20,
            },
            700: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            800: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1250: {
              slidesPerView: 4.5,
              spaceBetween: 10,
            },
            1400: {
              slidesPerView: 5.5,
              spaceBetween: 10,
            },
          }}
        >
          {casts?.map((cast: Cast, index: number) => {
            return (
              <SwiperSlide
                key={cast?.credit_id}
                style={{
                  width: "auto",
                  display: "flex",
                  paddingRight: "20px",
                  paddingLeft: "20px",
                }}
              >
                <Stack direction="row" alignItems="start" gap={2}>
                  <Box sx={{ minWidth: 80, width: 80 }}>
                    <Image
                      src={W276_IMAGE_URL + cast.profile_path}
                      alt={cast.name}
                      width={100}
                      height={80}
                      style={{
                        width: "100%",
                        objectFit: "cover",
                        backgroundPosition: "center center",
                        borderRadius: 200,
                      }}
                    />
                  </Box>
                  <Stack direction={"column"}>
                    <Typography sx={{ fontWeight: "bold" }}>
                      {cast.name}
                    </Typography>
                    <Typography sx={{ fontSize: 14, color: "grey" }}>
                      {!!cast.character ? cast.character : "Unknown role"}
                    </Typography>
                  </Stack>
                </Stack>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </Box>
  );
};

export default Credits;
