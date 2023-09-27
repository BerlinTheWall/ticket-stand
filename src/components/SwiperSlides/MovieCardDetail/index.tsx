import { Box, Divider, Stack, Typography } from "@mui/material";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";

type Props = {
  title: string;
  rating: number;
  genres?: string[];
  isMd?: boolean;
};

const MovieCardDetail: React.FC<Props> = ({ title, rating, isMd }) => {
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
        <Box
          style={{
            listStyleType: "disc",
            display: "flex",
            gap: 20,
            opacity: 0.7,
          }}
          component="ul"
        >
          <Typography
            component="li"
            style={{ listStyleType: "none", fontSize: "14px" }}
          >
            Action
          </Typography>
          <Typography component="li" style={{ fontSize: "14px" }}>
            Movie
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default MovieCardDetail;
