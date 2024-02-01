import {
  Box,
  Button,
  Grid,
  Stack,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { useContext, useState } from "react";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { useIsLoggedIn } from "@/hooks/useIsLoggedIn";
import { ListsType } from "@/types/list";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { addMovieToList } from "@/api/lists";
import { toast } from "react-toastify";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import AddToListDrawer from "@/components/movies/single-movie/add-to-list-dropdown";
import { AppContext } from "@/context/AppContext";

type Props = {
  mediaId: string;
  isMovie: boolean;
};

const MovieCardDrawer: React.FC<Props> = ({ mediaId, isMovie }) => {
  const theme = useTheme();
  const [isHover, setIsHover] = useState(false);
  const { toggleListModal } = useContext(AppContext)!;

  const loggedIn = useIsLoggedIn();

  const handleAddToList = async (list: ListsType) => {
    try {
      if (isMovie) {
        await addMovieToList(list.id, mediaId);
        toast.success(`Added to ${list.name} list`);
      } else {
        // await addTVSerieToList(list.id, mediaId);
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
        setIsHover(true);
      }}
      onMouseLeave={() => setIsHover(false)}
    >
      <Tooltip
        title={
          <Box>
            <Stack
              direction={"row"}
              gap={1}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Tooltip title={"Add to Favorites"}>
                <FavoriteIcon
                  color="error"
                  sx={{ fontSize: 28, cursor: "pointer" }}
                  // onClick={handleLike}
                />
              </Tooltip>
              <Tooltip title={"Add to Watchlist"}>
                <BookmarkAddIcon
                  sx={{ fontSize: 28, cursor: "pointer" }}
                  // onClick={handleAddToWatchlist}
                />
              </Tooltip>
              <Tooltip title={"Add to List"}>
                <FormatListBulletedIcon
                  color="primary"
                  sx={{ fontSize: 28, cursor: "pointer" }}
                  onClick={toggleListModal}
                />
              </Tooltip>
              {/* <AddToListDrawer list={[]} mediaId={mediaId} isMovie /> */}
            </Stack>
          </Box>
        }
        placement="left"
        componentsProps={{
          transition: "ease-in-out",
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
        <Box
          sx={{
            position: "absolute",
            top: 6,
            right: 6,
            width: 16,
            height: "auto",
            borderRadius: "13px",
            background: `${theme.palette.background.paper}`,
            px: 0,
            py: 0.5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MoreVertIcon
            color="primary"
            sx={{
              fontSize: 32,
              cursor: "pointer",
            }}
          />
        </Box>
      </Tooltip>
    </Box>
  );
};
export default MovieCardDrawer;
