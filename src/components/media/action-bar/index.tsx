import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { LoadingButton } from "@mui/lab";
import { useIsLoggedIn } from "@/hooks/useIsLoggedIn";
import { AppContext } from "@/context/AppContext";
import { useContext, useState } from "react";
import { addToFavorites, addToWatchlist } from "@/api/profile";
import { toast } from "react-toastify";
import { useLists } from "@/api/profile/hooks/useLists";
import { Button, Grid, Tooltip } from "@mui/material";
import AddToListDrawer from "@/components/movies/single-movie/add-to-list-dropdown";
import { ContextValue } from "@/types/general";
import { UseQueryResult } from "@tanstack/react-query";
import { PaginatedList } from "@/types/paginated-list";
import { ListsType } from "@/types/list";
import TrailerModal from "@/components/movies/trailer-modal";

type Props = {
  mediaId: number;
  isMovie: boolean;
  url: string;
};

const ActionBar: React.FC<Props> = ({ mediaId, isMovie, url }) => {
  const loggedIn = useIsLoggedIn();
  const { user } = useContext(AppContext) as ContextValue;
  const [isLikeLoading, setIsLikeLoading] = useState<boolean>(false);
  const [isWatchlistLoading, setIsWatchlistLoading] = useState<boolean>(false);

  const {
    data,
    isLoading,
    isFetching,
    isError,
    isSuccess,
  }: UseQueryResult<PaginatedList<ListsType>, Error> = useLists(user!?.id);

  const handleLike = async () => {
    if (loggedIn) {
      setIsLikeLoading(true);
      try {
        const res = await addToFavorites(
          user!.id,
          isMovie ? "movie" : "tv",
          mediaId
        );
        toast.success("Added to Favorites!");
        setIsLikeLoading(false);
        return res;
      } catch (error) {
        toast.error("Error in adding to Favorites!");
        setIsLikeLoading(false);
        return error;
      }
    }
  };

  const handleAddToWatchlist = async () => {
    if (loggedIn) {
      setIsWatchlistLoading(true);
      try {
        const res = await addToWatchlist(
          user?.id as unknown as string,
          isMovie ? "movie" : "tv",
          mediaId
        );
        toast.success("Added to Watchlist!");
        setIsWatchlistLoading(false);
        return res;
      } catch (error) {
        toast.error("Error in adding to Watchlist!");
        setIsWatchlistLoading(false);
        return error;
      }
    }
  };

  return (
    <Grid container spacing={2} mt={0.5}>
      <Grid item lg={3} md={4} sm={5.5} xs={6}>
        <TrailerModal url={url} />
      </Grid>
      <Grid item lg={3} md={4} sm={5.5} xs={6}>
        <Tooltip title={loggedIn ? "Add to Favorites" : "Login to proceed"}>
          <span>
            <LoadingButton
              variant="contained"
              color="error"
              fullWidth
              disabled={!loggedIn}
              startIcon={<FavoriteIcon />}
              sx={{
                whiteSpace: "nowrap",
              }}
              loading={isLikeLoading}
              onClick={handleLike}
            >
              Favorite
            </LoadingButton>
          </span>
        </Tooltip>
      </Grid>
      <Grid item lg={3} md={4} sm={5.5} xs={6}>
        <Tooltip title={loggedIn ? "Add to Watchlist" : "Login to proceed"}>
          <span>
            <LoadingButton
              variant="outlined"
              color="secondary"
              fullWidth
              disabled={!loggedIn}
              startIcon={<BookmarkBorderIcon />}
              sx={{
                whiteSpace: "nowrap",
              }}
              loading={isWatchlistLoading}
              onClick={handleAddToWatchlist}
            >
              WatchList
            </LoadingButton>
          </span>
        </Tooltip>
      </Grid>
      <Grid item lg={3} md={4} sm={5.5} xs={6}>
        <Tooltip title={loggedIn ? "" : "Login to proceed"}>
          <span>
            {isSuccess && (
              <AddToListDrawer
                list={data?.results}
                mediaId={mediaId as unknown as string}
                isMovie={isMovie}
              />
            )}
          </span>
        </Tooltip>
      </Grid>
    </Grid>
  );
};

export default ActionBar;
