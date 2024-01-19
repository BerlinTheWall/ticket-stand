import Box from "@mui/material/Box";
import MainLayout from "@/layout/main-layout";
import { GetServerSideProps, NextPage } from "next";
import {
  getMovieComments,
  getMovieRecommendations,
  getSingleMovie,
  getSingleMovieCredits,
} from "@/api/movies";
import SingleMovie from "@/components/movies/single-movie";
import { Credit } from "@/types/credits";
import Credits from "@/components/movies/single-movie/credits";
import MovieSwiperSm from "@/components/swiper-slides/movie-swiper-sm";
import Comments from "@/components/movies/comments";
import { Comment as CommentType } from "@/types/comment";
import { Season, TVSeries } from "@/types/tv-series";
import { getSingleTVSeries, getTVSeriesSeasons } from "@/api/tv-series";
import SingleTVSerie from "@/components/tv-series/tv-series-card";
import MovieSwiperMd from "@/components/swiper-slides/movie-swiper-md";
import SeasonSwiper from "@/components/tv-series/season-slider";
import EpisodeSwiper from "@/components/tv-series/episode-slider";
import { useGetTVSeriesSeasons } from "@/api/tv-series/hooks/useGetEpisodes";
import { useEffect, useState } from "react";
import MovieCardSkeletonLoader from "@/components/movies/movie-card-skeleton-loader";

interface Props {
  tvSerie: TVSeries;
  // season: Season;
  // credits: Credit;
  // tvSeries: TVSeries[];
  // comments: CommentType[];
}

const TVSeriesPage: NextPage<Props> = ({
  tvSerie,
  // season,
  // credits,
  // tvSeries,
  // comments,
}) => {
  const [selectedSeason, setSelectedSeason] = useState<number>(
    tvSerie.seasons[0].season_number
  );
  console.log(tvSerie);
  const { data, isLoading, isFetching, isError, isSuccess } =
    useGetTVSeriesSeasons(tvSerie.id, selectedSeason);

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
        <SingleTVSerie tvSerie={tvSerie} />
        {/* <Credits casts={credits.cast} /> */}
        {/* <MovieSwiperMd items={season} /> */}
        <Box>
          <SeasonSwiper
            items={tvSerie.seasons}
            title="Seasons"
            setSeason={setSelectedSeason}
          />
          {isLoading || isFetching ? (
            <SkeletonLoader />
          ) : (
            <EpisodeSwiper items={data?.episodes} title="Episodes" />
          )}
        </Box>
        {/* <Comments comments={comments} /> */}
      </Box>
    </MainLayout>
  );
};
export default TVSeriesPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const tvSeriesId = ctx.params!.tvSeriesId as string;
  console.log(tvSeriesId);
  //   const { data: movies } = await getMovieRecommendations(tvSeriesId);
  const tvSerie = await getSingleTVSeries(tvSeriesId);
  // const season = await getTVSeriesSeasons(tvSeriesId, 0);
  //   const credits = await getSingleMovieCredits(tvSeriesId);
  //   const comments = await getMovieComments(tvSeriesId);
  return {
    props: {
      tvSerie,
      // season,
      //   credits,
      //   movies: movies.results,
      //   comments: comments.results,
    },
  };
};

const SkeletonLoader = () => {
  return Array(20)
    .fill(0)
    .map((_, i) => {
      return <MovieCardSkeletonLoader key={i} />;
    });
};
