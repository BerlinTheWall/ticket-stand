import Box from "@mui/material/Box";
import MainLayout from "@/layout/main-layout";
import { GetServerSideProps, NextPage } from "next";
import MovieCardSkeletonLoader from "@/components/movies/movie-card-skeleton-loader";
import { SingleListType } from "@/types/list";
import { getSingleList } from "@/api/lists";
import { useRouter } from "next/router";
import {
  Button,
  Grid,
  Link,
  Pagination,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { PROFILE_PAGE } from "@/constants/urls";
import MediaCard from "@/components/media/media-card";
import { Media } from "@/types/media";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import makeQueryKey from "@/utils/make-query";
import queryKeys from "@/constants/query-keys";
import HeadTitle from "@/components/head-title";
import ErrorMessage from "@/components/error-message";

interface QueryResult {
  data: SingleListType | undefined;
  isError: boolean;
  isLoading: boolean;
  isFetching: boolean;
}

const ListPage: NextPage = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const router = useRouter();

  const { data, isError, isLoading, isFetching }: QueryResult = useQuery({
    queryKey: [
      makeQueryKey(queryKeys.list, {
        page: router.query.page || 1,
      }),
    ],

    queryFn: () =>
      getSingleList(
        router.query.listId as string,
        Number(router.query.page) || 1
      ).then((res) => res.data),
  });

  const handleChange = (event: any, value: number) => {
    router.replace({
      query: { ...router.query, page: value },
    });
  };

  if (isError) {
    return <ErrorMessage />;
  }

  return (
    <MainLayout>
      <HeadTitle title={`List ${data?.name}`} />
      <Box
        sx={{
          minHeight: "100vh",
        }}
        display={"flex"}
        flexDirection={"column"}
        px={5}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mt={2}
        >
          <Stack direction={"row"} alignItems={"center"} gap={1}>
            <Typography
              my={2}
              component="h1"
              fontSize={24}
              fontWeight="bold"
              color={"primary.dark"}
            >
              {data?.name}
            </Typography>
            <Typography fontSize={24} fontWeight="bold">
              List
            </Typography>
          </Stack>
          <Box>
            <Link href={PROFILE_PAGE}>
              <Button variant="contained">Back to Lists</Button>
            </Link>
          </Box>
        </Stack>
        <Box>
          <Grid container spacing={2}>
            {isLoading || isFetching ? (
              <MovieCardSkeletonLoader />
            ) : (
              <>
                {data?.items?.map((media: Media) => {
                  return <MediaCard key={media.id} media={media} />;
                })}
              </>
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
      </Box>
    </MainLayout>
  );
};
export default ListPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const queryClient = new QueryClient();

  const listId = ctx.params!.listId as string;

  await queryClient.prefetchQuery({
    queryKey: makeQueryKey(queryKeys.list, {
      page: ctx.query.page || 1,
    }),
    queryFn: async () =>
      getSingleList(listId, Number(ctx.query.page || 1)).then(
        ({ data }) => data
      ),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
