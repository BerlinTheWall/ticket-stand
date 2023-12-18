import { useRouter } from "next/router";
import MovieCard from "@/components/movies/movie-card";
import { Grid, Pagination, Typography, useMediaQuery } from "@mui/material";
import { Movie } from "@/types/movie";
import MainLayout from "@/layout/main-layout";
import { useDiscoverMovie } from "@/api/movies/hook/useDiscoverMovie";
import MovieCardSkeletonLoader from "@/components/movies/movie-card-skeleton-loader";

const MovieList = () => {
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
      return <MovieCardSkeletonLoader key={i} />;
    });
};

MovieList.PageLayout = MainLayout;

export default MovieList;
