import { Box, Grid, useMediaQuery } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { SINGLE_MOVIE_PAGE, SINGLE_TVSERIES_PAGE } from "@/constants/urls";
import { Media } from "@/types/media";
import MediaCardDetail from "@/components/media/media-card/media-card-detail";

type Props = {
  media: Media;
};

const MediaCard: React.FC<Props> = ({ media }) => {
  const isMobileXs = useMediaQuery("(max-width:380px)");
  const isMobile = useMediaQuery("(min-width:600px)");

  const linkHref =
    media.media_type === "movie" || media.original_title !== undefined
      ? `${SINGLE_MOVIE_PAGE}/${media.id}`
      : `${SINGLE_TVSERIES_PAGE}/${media.id}`;

  return (
    <Grid item xs={12} sm={6} md={3} lg={2.4}>
      <Box
        sx={{
          height: !isMobile && !isMobileXs ? 550 : 350,
          cursor: "pointer",
          position: "relative",
        }}
      >
        <Link href={linkHref}>
          <Image
            src={"https://www.themoviedb.org/t/p/w500/" + media.poster_path}
            alt={
              media.media_type === "movie"
                ? media.original_title!
                : media.original_name!
            }
            width={1000}
            height={100}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              backgroundPosition: "center center",
              borderRadius: "15px",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "45%",
              borderBottomLeftRadius: "12px",
              borderBottomRightRadius: "12px",

              background: (theme) =>
                `linear-gradient(to bottom, transparent 0%, ${theme.palette.background.paper} 50%)`,
            }}
          />
          <MediaCardDetail
            title={
              media.media_type === "movie" || media.original_title !== undefined
                ? media.original_title!
                : media.original_name!
            }
            rating={media.vote_average}
            genres={media.genre_ids}
          />
        </Link>
      </Box>
    </Grid>
  );
};

export default MediaCard;
