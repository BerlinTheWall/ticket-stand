import { Box, PaletteColorOptions, Stack, Tooltip } from "@mui/material";
import { useContext, useMemo, useState } from "react";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { useIsLoggedIn } from "@/hooks/useIsLoggedIn";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import { AppContext } from "@/context/AppContext";
import { ContextValue } from "@/types/general";
import { addToFavorites, addToWatchlist } from "@/api/profile";
import { toast } from "react-toastify";

type Props = {
  mediaId: string | number;
  isMovie: boolean;
};

const MovieCardToolTipAction: React.FC<Props> = ({ mediaId, isMovie }) => {
  const [isHover, setIsHover] = useState(false);
  const { openListModal } = useContext(AppContext) as ContextValue;

  const loggedIn = useIsLoggedIn();
  const { user } = useContext(AppContext) as ContextValue;

  const handleListModal = () => {
    openListModal(mediaId, isMovie);
  };

  const handleLike = async () => {
    try {
      const res = await addToFavorites(
        user!.id,
        isMovie ? "movie" : "tv",
        mediaId as number
      );
      toast.success("Added to Favorites!");
      return res;
    } catch (error) {
      toast.error("Error in adding to Favorites!");
      return error;
    }
  };

  const handleAddToWatchlist = async () => {
    if (loggedIn) {
      // setIsWatchlistLoading(true);
      try {
        const res = await addToWatchlist(
          user!.id,
          isMovie ? "movie" : "tv",
          mediaId as number
        );
        toast.success("Added to Watchlist!");
        // setIsWatchlistLoading(false);
        return res;
      } catch (error) {
        toast.error("Error in adding to Watchlist!");
        // setIsWatchlistLoading(false);
        return error;
      }
    }
  };

  const BUTTON_ACTION_ITEMS = [
    {
      title: "Add to Favorites",
      color: "error",
      icon: FavoriteIcon,
      onClick: handleLike,
    },
    {
      title: "Add to Watchlist",
      color: "inherit",
      icon: BookmarkAddIcon,
      onClick: handleAddToWatchlist,
    },
    {
      title: "Add to List",
      color: "primary",
      icon: FormatListBulletedIcon,
      onClick: handleListModal,
    },
  ];

  const openTooltip = () => {
    setIsHover(true);
  };
  const closeTooltip = () => {
    setIsHover(false);
  };
  const handleOnClick = (item: (typeof BUTTON_ACTION_ITEMS)[0]) => {
    if (item.onClick) {
      item.onClick();
      closeTooltip();
    }
  };

  return (
    loggedIn && (
      <Box onMouseOver={openTooltip} onMouseLeave={closeTooltip}>
        <Tooltip
          title={
            <Stack
              direction="row"
              spacing={1}
              justifyContent="space-between"
              alignItems="center"
            >
              {BUTTON_ACTION_ITEMS.map((item) => {
                return (
                  <Tooltip title={item.title} key={item.title}>
                    <item.icon
                      color={item.color as keyof PaletteColorOptions}
                      sx={{ fontSize: 28, cursor: "pointer" }}
                      onClick={() => {
                        handleOnClick(item);
                      }}
                    />
                  </Tooltip>
                );
              })}
            </Stack>
          }
          placement="left"
          componentsProps={{
            transition: "ease-in-out",
            tooltip: {
              sx: {
                bgcolor: "background.paper",
                color: "text.primary",
                boxShadow: 2,
                px: 2.5,
                py: 1.5,
                minWidth: 160,
                borderRadius: 2,
                filter: (theme) =>
                  `drop-shadow(0px 2px 8px ${theme.palette.primary.main} )`,
              },
            },
            arrow: {
              sx: {
                color: "background.paper",
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
              borderRadius: 2,
              bgcolor: "background.paper",
              display: "flex",
              justifyContent: "center",
              width: 16,
              cursor: "pointer",
            }}
          >
            <MoreVertIcon color="primary" fontSize="large" />
          </Box>
        </Tooltip>
      </Box>
    )
  );
};
export default MovieCardToolTipAction;
