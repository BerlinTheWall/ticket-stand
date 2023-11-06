import { Box, Divider, Stack, Typography } from "@mui/material";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { convertMovieGenreIdsToNames } from "@/utils/genre-converter";
import GenresList from "@/components/swiper-slides/genres-list";

type Props = {
  title: string;
  rating: number;
  genres: number[];
};

const MovieCardDetail: React.FC<Props> = ({ title, rating, genres }) => {
  return (
    <Box
      sx={{
        width: "100%",
        px: { xs: "6px", sm: "10px" },
        position: "absolute",
      }}
      bottom={6}
    >
      <Typography
        sx={{ fontWeight: "bold", fontSize: "18px" }}
        className="truncate-1"
        component="h3"
      >
        {title}
      </Typography>

      <Stack
        direction="row"
        alignItems="center"
        gap={1}
        mt={1}
        whiteSpace="nowrap"
      >
        <StarRateRoundedIcon sx={{ color: "warning.light", mb: 0.3 }} />
        <Typography fontWeight="bold">{rating}</Typography>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ borderRightWidth: "2px", color: "gray" }}
        />
        <GenresList genres={convertMovieGenreIdsToNames(genres)} />
      </Stack>
    </Box>
  );
};

export default MovieCardDetail;
