import { Box, Grid, Paper, Skeleton, Stack } from "@mui/material";

const MovieCardSkeletonLoader = () => {
  return (
    <Grid
      item
      height={350}
      xs={10}
      sm={5}
      md={2.5}
      lg={2}
      my={1}
      component={Paper}
      mx={1}
      borderRadius={2}
    >
      <Skeleton
        variant="rectangular"
        sx={{
          width: "100%",
          height: 260,
          borderTopLeftRadius: "inherit",
          borderTopRightRadius: "inherit",
        }}
      />

      <Box mx="5px" mt={1}>
        <Skeleton variant="text" sx={{ fontSize: "22px" }} />
        <Stack direction="row" spacing={1} alignItems="center">
          <Skeleton variant="circular" sx={{ minWidth: 25, minHeight: 25 }} />
          <Skeleton variant="text" sx={{ fontSize: "22px", width: "100%" }} />
        </Stack>
      </Box>
    </Grid>
  );
};

export default MovieCardSkeletonLoader;