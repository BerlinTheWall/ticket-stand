import { useRouter } from "next/router";
import MovieCard from "@/components/movies/movie-card";
import {
  Box,
  Grid,
  Pagination,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Movie } from "@/types/movie";
import MainLayout from "@/layout/main-layout";
import { useDiscoverMovie } from "@/api/movies/hook/useDiscoverMovie";
import MovieCardSkeletonLoader from "@/components/movies/movie-card-skeleton-loader";
import { MovieGenre } from "@/constants/movie-genre";
import { useMemo } from "react";
import SearchBar from "@/components/search-bar";

const MovieList = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const router = useRouter();
  const queryParams = router.isReady && (router.query as any);

  const { data, isLoading, isFetching, isError } = useDiscoverMovie(
    queryParams,
    { enabled: router.isReady }
  );

  const categoryName = useMemo(
    () =>
      MovieGenre.find((item) => item.id == queryParams?.with_genres)?.name ??
      "All",
    [queryParams?.with_genres]
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
    <MainLayout needMargin>
      <SearchBar readUrl />
      <Box mx={5} pt={2}>
        <Typography mb={2} component="h1" fontSize={24} fontWeight="bold">
          {categoryName} Movies
        </Typography>
        <Grid container justifyContent="center" spacing={2}>
          {isLoading || isFetching ? (
            <SkeletonLoader />
          ) : (
            data?.results?.map((movie: Movie) => {
              return <MovieCard key={movie.id} movie={movie} />;
            })
          )}
        </Grid>
        <Stack direction="row" justifyContent="center">
          <Pagination
            count={data?.total_pages || 10}
            color="primary"
            sx={{ marginTop: 5 }}
            size={isMobile ? "medium" : "large"}
            siblingCount={isMobile ? 0 : 1}
            onChange={handleChange}
            page={data?.page || 1}
          />
        </Stack>
      </Box>
    </MainLayout>
  );
};

const SkeletonLoader = () => {
  return Array(20)
    .fill(0)
    .map((_, i) => {
      return <MovieCardSkeletonLoader key={i} />;
    });
};

export default MovieList;
