import { Box, Divider, Stack, Typography } from "@mui/material";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import GenresList from "../GenresList";
import { convertMovieGenreIdsToNames } from "@/helper/genreConverter";

type Props = {
  title: string;
  rating: number;
  genres: number[];
  isMd?: boolean;
};

const MovieCardDetail: React.FC<Props> = ({ title, rating, genres, isMd }) => {
  console.log(genres);

  return (
    <Box
      sx={{
        width: "100%",
        px: { xs: "6px", sm: "16px" },
      }}
      bottom={isMd ? 6 : 12}
      position={"absolute"}
    >
      <Typography sx={{ fontWeight: "bold", fontSize: "18px" }} component="h3">
        {title}
      </Typography>

      <Stack
        direction={"row"}
        alignItems={"center"}
        gap={1}
        mt={1}
        whiteSpace={"nowrap"}
      >
        <StarRateRoundedIcon sx={{ color: "#f7cf4b", mb: 0.3 }} />
        <Typography fontWeight={"bold"}>{rating}</Typography>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ borderRightWidth: "2px", color: "gray" }}
        ></Divider>
        <GenresList genres={convertMovieGenreIdsToNames(genres)} />
      </Stack>
    </Box>
  );
};

export default MovieCardDetail;
