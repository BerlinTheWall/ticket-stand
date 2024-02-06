import { Box, Grid, Paper, Skeleton, Stack } from "@mui/material";

interface MovieCardSkeletonLoaderProps {
  size?: number;
}

const MovieCardSkeletonLoader: React.FC<MovieCardSkeletonLoaderProps> = ({
  size = 20,
}) => {
  return (
    <>
      {Array(size)
        .fill(0)
        .map((_, i) => {
          return (
            <Grid key={i} item xs={12} sm={6} md={3} lg={2.4}>
              <Paper
                sx={{
                  borderRadius: 2,
                  height: 350,
                }}
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
                    <Skeleton
                      variant="circular"
                      sx={{ minWidth: 25, minHeight: 25 }}
                    />
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "22px", width: "100%" }}
                    />
                  </Stack>
                </Box>
              </Paper>
            </Grid>
          );
        })}
    </>
  );
};

export default MovieCardSkeletonLoader;
