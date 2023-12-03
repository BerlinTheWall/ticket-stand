import NextPrevEl from "@/components/swiper-slides/next-prev-button";
import { Box, Stack, Typography } from "@mui/material";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Cast } from "@/types/credits";
import Image from "next/image";

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
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            400: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            500: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            700: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            950: {
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
              <>
                <SwiperSlide
                  key={cast?.credit_id}
                  style={{
                    width: "auto",
                    display: "flex",
                    paddingRight: "20px",
                    paddingLeft: "20px",
                  }}
                >
                  <Stack direction="row" alignItems="center" gap={2}>
                    <Box sx={{ width: 80 }}>
                      <Image
                        src={
                          "https://www.themoviedb.org/t/p/w276_and_h350_face" +
                          cast.profile_path
                        }
                        alt={cast.name}
                        width={10000}
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
                        {cast.character}
                      </Typography>
                    </Stack>
                  </Stack>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </Box>
    </Box>
  );
};

export default Credits;
