import { THEME_VALUES } from "@/MUI/theme";
import { Box, IconButton } from "@mui/material";

const NextPrevEl = ({
  className,
  Icon,
  sx,
}: {
  className: string;
  Icon: any;
  sx: any;
}) => {
  return (
    <Box
      sx={{
        px: 0.5,
        position: "absolute",
        top: 0,
        bottom: 0,
        color: "white",
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        "& .swiper-button-disabled": {
          display: "none",
        },
        ...sx,
      }}
    >
      <IconButton
        className={className}
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === THEME_VALUES.dark ? "grey.800" : "grey.500",
          color: "white",
          "&:hover": {
            bgcolor: "primary.main",
          },
        }}
      >
        {Icon}
      </IconButton>
    </Box>
  );
};

export default NextPrevEl;
