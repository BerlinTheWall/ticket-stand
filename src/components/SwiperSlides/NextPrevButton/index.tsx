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
        // boxShadow: (theme) =>
        //   `inset -38px 0px 67px 5px ${theme.palette.background.default}`,
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
          bgcolor: "#403e3ee0",
          color: "text.primary",
          "&:hover": {
            bgcolor: (theme) => ` ${theme.palette.primary.main}`,
          },
        }}
      >
        {Icon}
      </IconButton>
    </Box>
  );
};

export default NextPrevEl;
