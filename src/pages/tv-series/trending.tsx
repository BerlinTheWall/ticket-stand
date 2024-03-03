import { useRouter } from "next/router";
import MainLayout from "@/layout/main-layout";
import MediaListWithPagination from "@/components/media/media-lists-paginatation";
import { GetServerSideProps } from "next";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import makeQueryKey from "@/utils/make-query";
import queryKeys from "@/constants/query-keys";
import { QueryResult } from "@/types/general";
import { TVSeries } from "@/types/tv-series";
import { getTrendingTVSeries } from "@/api/tv-series";

const TrendingTVSeriesPage = () => {
  const router = useRouter();
  const queryParams = router.isReady && (router.query as any);

  const { data, isError, isLoading, isFetching }: QueryResult<TVSeries> =
    useQuery({
      queryKey: [
        makeQueryKey(queryKeys.trendingTVSeries, {
          queryParams,
        }),
      ],

      queryFn: () => getTrendingTVSeries(queryParams).then((res) => res),
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
        title={"Trending TV Series"}
        isLoading={isLoading}
        isFetching={isFetching}
        data={data!!}
        isMovie={false}
        handlePageChange={handleChange}
      />
    </MainLayout>
  );
};

export default TrendingTVSeriesPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: makeQueryKey(queryKeys.trendingTVSeries, {}),
    queryFn: async () => getTrendingTVSeries().then((data) => data),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
