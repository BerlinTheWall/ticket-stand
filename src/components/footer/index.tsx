import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";
import { Fragment } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";

const FOOTER_LINKS = [
  { title: "Home", link: "/" },
  { title: "Discover", link: "/" },
  { title: "Influence", link: "/" },
  { title: "Release", link: "/" },
];

const FOOTER_LINKS_2 = [
  { title: "Privacy policy", link: "/" },
  { title: "Terms of sevice", link: "/" },
  { title: "Language", link: "/" },
];

const Footer: React.FC = () => {
  const isTablet = useMediaQuery("(max-width:1027px)");

  return (
    <Box
      position="relative"
      sx={{
        pt: 8,
        pb: 5,
        px: 5,
        bgcolor: "background.paper",
        mt: 5,
      }}
    >
      <Box
        sx={{
          maxWidth: "xl",
          mx: "auto",
        }}
      >
        <Grid container spacing={3}>
          <Grid item lg={5} md={6} xs={12}>
            <Typography fontSize={28}>
              Our platform is trusted by millions & features best updated movies
              all around the world.
            </Typography>
          </Grid>
          <Grid
            item
            md={true}
            xs={12}
            justifyContent={{ md: "end" }}
            display={"flex"}
          >
            <Box display={"grid"} gap={3} sx={{ mx: { xs: "auto", sm: 0 } }}>
              <Stack
                flexWrap={"wrap"}
                order={{ md: 1, xs: 2 }}
                gap={1}
                direction={{ xs: "column", sm: "row", md: "row" }}
                alignItems={{ xs: "center", sm: "start" }}
                justifyContent={{
                  md: "end",
                  sm: "center",
                  xs: "space-between",
                }}
              >
                <Typography fontSize={20}>Implemented by </Typography>
                <Stack direction={"column"}>
                  <Typography
                    component={"span"}
                    sx={{
                      color: "primary.dark",
                      fontWeight: "bold",
                      fontSize: 20,
                    }}
                  >
                    Hooman Shahidi
                  </Typography>{" "}
                  <Stack
                    direction={"row"}
                    gap={1}
                    order={{ md: 2, xs: 1 }}
                    display={"flex"}
                    justifyContent={{ md: "end", xs: "start" }}
                    alignSelf={"center"}
                  >
                    <Link
                      href={
                        "https://www.linkedin.com/in/hooman-shahidi-5927b4103/"
                      }
                      target="_blank"
                    >
                      <LinkedInIcon
                        sx={{
                          color: "primary.dark",
                          fontSize: 36,
                          cursor: "pointer",
                        }}
                      />
                    </Link>
                    <Link
                      href={"https://github.com/BerlinTheWall"}
                      target="_blank"
                    >
                      <GitHubIcon
                        sx={{
                          color: "primary.dark",
                          fontSize: 34,
                          cursor: "pointer",
                        }}
                      />
                    </Link>
                    <Link href={"https://t.me/TheWhoman"} target="_blank">
                      <TelegramIcon
                        sx={{
                          color: "primary.dark",
                          fontSize: 34,
                          cursor: "pointer",
                        }}
                      />
                    </Link>
                  </Stack>
                </Stack>
                <Typography fontSize={20}>&</Typography>
                <Stack direction={"column"}>
                  <Typography
                    component={"span"}
                    sx={{
                      color: "info.main",
                      fontWeight: "bold",
                      fontSize: 20,
                    }}
                  >
                    Farnood Lotfali
                  </Typography>{" "}
                  <Stack
                    direction={"row"}
                    gap={1}
                    order={{ md: 2, xs: 1 }}
                    display={"flex"}
                    justifyContent={{ md: "end", xs: "start" }}
                    alignSelf={"center"}
                  >
                    <Link
                      href={
                        "https://www.linkedin.com/in/hooman-shahidi-5927b4103/"
                      }
                      target="_blank"
                    >
                      <LinkedInIcon
                        sx={{
                          color: "info.main",
                          fontSize: 36,
                          cursor: "pointer",
                        }}
                      />
                    </Link>
                    <Link
                      href={"https://github.com/BerlinTheWall"}
                      target="_blank"
                    >
                      <GitHubIcon
                        sx={{
                          color: "info.main",
                          fontSize: 34,
                          cursor: "pointer",
                        }}
                      />
                    </Link>
                    <Link href={"https://t.me/TheWhoman"} target="_blank">
                      <TelegramIcon
                        sx={{
                          color: "info.main",
                          fontSize: 34,
                          cursor: "pointer",
                        }}
                      />
                    </Link>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </Grid>
        </Grid>
        <Stack
          direction={{ sm: "row", xs: "column" }}
          justifyContent={"space-between"}
          marginTop={5}
          spacing={3}
        >
          <Stack direction={"row"} spacing={3}>
            {FOOTER_LINKS_2.map((link) => {
              return (
                <Link prefetch={false} href={link.link} key={link.title}>
                  <Typography fontSize={{ xs: "13px" }}>
                    {link.title}
                  </Typography>
                </Link>
              );
            })}
          </Stack>
          <Typography textAlign={{ xs: "center" }}>
            © {new Date().getFullYear()}
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
