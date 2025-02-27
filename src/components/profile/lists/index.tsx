import { useLists } from "@/api/profile/hooks/useLists";
import ErrorMessage from "@/components/error-message";
import CreateListModal from "@/components/lists/create-list-modal";
import ListCard from "@/components/lists/list-card";
import MovieCardSkeletonLoader from "@/components/movies/movie-card-skeleton-loader";
import { AppContext } from "@/context/AppContext";
import { ContextValue } from "@/types/general";
import { ListsType } from "@/types/list";
import Images from "@/utils/image-helper";
import {
  Box,
  Grid,
  Pagination,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useRouter } from "next/router";
import { useContext } from "react";

const listCardImages = [
  Images.Background1,
  Images.Background2,
  Images.Background3,
  Images.Background4,
  Images.Background5,
  Images.Background6,
  Images.Background7,
  Images.Background8,
  Images.Background9,
  Images.Background10,
  Images.Background11,
  Images.Background12,
];

const Lists: React.FC = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const router = useRouter();
  const { user } = useContext(AppContext) as ContextValue;

  const { data, isLoading, isFetching, isError, refetch } = useLists(user!?.id);

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
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignContent={"center"}
        alignItems={"center"}
      >
        <Typography component="h1" fontSize={24} fontWeight="bold" pl={0}>
          My Lists
        </Typography>
        <CreateListModal refetch={refetch} />
      </Stack>
      <Grid container justifyContent="start" pt={3} spacing={2}>
        {isLoading || isFetching ? (
          <MovieCardSkeletonLoader />
        ) : (
          data?.results?.map((list: ListsType, index: number) => {
            return (
              <ListCard
                key={list.id}
                list={list}
                backgroundImage={listCardImages[index]}
              />
            );
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

export default Lists;
