import { Box, Divider, Stack, Typography } from "@mui/material";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import MovieIcon from "@mui/icons-material/Movie";
import { profileListType } from "@/types/general";

type Props = {
  title: string;
  count: number;
  favoriteCount: number;
  listType: profileListType;
  isMd?: boolean;
};

const ListCardDetail: React.FC<Props> = ({
  title,
  count,
  favoriteCount,
  listType,
}) => {
  
  return (
    <Box
      sx={{
        width: "100%",
        px: "18px",
        position: "absolute",
        bottom: 18,
      }}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography
          sx={{ fontWeight: "bold", fontSize: "28px" }}
          className={"truncate-1"}
          component="h2"
        >
          {title}
        </Typography>
        {listType === "movie" ? (
          <MovieIcon sx={{ mb: 0.3 }} />
        ) : (
          <LiveTvIcon sx={{ mb: 0.3 }} />
        )}
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        gap={1}
        mt={1}
        whiteSpace="nowrap"
      >
        <Box
          sx={{
            border: "1px solid",
            borderColor: "primary.dark",
            borderRadius: 5,
            px: 1,
            py: 0.2,
          }}
        >
          <Typography pt={0.2}>
            {listType === "movie" ? "Movies" : "TV Series"}:{" "}
            <Typography component={"span"} fontWeight={"bold"}>
              {count}
            </Typography>
          </Typography>
        </Box>
        <Stack
          direction={"row"}
          alignItems={"center"}
          gap={0.5}
          sx={{
            border: "1px solid",
            borderColor: "primary.dark",
            borderRadius: 5,
            px: 1,
          }}
        >
          <Typography
            display={"flex"}
            alignItems={"center"}
            py={0.3}
            gap={0.5}
            fontWeight={"bold"}
          >
            {favoriteCount}
          </Typography>
          <FavoriteIcon sx={{ color: "primary.dark" }} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default ListCardDetail;
