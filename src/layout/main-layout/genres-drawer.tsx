import {
  POPULAR_MOVIES_PAGE,
  POPULAR_TVSERIES_PAGE,
  TOP_RATED_MOVIES_PAGE,
  TOP_RATED_TVSERIES_PAGE,
  TRENDING_MOVIES_PAGE,
  TRENDING_TVSERIES_PAGE,
} from "@/constants/urls";
import {
  Box,
  Button,
  Divider,
  Stack,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

export const DISCOVERITEMS = [
  {
    href: TOP_RATED_MOVIES_PAGE,
    name: "Top Rated Movies",
    icon: <MilitaryTechIcon sx={{ color: "warning.dark" }} />,
  },
  {
    href: TRENDING_MOVIES_PAGE,
    name: "Trending Movies",
    icon: <TrendingUpIcon sx={{ color: "primary.dark" }} />,
  },
  {
    href: POPULAR_MOVIES_PAGE,
    name: "Popular Movies",
    icon: <WhatshotIcon sx={{ color: "error.dark" }} />,
  },
  {
    href: TOP_RATED_TVSERIES_PAGE,
    name: "Top Rated TV Series",
    icon: <MilitaryTechIcon sx={{ color: "warning.dark" }} />,
  },
  {
    href: TRENDING_TVSERIES_PAGE,
    name: "Trending TV Series",
    icon: <TrendingUpIcon sx={{ color: "primary.dark" }} />,
  },
  {
    href: POPULAR_TVSERIES_PAGE,
    name: "Popular TV Series",
    icon: <WhatshotIcon sx={{ color: "error.dark" }} />,
  },
];

export const DISCOVER_MOVIES_MENU = [
  {
    href: TOP_RATED_MOVIES_PAGE,
    name: "Top Rated Movies",
    icon: <MilitaryTechIcon sx={{ color: "warning.dark" }} />,
  },
  {
    href: TRENDING_MOVIES_PAGE,
    name: "Trending Movies",
    icon: <TrendingUpIcon sx={{ color: "primary.dark" }} />,
  },
  {
    href: POPULAR_MOVIES_PAGE,
    name: "Popular Movies",
    icon: <WhatshotIcon sx={{ color: "error.dark" }} />,
  },
];

export const DISCOVER_TVSERIES_MENU = [
  {
    href: TOP_RATED_TVSERIES_PAGE,
    name: "Top Rated TV Series",
    icon: <MilitaryTechIcon sx={{ color: "warning.dark" }} />,
  },
  {
    href: TRENDING_TVSERIES_PAGE,
    name: "Trending TV Series",
    icon: <TrendingUpIcon sx={{ color: "primary.dark" }} />,
  },
  {
    href: POPULAR_TVSERIES_PAGE,
    name: "Popular TV Series",
    icon: <WhatshotIcon sx={{ color: "error.dark" }} />,
  },
];

const ListGroup: React.FC<{
  list: typeof DISCOVER_TVSERIES_MENU;
  title: string;
}> = ({ list, title }) => {
  return (
    <Stack>
      <Typography
        sx={{
          textAlign: "center",
          color: "primary.dark",
          fontSize: 22,
          fontWeight: "bold",
        }}
      >
        {title}
      </Typography>
      <Stack spacing={2} py={2}>
        {list.map((item) => {
          return (
            <Link key={item.name} href={item.href}>
              <Stack direction="row" alignItems="center" spacing={2}>
                {item.icon}
                <Typography
                  component="h3"
                  sx={{
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "all 0.2s ease-in-out",
                    ":hover": {
                      transform: "translateX(8px)",
                      color: "primary.main",
                    },
                  }}
                >
                  {item.name}
                </Typography>
              </Stack>
            </Link>
          );
        })}
      </Stack>
    </Stack>
  );
};

const GenresDrawer: React.FC = () => {
  const theme = useTheme();
  const [isHover, setIsHover] = useState(false);

  return (
    <Box
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Tooltip
        title={
          <Box>
            {/* <Grid container spacing={0}> */}
            {/* {MovieGenre.map((genre) => {
                return (
                  <Grid item md={4} key={genre.id} sx={{ px: 2, my: 1.2 }}>
                    <Link href={`${MOVIES_PAGE}?with_genres=${genre.id}`}>
                      <Typography
                        fontWeight={700}
                        component="h3"
                        sx={{
                          pl: 1,
                          cursor: "pointer",
                          borderLeft: `2px solid ${theme.palette.primary.main}`,
                          transition: "padding-left 0.2s ease-in-out",
                          ":hover": {
                            pl: 1.5,
                            color: theme.palette.primary.main,
                          },
                        }}
                      >
                        {genre.name}
                      </Typography>
                    </Link>
                  </Grid>
                );
              })} */}
            {/* {DiscoverMoviesMenu.map((item) => {
                return (
                  <Grid item md={6} key={item.name} sx={{ px: 1, my: 1.2 }}>
                    <Link href={item.href}>
                      <Stack direction={"row"} alignItems={"center"} gap={1}>
                        {item.icon}
                        <Typography
                          fontWeight={700}
                          component="h3"
                          sx={{
                            pl: 1,
                            cursor: "pointer",
                            // borderLeft: `2px solid ${theme.palette.primary.main}`,
                            transition: "padding-left 0.2s ease-in-out",
                            ":hover": {
                              pl: 1.5,
                              color: theme.palette.primary.main,
                            },
                          }}
                        >
                          {item.name}
                        </Typography>
                      </Stack>
                    </Link>
                  </Grid>
                );
              })}
              <Divider
                orientation="vertical"
                // flexItem
                // sx={{ borderRightWidth: "2px", bgcolor: "gray" }}
              />
              {DiscoverTVSeriesMenu.map((item) => {
                return (
                  <Grid item md={6} key={item.name} sx={{ px: 1, my: 1.2 }}>
                    <Link href={item.href}>
                      <Stack direction={"row"} alignItems={"center"} gap={1}>
                        {item.icon}
                        <Typography
                          fontWeight={700}
                          component="h3"
                          sx={{
                            pl: 1,
                            cursor: "pointer",
                            // borderLeft: `2px solid ${theme.palette.primary.main}`,
                            transition: "padding-left 0.2s ease-in-out",
                            ":hover": {
                              pl: 1.5,
                              color: theme.palette.primary.main,
                            },
                          }}
                        >
                          {item.name}
                        </Typography>
                      </Stack>
                    </Link>
                  </Grid>
                );
              })}
            </Grid> */}
            <Stack direction={"row"} justifyContent={"space-around"}>
              <ListGroup list={DISCOVER_MOVIES_MENU} title="Movies" />
              <Divider orientation="vertical" flexItem />
              <ListGroup list={DISCOVER_TVSERIES_MENU} title="TV Series" />
            </Stack>
          </Box>
        }
        placement="bottom-start"
        componentsProps={{
          tooltip: {
            sx: {
              background: `${theme.palette.background.paper}f6`,
              color: theme.palette.text.primary,
              boxShadow: 2,
              px: 2.5,
              py: 1.5,
              minWidth: 530,
              borderRadius: 5,
            },
          },
          arrow: {
            sx: {
              color: theme.palette.background.paper,
            },
          },
        }}
        arrow
        open={isHover}
      >
        <Button
          aria-haspopup="true"
          sx={{ my: 2, display: "block", fontSize: "14px" }}
          color="secondary"
        >
          DISCOVER
        </Button>
      </Tooltip>
    </Box>
  );
};
export default GenresDrawer;
