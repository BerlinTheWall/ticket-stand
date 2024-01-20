import {
  Box,
  Button,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { convertTVSeriesGenreIdArraysToNames } from "@/utils/genre-converter";
import GenresList from "@/components/swiper-slides/genres-list";
import Image from "next/image";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { TVSeries } from "@/types/tv-series";

interface Props {
  tvSerie: TVSeries;
}

const SingleTVSerie: React.FC<Props> = ({ tvSerie }) => {
  const isMobile = useMediaQuery("(min-width:600px)");
  const isTablet = useMediaQuery("(min-width:900px)");

  return (
    <Box position="relative" height={isTablet ? 620 : 480}>
      <Box
        sx={{
          backgroundImage: `url(${
            "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces" +
            tvSerie.backdrop_path
          })`,
          height: "100%",
          backgroundPosition: "center center",
          objectFit: "cover",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "75%",
          background: (theme) =>
            `linear-gradient(to bottom, transparent 0%, ${theme.palette.background.paper} 95%)`,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "75%",
          borderBottomLeftRadius: "15px",
          borderBottomRightRadius: "15px",
          background: (theme) =>
            `linear-gradient(to top, transparent 0%, ${theme.palette.background.paper} 95%)`,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          borderBottomLeftRadius: "15px",
          borderBottomRightRadius: "15px",
          background: (theme) =>
            `linear-gradient(to left, transparent 0%, ${theme.palette.background.paper} 95%)`,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: { xs: "25%", md: "20%" },
          left: "3%",
          height: "80%",
          width: { xs: "95%", md: "95%" },
          px: 2,
          display: "flex",
          justifyContent: "start",
          gap: 5,
        }}
      >
        {isMobile && (
          <Box
            position="relative"
            borderRadius="15px"
            border="3px solid"
            borderColor="primary.main"
            minWidth={"30%"}
            sx={{ height: { xs: "70%", md: "90%" } }}
          >
            <Image
              src={"https://www.themoviedb.org/t/p/w500/" + tvSerie.poster_path}
              alt={tvSerie.original_name}
              width={100}
              height={100}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                backgroundPosition: "center center",
                borderRadius: "12px",
              }}
            />
          </Box>
        )}
        <Box
          sx={{
            width: { xs: "100%", sm: "65%" },
            paddingTop: { xs: 0, md: 5 },
          }}
        >
          <Box>
            <Typography
              sx={{ fontSize: "3rem", fontWeight: "bold" }}
              className="truncate-2-4"
              component="h1"
            >
              {tvSerie.original_name}
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              gap={1}
              mt={1}
              whiteSpace="nowrap"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <StarRateRoundedIcon sx={{ color: "warning.light", mb: 0.3 }} />
              <Typography fontWeight="bold">
                {tvSerie.vote_average.toFixed(1)}
              </Typography>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ borderRightWidth: "2px", bgcolor: "gray" }}
              />
              <Typography sx={{ opacity: 1, fontWeight: "bold" }}>
                {tvSerie.first_air_date.slice(0, 4)}
              </Typography>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ borderRightWidth: "2px", bgcolor: "gray" }}
              />
              <Typography>{tvSerie.number_of_seasons + " Seasons"}</Typography>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ borderRightWidth: "2px", bgcolor: "gray" }}
              />
              <GenresList
                genres={convertTVSeriesGenreIdArraysToNames(tvSerie.genres)}
              />
            </Stack>
            <Typography marginTop={1} fontSize="1rem">
              {tvSerie.overview}
            </Typography>
          </Box>
          <Grid container spacing={2} mt={0.5}>
            <Grid item sm={6} xs={6}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => {}}
                startIcon={<PlayCircleFilledIcon />}
                sx={{
                  whiteSpace: "nowrap",
                }}
              >
                Watch Trailer
              </Button>
            </Grid>
            <Grid item sm={6} xs={6}>
              <Button
                variant="outlined"
                color="secondary"
                fullWidth
                startIcon={<BookmarkBorderIcon />}
                sx={{
                  whiteSpace: "nowrap",
                }}
              >
                Add WatchList
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default SingleTVSerie;
