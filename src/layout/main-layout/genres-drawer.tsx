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
import Link from "next/link";
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
                  <Grid item md={4} key={genre.id} sx={{ px: 2, my: 1.2 }}>
                    <Link href={`/list?with_genres=${genre.id}`}>
                      <Typography
                        fontWeight={700}
                        component="h3"
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
                        {genre.name}
                      </Typography>
                    </Link>
                  </Grid>
                );
              })}
            </Grid>
            <Stack
              spacing={2}
              component="ul"
              sx={{
                listStyle: "none",
              }}
            ></Stack>
          </Box>
        }
        placement="bottom-start"
        componentsProps={{
          tooltip: {
            sx: {
              background: `${theme.palette.background.paper}f6`,
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
