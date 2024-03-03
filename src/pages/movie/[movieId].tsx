import Box from "@mui/material/Box";
import MainLayout from "@/layout/main-layout";
import { GetServerSideProps, NextPage } from "next";
import { Movie, MovieVideo } from "@/types/movie";
import {
  getMovieComments,
  getMovieRecommendations,
  getMovieVideos,
  getSingleMovie,
  getSingleMovieCredits,
} from "@/api/movies";
import SingleMovie from "@/components/movies/single-movie";
import { Credit } from "@/types/credits";
import Credits from "@/components/movies/single-movie/credits";
import MovieSwiperSm from "@/components/swiper-slides/movie-swiper-sm";
import Comments from "@/components/movies/comments";
import { Comment as CommentType } from "@/types/comment";

interface Props {
  movie: Movie;
  credits: Credit;
  movies: Movie[];
  comments: CommentType[];
  trailer: MovieVideo;
}

const MoviePage: NextPage<Props> = ({
  movie,
  credits,
  movies,
  comments,
  trailer,
}) => {
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
        <SingleMovie movie={movie} trailer={trailer} />
        <Credits casts={credits.cast} />
        <MovieSwiperSm
          items={movies}
          title="Recommended for you"
          name="recommendedForYou"
        />
        <Comments comments={comments} />
      </Box>
    </MainLayout>
  );
};
export default MoviePage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const movieId = ctx.params!.movieId as string;
  const { data: movies } = await getMovieRecommendations(movieId);
  const movie = await getSingleMovie(movieId);
  const credits = await getSingleMovieCredits(movieId);
  const comments = await getMovieComments(movieId);
  const videos = await getMovieVideos(movieId);
  let trailer;
  videos.results.map((video) => {
    if (video.type === "Trailer") trailer = video;
  });
  return {
    props: {
      movie,
      credits,
      movies: movies.results,
      comments: comments.results,
      trailer,
    },
  };
};
