import { Box, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import { IMPLEMENTERS } from "@/constants/implementers";

const FOOTER_LINKS_2 = [
  { title: "Privacy policy", link: "/" },
  { title: "Terms of sevice", link: "/" },
  { title: "Language", link: "/" },
];

const Footer: React.FC = () => {
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
                  sm: "center",
                  xs: "space-between",
                }}
              >
                <Typography fontSize={20}>Implemented by </Typography>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={1}
                  alignItems={{ xs: "center", sm: "baseline" }}
                  divider={<Typography>&</Typography>}
                >
                  {IMPLEMENTERS.map((item) => {
                    return (
                      <Stack key={item.name}>
                        <Typography
                          sx={{
                            color: `${item.color}.main`,
                            fontWeight: "bold",
                            fontSize: 23,
                          }}
                          component="h4"
                        >
                          {item.name}
                        </Typography>
                        <Stack
                          direction={"row"}
                          spacing={1}
                          order={{ md: 2, xs: 1 }}
                          display={"flex"}
                          justifyContent={{ md: "end", xs: "start" }}
                          alignSelf={"center"}
                        >
                          <Link href={item.linkedin} target="_blank">
                            <LinkedInIcon
                              sx={{
                                color: `${item.color}.main`,
                                fontSize: 30,
                              }}
                            />
                          </Link>
                          <Link href={item.github} target="_blank">
                            <GitHubIcon
                              sx={{
                                color: `${item.color}.main`,
                                fontSize: 30,
                              }}
                            />
                          </Link>
                          <Link href={item.telegram} target="_blank">
                            <TelegramIcon
                              sx={{
                                color: `${item.color}.main`,
                                fontSize: 30,
                              }}
                            />
                          </Link>
                        </Stack>
                      </Stack>
                    );
                  })}
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
          <Stack direction={"row"} spacing={3} justifyContent={"space-between"}>
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
