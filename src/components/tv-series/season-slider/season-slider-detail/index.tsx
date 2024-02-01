import { Box, Divider, Stack, Typography } from "@mui/material";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";

type Props = {
  title: string;
  rating: number;
  episodeCount: number;
  isEpisode?: boolean;
};

const SeasonCardDetail: React.FC<Props> = ({
  title,
  rating,
  episodeCount,
  isEpisode = false,
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        px: { xs: "6px", sm: "8px" },
        position: "absolute",
      }}
      bottom={12}
    >
      <Typography
        sx={{ fontWeight: "bold", fontSize: "18px" }}
        className={"truncate-1"}
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
        <Typography fontWeight="bold">{rating.toFixed(1)}</Typography>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ borderRightWidth: "2px", color: "gray" }}
        />
        <Typography fontWeight="500" color={"primary.dark"}>
          {!isEpisode ? episodeCount + " Episodes" : "Episode " + episodeCount}
        </Typography>
      </Stack>
    </Box>
  );
};

export default SeasonCardDetail;
