import { Box, Divider, Stack, Typography } from "@mui/material";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";

type Props = {
  title?: string;
  rating?: string;
  genres?: string[];
};

const MovieCardDetail: React.FC<Props> = () => {
  return (
    <Box
      sx={{
        width: "100%",
        px: { xs: "20px", sm: "16px" },
      }}
      bottom={12}
      position={"absolute"}
    >
      <Typography sx={{ fontWeight: "bold", fontSize: "18px" }} component="h3">
        Star Wars
      </Typography>

      <Stack
        direction={"row"}
        alignItems={"center"}
        gap={1}
        mt={1}
        whiteSpace={"nowrap"}
      >
        <StarRateRoundedIcon sx={{ color: "#f7cf4b", mb: 0.3 }} />
        <Typography fontWeight={"bold"}>4.8</Typography>
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
