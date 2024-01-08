import { profileListType } from "@/types/general";
import { Box, Tooltip, Stack, Typography, useTheme } from "@mui/material";
import { useState } from "react";

type Props = {
  title: string;
  setType: (value: profileListType) => void;
};

const MovieTooltip: React.FC<Props> = ({ title, setType }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isHover, setIsHover] = useState(false);
  const theme = useTheme();

  const handleMenuClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (option: profileListType) => {
    setAnchorEl(null);
    if (option) {
      setType(option);
    }
  };

  return (
    <Box
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Tooltip
        title={
          <Stack direction={"column"} gap={3}>
            <Typography
              fontWeight={700}
              component="h3"
              onClick={() => handleMenuClose("movies")}
              sx={{
                pl: 1,
                cursor: "pointer",
                borderLeft: `2px solid ${theme.palette.primary.main}`,
                transition: "padding-left 0.2s ease-in-out",
                ":hover": {
                  pl: 1.5,
                  color: theme.palette.primary.main,
                },
              }}
            >
              Movies
            </Typography>
            <Typography
              fontWeight={700}
              component="h3"
              onClick={() => handleMenuClose("tv")}
              sx={{
                pl: 1,
                cursor: "pointer",
                borderLeft: `2px solid ${theme.palette.primary.main}`,
                transition: "padding-left 0.2s ease-in-out",
                ":hover": {
                  pl: 1.5,
                  color: theme.palette.primary.main,
                },
              }}
            >
              TV Series
            </Typography>
          </Stack>
        }
        placement="right-start"
        componentsProps={{
          tooltip: {
            sx: {
              background: `${theme.palette.background.paper}f6`,
              color: theme.palette.text.primary,
              boxShadow: 2,
              px: 2.5,
              py: 1.5,
              borderRadius: 5,
            },
          },
          arrow: {
            sx: {
              color: theme.palette.background.paper,
            },
          },
        }}
        arrow
        open={isHover}
      >
        <Box
          aria-haspopup="true"
          sx={{
            display: "block",
            fontSize: "14px",
          }}
          color="secondary"
        >
          {title}
        </Box>
      </Tooltip>
    </Box>
  );
};

export default MovieTooltip;
