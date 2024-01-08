import { getWatchListMovie } from "@/api/profile";
import { useFavoritesList } from "@/api/profile/hooks/useFavoritesList";
import MovieCard from "@/components/movies/movie-card";
import MovieCardSkeletonLoader from "@/components/movies/movie-card-skeleton-loader";
import { AppContext } from "@/context/AppContext";
import { profileListType } from "@/types/general";
import { Movie } from "@/types/movie";
import {
  Box,
  Grid,
  Pagination,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useRouter } from "next/router";
import { useContext, useEffect, useMemo } from "react";

type Props = {
  option: profileListType;
};

const Favorites: React.FC<Props> = ({ option }) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const router = useRouter();
  const { user } = useContext(AppContext);

  const { data, isLoading, isFetching, isError } = useFavoritesList(
    user.id,
    option
  );

  console.log(data);

  const handleChange = (event: any, value: number) => {
    router.replace({
      query: { ...router.query, page: value },
    });
  };

  if (isError) {
    return <div className="">isError </div>;
  }

  return (
    <Stack direction={"column"}>
      <Typography component="h1" fontSize={24} fontWeight="bold" pl={0}>
        Favorite {option === "movies" ? "Movies" : "TV Series"}
      </Typography>
      <Grid container justifyContent="start" sx={{ pt: 1 }}>
        {isLoading || isFetching ? (
          <SkeletonLoader />
        ) : (
          data?.results?.map((movie: Movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })
        )}
      </Grid>
      <Box display={"flex"} justifyContent={"center"}>
        <Pagination
          count={data?.total_pages || 1}
          color="primary"
          sx={{ marginTop: 5 }}
          size={isMobile ? "medium" : "large"}
          siblingCount={isMobile ? 0 : 1}
          onChange={handleChange}
          page={data?.page || 1}
        />
      </Box>
    </Stack>
  );
};

export default Favorites;

const SkeletonLoader = () => {
  return Array(20)
    .fill(0)
    .map((_, i) => {
      return <MovieCardSkeletonLoader key={i} />;
    });
};
