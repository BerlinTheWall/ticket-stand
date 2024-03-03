import { useRouter } from "next/router";
import MainLayout from "@/layout/main-layout";
import MediaListWithPagination from "@/components/media/media-lists-paginatation";
import { GetServerSideProps } from "next";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import queryKeys from "@/constants/query-keys";
import makeQueryKey from "@/utils/make-query";
import { QueryResult } from "@/types/general";
import { TVSeries } from "@/types/tv-series";
import { getTopRatedMovies } from "@/api/movies";

const TopRatedMoviesPage = () => {
  const router = useRouter();
  const queryParams = router.isReady && (router.query as any);

  const { data, isError, isLoading, isFetching }: QueryResult<TVSeries> =
    useQuery({
      queryKey: [
        makeQueryKey(queryKeys.topMovies, {
          queryParams,
        }),
      ],

      queryFn: () => getTopRatedMovies(queryParams).then((res) => res),
    });

  const handleChange = (event: any, value: number) => {
    router.replace({
      query: { ...router.query, page: value },
    });
  };

  if (isError) {
    return <div className="">isError</div>;
  }

  return (
    <MainLayout needMargin>
      <MediaListWithPagination
        title={"Top Rated Movies"}
        isLoading={isLoading}
        isFetching={isFetching}
        data={data!!}
        isMovie={false}
        handlePageChange={handleChange}
      />
    </MainLayout>
  );
};

export default TopRatedMoviesPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: makeQueryKey(queryKeys.topMovies, {}),
    queryFn: async () => getTopRatedMovies().then((data) => data),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
