import MainLayout from "@/layout/main-layout";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Palette,
  PaletteColor,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import { IMPLEMENTER } from "@/constants/implementers";
import Link from "next/link";
import { MouseEventHandler, useState } from "react";

const SOCIAL_STYLE = {
  borderRadius: "50%",
  display: "flex",
  p: 0.7,
  transition: "all 0.3s",
  ":hover": {
    opacity: 0.8,
  },
};

const AboutUs = () => {
  return (
    <MainLayout>
      <Typography pt={5} textAlign="center" variant="h3">
        About Us
      </Typography>
      <Stack
        direction="row"
        flexWrap="wrap"
        gap={5}
        justifyContent={{ sm: "start", xs: "center" }}
        p={10}
      >
        {IMPLEMENTER.map((item) => {
          return <ImplementerCard key={item.name} item={item} />;
        })}
      </Stack>
    </MainLayout>
  );
};

type ImplementerCardProps = {
  item: (typeof IMPLEMENTER)[0];
};

const ImplementerCard = ({ item }: ImplementerCardProps) => {
  const [showDesc, setShowDesc] = useState(false);

  const toggleShowDesc = () => {
    setShowDesc((prev) => !prev);
  };

  const preventStopPropagation: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.stopPropagation();
  };

  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        width: 200,
        height: 280,
        perspective: 1000,
      }}
      onClick={toggleShowDesc}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          textAlign: "center",
          transition: "transform 0.6s",
          transformStyle: "preserve-3d",
          boxShadow: 1,
          transform: showDesc ? "rotateY(180deg)" : "none",
        }}
        className="flip-card-inner"
      >
        {/* front */}
        <Paper
          sx={{
            borderRadius: 2,
            height: "100%",
            width: "100%",
            overflow: "hidden",
            filter: (theme) =>
              `drop-shadow(0px 2px 8px ${theme.palette[item.color].main} )`,
            position: "absolute",
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
          }}
          elevation={2}
        >
          <Box sx={{ bgcolor: `${item.color}.main`, height: "30%" }} />
          <Box
            sx={{
              borderRadius: "50%",
              width: 110,
              height: 110,
              overflow: "hidden",
              position: "absolute",
              top: 20,
              left: "50%",
              transform: "translateX(-50%)",
              border: "2px solid",
            }}
          >
            <Image fill src={item.img} alt={item.name} />
          </Box>
          <Box mt={7} p={2} textAlign="center">
            <Typography component="h1" fontSize={20} fontWeight={700}>
              {item.name}
            </Typography>
            <Typography
              component="h4"
              fontSize={14}
              fontWeight={700}
              color={`${item.color}.main`}
            >
              {item.role}
            </Typography>

            <Stack direction="row" justifyContent="center" mt={2} spacing={1}>
              <Link
                href={item.linkedin}
                target="_blank"
                onClick={preventStopPropagation}
              >
                <Box
                  sx={{
                    bgcolor: `${item.color}.main`,

                    ...SOCIAL_STYLE,
                  }}
                >
                  <LinkedInIcon fontSize="small" />
                </Box>
              </Link>
              <Link
                href={item.github}
                target="_blank"
                onClick={preventStopPropagation}
              >
                <Box
                  sx={{
                    bgcolor: `${item.color}.main`,
                    ...SOCIAL_STYLE,
                  }}
                >
                  <GitHubIcon fontSize="small" />
                </Box>
              </Link>

              <Link
                href={item.telegram}
                target="_blank"
                onClick={preventStopPropagation}
              >
                <Box
                  sx={{
                    bgcolor: `${item.color}.main`,
                    ...SOCIAL_STYLE,
                  }}
                >
                  <TelegramIcon fontSize="small" />
                </Box>
              </Link>
            </Stack>
          </Box>
        </Paper>

        {/* back */}
        <Paper
          sx={{
            borderRadius: 2,
            overflow: "hidden",
            filter: (theme) =>
              `drop-shadow(0px 2px 8px ${theme.palette[item.color].main} )`,
            transform: " rotateY(180deg)",
            position: "absolute",
            width: "100%",
            height: "100%",
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
            bgcolor: `${item.color}.main`,
            p: 1.5,
          }}
          elevation={2}
        >
          <Typography fontSize={14} textAlign="center">
            {item.desc}
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default AboutUs;
