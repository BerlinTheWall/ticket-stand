import { useRouter } from "next/router";
import MainLayout from "@/layout/main-layout";
import MediaListWithPagination from "@/components/media/media-lists-paginatation";
import { GetServerSideProps } from "next";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import makeQueryKey from "@/utils/make-query";
import queryKeys from "@/constants/query-keys";
import { QueryResult } from "@/types/general";
import { Movie } from "@/types/movie";
import { getTrendingMovies } from "@/api/movies";

const TrendingMoviesPage = () => {
  const router = useRouter();
  const queryParams = router.isReady && (router.query as any);

  const { data, isError, isLoading, isFetching }: QueryResult<Movie> = useQuery(
    {
      queryKey: [
        makeQueryKey(queryKeys.trendingMovies, {
          queryParams,
        }),
      ],

      queryFn: () => getTrendingMovies(queryParams).then((res) => res),
    }
  );

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
        title={"Trending Movies"}
        isLoading={isLoading}
        isFetching={isFetching}
        data={data!!}
        isMovie={false}
        handlePageChange={handleChange}
      />
    </MainLayout>
  );
};

export default TrendingMoviesPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: makeQueryKey(queryKeys.trendingMovies, {}),
    queryFn: async () => getTrendingMovies().then((data) => data),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
