import { Box, Divider, Stack, Typography } from "@mui/material";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import { Episode } from "@/types/tv-series";
import NextPrevEl from "@/components/swiper-slides/next-prev-button";
import { useEffect, useState } from "react";
import SeasonCardDetail from "../season-slider/season-slider-detail";
import { W500_IMAGE_URL } from "@/constants/image-urls";

interface Props {
  title: string;
  items: Episode[];
}

const EpisodeSwiper: React.FC<Props> = ({ title, items }) => {
  const [selectedEpisode, setSelectedEpisode] = useState<number>(
    items[0].episode_number
  );

  useEffect(() => {
    setSelectedEpisode(1);
  }, [items]);

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
          {items?.map((item: Episode) => {
            return (
              <SwiperSlide
                key={item.id}
                style={{ width: "100%" }}
                onClick={() => setSelectedEpisode(item.episode_number)}
              >
                <Box
                  width="100%"
                  height={250}
                  position="relative"
                  borderRadius={5}
                  border={(theme) =>
                    item.episode_number === selectedEpisode
                      ? `3px solid ${theme.palette.primary.main}`
                      : "none"
                  }
                >
                  <Image
                    src={W500_IMAGE_URL + item.still_path}
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
                    episodeCount={item.episode_number}
                    isEpisode
                  />
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Box mt={4}>
          <Stack
            gap={1}
            mt={1}
            mb={1}
            whiteSpace="nowrap"
            sx={{
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "start", sm: "center" },
              gap: { xs: 0, sm: 1 },
            }}
          >
            <Typography
              component={"h2"}
              fontSize={26}
              color={"primary.dark"}
              fontWeight={"bold"}
              className={"truncate-1"}
            >
              {
                items.find((item) => item.episode_number === selectedEpisode)
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
                items.find((item) => item.episode_number === selectedEpisode)
                  ?.air_date
              }
            </Typography>
          </Stack>
          <Typography component={"h2"} fontSize={18}>
            {
              items.find((item) => item.episode_number === selectedEpisode)
                ?.overview
            }
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default EpisodeSwiper;
