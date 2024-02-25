import { Box, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import { SwiperSlide } from "swiper/react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

type Props = {
  href: string;
};

const SeeMoreSlide: React.FC<Props> = ({ href }) => {
  const theme = useTheme();

  return (
    <SwiperSlide
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100%",
        alignSelf: "center",
      }}
    >
      <Link
        href={href}
        style={{
          width: "100%",
        }}
      >
        <Box
          width={"65%"}
          py={0.5}
          px={1}
          position={"relative"}
          color="text.primary"
          border="1px solid"
          borderColor="primary.dark"
          borderRadius={4}
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={0}
          sx={{
            bgcolor: `${theme.palette.primary.dark}15`,
            transition: "background-color 0.3s",
            "&:hover": {
              bgcolor: `${theme.palette.primary.dark}50`,
            },
          }}
        >
          <Typography sx={{ fontSize: 16, color: "primary.dark" }}>
            See More
          </Typography>
          <ArrowForwardIosIcon sx={{ color: "primary.dark", fontSize: 18 }} />
        </Box>
      </Link>
    </SwiperSlide>
  );
};

export default SeeMoreSlide;
