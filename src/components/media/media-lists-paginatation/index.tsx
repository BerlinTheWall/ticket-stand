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
import MovieCardSkeletonLoader from "@/components/movies/movie-card-skeleton-loader";
import { PaginatedList } from "@/types/paginated-list";

type Props = {
  title: string;
  isLoading: boolean;
  isFetching: boolean;
  data: PaginatedList<any>;
  isMovie: boolean;
  handlePageChange: any;
};

const MediaListWithPagination: React.FC<Props> = ({
  title,
  isFetching,
  isLoading,
  data,
  handlePageChange,
}) => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box mx={5} pt={2}>
      <Typography mb={2} component="h1" fontSize={24} fontWeight="bold">
        {title}
      </Typography>
      <Grid container justifyContent="center" spacing={2}>
        {isLoading || isFetching ? (
          <MovieCardSkeletonLoader />
        ) : (
          data?.results?.map((movie: Movie) => {
            return <MovieCard key={movie.id} media={movie} />;
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
          onChange={handlePageChange}
          page={data?.page || 1}
        />
      </Stack>
    </Box>
  );
};

export default MediaListWithPagination;
