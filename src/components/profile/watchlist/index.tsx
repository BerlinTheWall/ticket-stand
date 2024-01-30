import { useWatchList } from "@/api/profile/hooks/useGetWatchList";
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
import { useContext, useState } from "react";
import MovieTypeChooser from "../profile-tab/movie-type-chooser";
import MediaCard from "@/components/media/media-card";
import { Media } from "@/types/media";

const WatchList: React.FC<{}> = () => {
  const [selectedOption, setSelectedOption] =
    useState<profileListType>("movie");
  const isMobile = useMediaQuery("(max-width:600px)");
  const router = useRouter();
  const { user } = useContext(AppContext)!;

  const { data, isLoading, isFetching, isError } = useWatchList(
    user.id,
    selectedOption
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
    <Stack direction={"column"}>
      <Grid container spacing={2} alignItems="center">
        <Grid item sm={true} xs={12}>
          <Typography component="h1" fontSize={24} fontWeight="bold" pl={0}>
            {selectedOption === "movie" ? "Movies" : "TV Series"} WatchList
          </Typography>
        </Grid>
        <Grid item sm={6} md={3} xs={12}>
          <MovieTypeChooser
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </Grid>
      </Grid>
      <Box>
        <Grid container sx={{ pt: 1 }} spacing={2}>
          {isLoading || isFetching ? (
            <SkeletonLoader />
          ) : (
            data?.results?.map((media: Media) => {
              return <MediaCard key={media.id} media={media} />;
            })
          )}
        </Grid>
      </Box>
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

export default WatchList;

const SkeletonLoader = () => {
  return Array(20)
    .fill(0)
    .map((_, i) => {
      return <MovieCardSkeletonLoader key={i} />;
    });
};
