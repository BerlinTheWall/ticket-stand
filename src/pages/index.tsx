import Box from "@mui/material/Box";
import MainLayout from "@/layout/main-layout";
import MovieSwiperXl from "@/components/swiper-slides/movie-swiper-xl";
import { GetServerSideProps } from "next";
import { getPopularMovies } from "@/api/movies";
import { Movie } from "@/types/movie";
import MovieSwiperMd from "@/components/swiper-slides/movie-swiper-md";
import SwiperBanner from "@/components/swiper-slides/swiper-banner";
import MovieSwiperSm from "@/components/swiper-slides/movie-swiper-sm";
import MovieSwiperFeatured from "@/components/swiper-slides/movie-swiper-featured";
import SearchBar from "@/components/search-bar";
import { getPopularTVSeries } from "@/api/tv-series";
import { TVSeries } from "@/types/tv-series";

interface Props {
  movies: Movie[];
  tvSeries: TVSeries[];
}
export default function Home({ movies, tvSeries }: Props) {
  return (
    <MainLayout>
      <Box
        sx={{
          minHeight: "100vh",
        }}
      >
        <SwiperBanner movies={movies} />
        <SearchBar />
        <MovieSwiperXl title="Just Release" movies={movies} />
        <MovieSwiperMd title="TV Series" items={tvSeries} />

        <MovieSwiperSm title="Movies" movies={movies} />
        <MovieSwiperFeatured movies={movies} />
        <MovieSwiperMd title="Movies" items={movies} />
      </Box>
    </MainLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: movies } = await getPopularMovies({ page: 1 });
  const { data: tvSeries } = await getPopularTVSeries({ page: 1 });
  return {
    props: {
      movies: movies.results,
      tvSeries: tvSeries.results,
    },
  };
};
