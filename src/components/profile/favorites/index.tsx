import { useFavoritesList } from "@/api/profile/hooks/useGetFavoritesList";
import MovieCard from "@/components/movies/movie-card";
import MovieCardSkeletonLoader from "@/components/movies/movie-card-skeleton-loader";
import { AppContext } from "@/context/AppContext";
import { ContextValue, profileListType } from "@/types/general";
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
import { useContext, useState } from "react";
import MovieTypeChooser from "../profile-tab/movie-type-chooser";
import ErrorMessage from "@/components/error-message";

const Favorites: React.FC<{}> = () => {
  const [selectedOption, setSelectedOption] =
    useState<profileListType>("movie");
  const isMobile = useMediaQuery("(max-width:600px)");
  const router = useRouter();
  const { user } = useContext(AppContext) as ContextValue;

  const { data, isLoading, isFetching, isError } = useFavoritesList(
    user!.id,
    selectedOption
  );

  const handleChange = (event: any, value: number) => {
    router.replace({
      query: { ...router.query, page: value },
    });
  };

  if (isError) {
    return <ErrorMessage />;
  }

  return (
    <Stack direction={"column"}>
      <Grid container spacing={2} alignItems="center">
        <Grid item sm={true} xs={12}>
          <Typography component="h1" fontSize={24} fontWeight="bold" pl={0}>
            Favorite {selectedOption === "movie" ? "Movies" : "TV Series"}
          </Typography>
        </Grid>
        <Grid item sm={6} md={3} xs={12}>
          <MovieTypeChooser
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </Grid>
      </Grid>
      <Grid container justifyContent="start" sx={{ pt: 1 }} spacing={2}>
        {isLoading || isFetching ? (
          <MovieCardSkeletonLoader />
        ) : (
          data?.results?.map((movie: Movie) => {
            return <MovieCard key={movie.id} media={movie} />;
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
