import { axiosApi } from "@/api/new-api";
import { filteringMethod } from "@/utils/utils";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import MovieCard from "@/components/movies/movie-card";
import {
  Box,
  Grid,
  Pagination,
  Paper,
  Skeleton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Movie } from "@/types/movie";
import MainLayout from "@/layout/main-layout";

const MovieList = (props: any) => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const router = useRouter();
  const queryParams = router.isReady && router.query;

  const { data, isLoading, isFetching, isError } = useDiscoverMovie(
    queryParams,
    { enabled: router.isReady }
  );

  const handleChange = (event: any, value: number) => {
    router.replace({
      query: { ...router.query, page: value },
    });
  };

  if (isError) {
    return <div className="">isError </div>;
  }

  return (
    <>
      <Typography
        component="h1"
        fontSize={24}
        fontWeight="bold"
        my={3}
        paddingLeft={5}
      >
        All Movies
      </Typography>
      <Grid container justifyContent="center">
        {isLoading || isFetching ? (
          <SkeletonLoader />
        ) : (
          data?.results?.map((movie: Movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })
        )}
        <Pagination
          count={data?.total_pages || 10}
          color="primary"
          sx={{ marginTop: 5 }}
          size={isMobile ? "medium" : "large"}
          siblingCount={isMobile ? 0 : 1}
          onChange={handleChange}
          page={data?.page || 1}
        />
      </Grid>
    </>
  );
};

const SkeletonLoader = () => {
  return Array(20)
    .fill(0)
    .map((_, i) => {
      return (
        <Grid
          key={i}
          item
          height={350}
          // height={!isMobile && !isMobileXs ? 550 : 350}
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
        </Grid>
      );
    });
};

MovieList.PageLayout = MainLayout;

export const useDiscoverMovie = (filters = {}, options = {}) => {
  const queryParams = filteringMethod(filters);
  const discover = useQuery({
    queryKey: ["discover", filters],
    queryFn: () =>
      axiosApi({ url: `/discover/movie${queryParams}` }).then(
        (res) => res.data
      ),
    keepPreviousData: true,
    ...options,
  });

  return { ...discover };
};

export default MovieList;
