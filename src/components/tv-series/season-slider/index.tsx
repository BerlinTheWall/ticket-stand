import { Box, Divider, Stack, Typography } from "@mui/material";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import { Season } from "@/types/tv-series";
import NextPrevEl from "@/components/swiper-slides/next-prev-button";
import SeasonCardDetail from "./season-slider-detail";
import { useState } from "react";

interface Props {
  title: string;
  items: Season[];
  setSeason: (value: number) => void;
}

const SeasonSwiper: React.FC<Props> = ({ title, items, setSeason }) => {
  const [selectedSeason, setSelectedSeason] = useState<number>(
    items[0].season_number
  );
  return (
    <Box sx={{ paddingX: { sm: 5 } }}>
      <Typography
        component="h1"
        fontSize={24}
        fontWeight="bold"
        my={3}
        paddingLeft={2}
      >
        {title}
      </Typography>
      <Box
        sx={{
          position: "relative",
          px: 2,
        }}
      >
        <NextPrevEl
          className="mdNextElSwiper"
          sx={{ right: 0 }}
          Icon={<ChevronRightRoundedIcon color="inherit" />}
        />
        <NextPrevEl
          className="mdPrevElSwiper"
          sx={{ left: 0 }}
          Icon={<ChevronLeftRoundedIcon color="inherit" />}
        />

        <Swiper
          className="swiper-just-release-navigation"
          spaceBetween={15}
          navigation={{
            enabled: true,
            nextEl: ".mdNextElSwiper",
            prevEl: ".mdPrevElSwiper",
          }}
          modules={[Autoplay, Navigation]}
          grabCursor={true}
          breakpoints={{
            320: {
              slidesPerView: 1.25,
              spaceBetween: 20,
            },
            400: {
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
              slidesPerView: 3.5,
              spaceBetween: 10,
            },
            1250: {
              slidesPerView: 4.5,
              spaceBetween: 10,
            },
            1750: {
              slidesPerView: 5.5,
              spaceBetween: 20,
            },
          }}
        >
          {items?.map((item: Season) => {
            return (
              <SwiperSlide
                key={item.id}
                style={{ width: "100%" }}
                onClick={() => {
                  setSelectedSeason(item.season_number);
                  setSeason(item.season_number);
                }}
              >
                <Box
                  width="100%"
                  height={250}
                  position="relative"
                  borderRadius={5}
                  border={(theme) =>
                    item.season_number === selectedSeason
                      ? `3px solid ${theme.palette.primary.main}`
                      : "none"
                  }
                >
                  <Image
                    src={
                      "https://www.themoviedb.org/t/p/w500/" + item.poster_path
                    }
                    alt={item.name}
                    width={1000}
                    height={100}
                    style={{
                      width: "100%",
                      height: "70%",
                      objectFit: "cover",
                      backgroundPosition: "center center",
                      borderTopLeftRadius: "15px",
                      borderTopRightRadius: "15px",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "30%",
                      borderBottomLeftRadius: "15px",
                      borderBottomRightRadius: "15px",
                      background: (theme) =>
                        `linear-gradient(to bottom, transparent 0%, ${theme.palette.background.paper} 50%)`,
                    }}
                  />
                  <SeasonCardDetail
                    title={item.name}
                    rating={item.vote_average}
                    episodeCount={item.episode_count}
                  />
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Box mt={4}>
          <Stack
            direction="row"
            alignItems="center"
            gap={1}
            mt={1}
            whiteSpace="nowrap"
          >
            <Typography
              component={"h2"}
              fontSize={26}
              color={"primary.dark"}
              fontWeight={"bold"}
            >
              {
                items.find((item) => item.season_number === selectedSeason)
                  ?.name
              }
            </Typography>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ borderRightWidth: "2px", color: "gray" }}
            />
            <Typography fontWeight="500">
              {
                items.find((item) => item.season_number === selectedSeason)
                  ?.air_date
              }
            </Typography>
          </Stack>
          <Typography component={"h2"} fontSize={18}>
            {
              items.find((item) => item.season_number === selectedSeason)
                ?.overview
            }
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SeasonSwiper;
