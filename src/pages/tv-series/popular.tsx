import { useRouter } from "next/router";
import MainLayout from "@/layout/main-layout";
import MediaListWithPagination from "@/components/media/media-lists-paginatation";
import { GetServerSideProps } from "next";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import makeQueryKey from "@/utils/make-query";
import queryKeys from "@/constants/query-keys";
import { getPopularTVSeries } from "@/api/tv-series";
import { QueryResult } from "@/types/general";
import { TVSeries } from "@/types/tv-series";
import HeadTitle from "@/components/head-title";
import ErrorMessage from "@/components/error-message";

const PopularTVSeriesPage = () => {
  const router = useRouter();
  const queryParams = router.isReady && (router.query as any);

  const { data, isError, isLoading, isFetching }: QueryResult<TVSeries> =
    useQuery({
      queryKey: [
        makeQueryKey(queryKeys.popularTVSeries, {
          queryParams,
        }),
      ],

      queryFn: () => getPopularTVSeries(queryParams).then((res) => res),
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
      <HeadTitle title="Popular TV Series" />
      <MediaListWithPagination
        title={"Popular TV Series"}
        isLoading={isLoading}
        isFetching={isFetching}
        data={data!!}
        isMovie={false}
        handlePageChange={handleChange}
      />
    </MainLayout>
  );
};

export default PopularTVSeriesPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: makeQueryKey(queryKeys.popularTVSeries, {}),
    queryFn: async () => getPopularTVSeries().then((data) => data),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
