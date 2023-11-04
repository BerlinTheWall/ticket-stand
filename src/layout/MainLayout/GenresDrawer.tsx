import { MovieGenre } from "@/constants/movie-genre";
import {
  Box,
  Button,
  Grid,
  Stack,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";

const GenresDrawer: React.FC = ({ item }: any) => {
  const theme = useTheme();
  const [isHover, setIsHover] = useState(false);

  return (
    <Box
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Tooltip
        title={
          <Box>
            <Grid container spacing={0}>
              {MovieGenre.map((genre) => {
                return (
                  <Grid item md={4} key={genre.id} sx={{ px: 2, my: 2 }}>
                    <Typography
                      fontWeight={700}
                      component="h3"
                      sx={{
                        pl: 1,
                        cursor: "pointer",
                        borderLeft: "2px solid #00925D",
                        ":hover": {
                          pl: 1.5,
                          // borderBottom: "2px solid #00925D",
                        },
                      }}
                      onClick={() => {
                        console.log(genre.name);
                      }}
                    >
                      {genre.name}
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
            <Stack
              spacing={2}
              component="ul"
              sx={{
                listStyle: "none",
                p: 2,
              }}
            ></Stack>
          </Box>
        }
        placement="bottom-start"
        componentsProps={{
          tooltip: {
            sx: {
              background: "rgba(3, 3, 3, 0.9)",
              color: theme.palette.text.primary,
              boxShadow: 2,
              // filter: "blur(2px)",
              px: 2.5,
              py: 1.5,
              minWidth: 530,
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
        <span>
          <Button
            aria-haspopup="true"
            sx={{ my: 2, display: "block", fontSize: "14px" }}
            color="secondary"
          >
            DISCOVER
          </Button>
        </span>
      </Tooltip>
    </Box>
  );
};
export default GenresDrawer;
