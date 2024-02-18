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
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { useIsLoggedIn } from "@/hooks/useIsLoggedIn";
import { ListsType } from "@/types/list";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { addMovieToList } from "@/api/lists";
import { toast } from "react-toastify";

type Props = {
  list: ListsType[];
  mediaId: string;
  isMovie: boolean;
};

const AddToListDrawer: React.FC<Props> = ({ list, mediaId, isMovie }) => {
  const theme = useTheme();
  const [isHover, setIsHover] = useState(false);

  const loggedIn = useIsLoggedIn();

  const handleAddToList = async (list: ListsType) => {
    try {
      if (isMovie) {
        await addMovieToList(list.id, mediaId);
        toast.success(`Added to ${list.name} list`);
      } else {
        toast.error(`Sorry! Add TV Serie API to list isn't available :(`);
      }
    } catch (error: any) {
      if (error.response.status === 403) {
        toast.error(error.response.data.status_message);
      } else toast.error("Failed to add to list");
    }
  };

  return (
    <Box
      onMouseOver={() => {
        loggedIn && setIsHover(true);
      }}
      onMouseLeave={() => setIsHover(false)}
    >
      <Tooltip
        title={
          <Box>
            <Grid>
              <Typography
                component={"h2"}
                fontSize={20}
                fontWeight={700}
                color={"primary.dark"}
                borderBottom={"1px solid"}
              >
                Lists
              </Typography>
              {list.map((item) => {
                return (
                  <Grid item md={12} key={item.id} sx={{ px: 0, my: 1.5 }}>
                    <Stack
                      direction={"row"}
                      sx={{
                        cursor: "pointer",
                        ":hover": {
                          color: theme.palette.primary.main,
                        },
                      }}
                    >
                      <AddCircleOutlineIcon />
                      <Typography
                        fontWeight={500}
                        component="h3"
                        sx={{
                          pl: 1,
                          transition: "padding-left 0.2s ease-in-out",
                          ":hover": {
                            pl: 1.5,
                          },
                        }}
                        onClick={() => handleAddToList(item)}
                      >
                        {item.name}
                      </Typography>
                    </Stack>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        }
        placement="bottom-start"
        componentsProps={{
          tooltip: {
            sx: {
              background: `${theme.palette.background.paper}`,
              color: theme.palette.text.primary,
              boxShadow: 2,
              px: 2.5,
              py: 1.5,
              minWidth: 160,
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
            variant="contained"
            color="secondary"
            aria-haspopup="true"
            fullWidth
            onClick={() => {}}
            disabled={!loggedIn}
            startIcon={<FormatListBulletedIcon />}
            sx={{
              whiteSpace: "nowrap",
            }}
          >
            Add To List
          </Button>
        </span>
      </Tooltip>
    </Box>
  );
};
export default AddToListDrawer;
