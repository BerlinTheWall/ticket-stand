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

interface Props {
  movies: Movie[];
}
export default function Home({ movies }: Props) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
      }}
    >
      <SwiperBanner movies={movies} />
      <SearchBar />
      <MovieSwiperXl title="Just Release" movies={movies} />
      <MovieSwiperSm title="Movies" movies={movies} />
      <MovieSwiperFeatured movies={movies} />
      <MovieSwiperMd title="Movies" movies={movies} />
    </Box>
  );
}

Home.PageLayout = MainLayout;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: movies } = await getPopularMovies({ page: 1 });
  return {
    props: {
      movies: movies.results,
    },
  };
};
