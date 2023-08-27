import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { Fragment } from "react";

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
  return (
    <Container maxWidth="xl" sx={{ paddingBottom: 5 }}>
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
          <Box display={"grid"} gap={3}>
            <Stack
              flexWrap={"wrap"}
              order={{ md: 1, xs: 2 }}
              direction={"row"}
              justifyContent={{ md: "end", sm: "center", xs: "space-between" }}
            >
              {FOOTER_LINKS.map((link, index) => {
                return (
                  <Fragment key={link.title}>
                    <Link
                      href={link.link}
                      prefetch={false}
                      style={{ fontWeight: "inherit" }}
                    >
                      {link.title}
                    </Link>
                    {index !== FOOTER_LINKS.length - 1 && (
                      <span style={{ padding: "0px 10px" }}>/</span>
                    )}
                  </Fragment>
                );
              })}
            </Stack>
            <Box
              order={{ md: 2, xs: 1 }}
              display={"flex"}
              justifyContent={{ md: "end", xs: "start" }}
              alignSelf={"end"}
            >
              Icons
            </Box>
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
                <Typography fontSize={{ xs: "13px" }}>{link.title}</Typography>
              </Link>
            );
          })}
        </Stack>
        <Typography textAlign={{ xs: "center" }}>© 2023</Typography>
      </Stack>
    </Container>
  );
};

export default Footer;
