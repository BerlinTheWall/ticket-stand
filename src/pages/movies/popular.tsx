import { useRouter } from "next/router";
import MainLayout from "@/layout/main-layout";
import MediaListWithPagination from "@/components/media/media-lists-paginatation";
import { GetServerSideProps } from "next";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import makeQueryKey from "@/utils/make-query";
import queryKeys from "@/constants/query-keys";
import { QueryResult } from "@/types/general";
import { TVSeries } from "@/types/tv-series";
import { getPopularMovies } from "@/api/movies";
import HeadTitle from "@/components/head-title";
import ErrorMessage from "@/components/error-message";

const PopularMoviesPage = () => {
  const router = useRouter();
  const queryParams = router.isReady && (router.query as any);

  const { data, isError, isLoading, isFetching }: QueryResult<TVSeries> =
    useQuery({
      queryKey: [
        makeQueryKey(queryKeys.popularMovies, {
          queryParams,
        }),
      ],

      queryFn: () => getPopularMovies(queryParams).then((res) => res),
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
    <MainLayout needMargin>
      <HeadTitle title="Popular Movies" />

      <MediaListWithPagination
        title={"Popular Movies"}
        isLoading={isLoading}
        isFetching={isFetching}
        data={data!!}
        isMovie={false}
        handlePageChange={handleChange}
      />
    </MainLayout>
  );
};

export default PopularMoviesPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: makeQueryKey(queryKeys.popularMovies, {}),
    queryFn: async () => getPopularMovies().then((data) => data),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
