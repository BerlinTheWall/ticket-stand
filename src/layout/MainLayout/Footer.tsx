import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { common } from "@mui/material/colors";
import Link from "next/link";

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
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid item lg={2.5} md={6} xs={12}>
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
                  <>
                    <Link href={link.link} key={link.link}>
                      {link.title}
                    </Link>
                    {index !== FOOTER_LINKS.length - 1 && (
                      <span style={{ padding: "0px 10px" }}>/</span>
                    )}
                  </>
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
        marginTop={3}
        spacing={3}
      >
        <Stack direction={"row"} spacing={3}>
          {FOOTER_LINKS_2.map((link) => {
            return (
              <>
                <Link prefetch={false} href={link.link} key={link.link}>
                  <Typography fontSize={{ xs: "13px" }}>
                    {link.title}
                  </Typography>
                </Link>
              </>
            );
          })}
        </Stack>
        <Typography textAlign={{ xs: "center" }}>©2023</Typography>
      </Stack>
      {/* <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "space-between", md: "space-between" },
        }}
      >
        <Box sx={{ width: "40%" }}>
          <Typography fontSize={28}>
            Our platform is trusted by millions & features best updated movies
            all around the world.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "end",
          }}
        >
          <Box>
            <Link href={"/"}>Home</Link>
            <span style={{ padding: "0px 10px" }}>/</span>
            <Link href={"/"}>Discover</Link>
            <span style={{ padding: "0px 10px" }}>/</span>
            <Link href={"/"}>Influence</Link>
            <span style={{ padding: "0px 10px" }}>/</span>
            <Link href={"/"}>Release</Link>
          </Box>
          <Box>Icons</Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          my: 7,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row", gap: 4 }}>
          <Typography>Privacy policy</Typography>
          <Typography>Term of service</Typography>
          <Typography>Language</Typography>
        </Box>
        <Box>@2023</Box>
      </Box> */}
    </Container>
  );
};

export default Footer;
