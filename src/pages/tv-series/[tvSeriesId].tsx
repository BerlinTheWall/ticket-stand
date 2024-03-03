import Box from "@mui/material/Box";
import MainLayout from "@/layout/main-layout";
import { GetServerSideProps, NextPage } from "next";
import { Credit } from "@/types/credits";
import Credits from "@/components/movies/single-movie/credits";
import Comments from "@/components/movies/comments";
import { Comment as CommentType } from "@/types/comment";
import { Season, TVSeries } from "@/types/tv-series";
import {
  getSingleTVSerieCredits,
  getSingleTVSeries,
  getTVSerieComments,
  getTVSerieRecommendations,
  getTVSeriesSeasons,
  getTvSeriesVideos,
} from "@/api/tv-series";
import SingleTVSerie from "@/components/tv-series/tv-series-card";
import MovieSwiperMd from "@/components/swiper-slides/movie-swiper-md";
import SeasonSwiper from "@/components/tv-series/season-slider";
import EpisodeSwiper from "@/components/tv-series/episode-slider";
import { useState } from "react";
import MovieCardSkeletonLoader from "@/components/movies/movie-card-skeleton-loader";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import makeQueryKey from "@/utils/make-query";
import queryKeys from "@/constants/query-keys";
import { useRouter } from "next/router";
import { Grid } from "@mui/material";
import { MovieVideo } from "@/types/movie";

interface Props {
  tvSerie: TVSeries;
  credits: Credit;
  series: TVSeries[];
  comments: CommentType[];
  trailer?: MovieVideo;
}

interface QueryResult {
  data: Season | undefined;
  isError: boolean;
  isLoading: boolean;
  isFetching: boolean;
}

const TVSeriesPage: NextPage<Props> = ({
  tvSerie,
  credits,
  series,
  comments,
  trailer,
}) => {
  const router = useRouter();

  const [selectedSeason, setSelectedSeason] = useState<number>(
    tvSerie.seasons[0].season_number
  );
  const { data, isError, isLoading, isFetching }: QueryResult = useQuery({
    queryKey: [
      makeQueryKey(queryKeys.tvSeries, {
        id: router.query.tvSeriesId,
        selectedSeason,
      }),
    ],

    queryFn: () =>
      getTVSeriesSeasons(Number(router.query.tvSeriesId), selectedSeason).then(
        (res) => res.data
      ),
  });

  if (isError) {
    return <div className="">isError </div>;
  }

  return (
    <MainLayout>
      <Box
        sx={{
          minHeight: "100vh",
        }}
        display={"flex"}
        flexDirection={"column"}
        gap={5}
      >
        <SingleTVSerie tvSerie={tvSerie} trailer={trailer} />
        <Credits casts={credits.cast} />
        <Box>
          <SeasonSwiper
            items={tvSerie.seasons}
            title="Seasons"
            setSeason={setSelectedSeason}
          />
          {isLoading || isFetching ? (
            <Grid container spacing={3} px={7} mt={1}>
              <MovieCardSkeletonLoader />
            </Grid>
          ) : (
            data && <EpisodeSwiper items={data?.episodes} title="Episodes" />
          )}
        </Box>
        <MovieSwiperMd items={series} title="Recommendations" name="recommendations" />
        <Comments comments={comments} />
      </Box>
    </MainLayout>
  );
};
export default TVSeriesPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const queryClient = new QueryClient();

  const tvSeriesId = ctx.params!.tvSeriesId as string;
  const { data: series } = await getTVSerieRecommendations(tvSeriesId);
  const tvSerie = await getSingleTVSeries(tvSeriesId);
  const credits = await getSingleTVSerieCredits(tvSeriesId);
  const comments = await getTVSerieComments(tvSeriesId);
  const videos = await getTvSeriesVideos(tvSeriesId);
  let trailer = null;
  videos.results.map((video) => {
    if (video.type === "Trailer") trailer = video;
  });
  if (trailer === null && videos.results[0] !== undefined)
    trailer = videos.results[0];

  await queryClient.prefetchQuery({
    queryKey: makeQueryKey(queryKeys.tvSeries, {}),
    queryFn: async () =>
      getTVSeriesSeasons(Number(tvSeriesId), 0).then(({ data }) => data),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      tvSerie,
      credits,
      series: series.results,
      comments: comments.results,
      trailer,
    },
  };
};
