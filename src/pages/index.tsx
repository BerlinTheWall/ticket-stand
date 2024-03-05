import Box from "@mui/material/Box";
import MainLayout from "@/layout/main-layout";
import MovieSwiperXl from "@/components/swiper-slides/movie-swiper-xl";
import { GetServerSideProps } from "next";
import {
  getPopularMovies,
  getTopRatedMovies,
  getTrendingMovies,
} from "@/api/movies";
import { Movie } from "@/types/movie";
import MovieSwiperMd from "@/components/swiper-slides/movie-swiper-md";
import SwiperBanner from "@/components/swiper-slides/swiper-banner";
import MovieSwiperSm from "@/components/swiper-slides/movie-swiper-sm";
import MovieSwiperFeatured from "@/components/swiper-slides/movie-swiper-featured";
import SearchBar from "@/components/search-bar";
import {
  getPopularTVSeries,
  getTopRatedTVSeries,
  getTrendingTVSeries,
} from "@/api/tv-series";
import { TVSeries } from "@/types/tv-series";
import {
  POPULAR_MOVIES_PAGE,
  POPULAR_TVSERIES_PAGE,
  TOP_RATED_MOVIES_PAGE,
  TOP_RATED_TVSERIES_PAGE,
  TRENDING_TVSERIES_PAGE,
} from "@/constants/urls";
import HeadTitle from "@/components/head-title";

interface Props {
  movies: Movie[];
  tvSeries: TVSeries[];
  trendingMovies: Movie[];
  trendingTVSeries: TVSeries[];
  topRatedMovies: Movie[];
  topRatedTVSeries: TVSeries[];
}
export default function Home({
  movies,
  tvSeries,
  trendingMovies,
  trendingTVSeries,
  topRatedMovies,
  topRatedTVSeries,
}: Props) {
  return (
    <MainLayout>
      <HeadTitle title="Home" />
      <Box
        sx={{
          minHeight: "100vh",
        }}
      >
        <SwiperBanner movies={movies} />
        <SearchBar />
        <MovieSwiperXl
          title="Just Release"
          movies={movies}
          href={POPULAR_MOVIES_PAGE}
          name="justRelease"
        />

        <MovieSwiperMd
          title="TV Series"
          items={tvSeries}
          href={POPULAR_TVSERIES_PAGE}
          name="popularTv"
        />
        <MovieSwiperSm
          title="Top Rated Movies"
          items={topRatedMovies}
          href={TOP_RATED_MOVIES_PAGE}
          name="topRatedMovies"
        />
        <MovieSwiperFeatured movies={trendingMovies} />
        <MovieSwiperSm
          title="Top Rated TV Series"
          items={topRatedTVSeries}
          href={TOP_RATED_TVSERIES_PAGE}
          name="topRatedTv"
        />
        <MovieSwiperMd
          title="Trending TV Series"
          items={trendingTVSeries}
          href={TRENDING_TVSERIES_PAGE}
          name="trendingTv"
        />
      </Box>
    </MainLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const movies = await getPopularMovies({ page: 1 });
  const tvSeries = await getPopularTVSeries({ page: 1 });
  const trendingMovies = await getTrendingMovies({ page: 1 });
  const trendingTVSeries = await getTrendingTVSeries({ page: 1 });
  const topRatedMovies = await getTopRatedMovies({ page: 1 });
  const topRatedTVSeries = await getTopRatedTVSeries({ page: 1 });
  return {
    props: {
      movies: movies.results,
      tvSeries: tvSeries.results,
      trendingMovies: trendingMovies.results,
      trendingTVSeries: trendingTVSeries.results,
      topRatedMovies: topRatedMovies.results,
      topRatedTVSeries: topRatedTVSeries.results,
    },
  };
};
