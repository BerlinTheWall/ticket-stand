import { Theme } from "@mui/material";
import { Profile } from "./profile";
import { PaginatedList } from "./paginated-list";

export type profileListType = "movie" | "tv";

export type ContextValue = {
  toggleTheme: () => void;
  appTheme: Theme;
  mode: string;
  user: Profile | null;
  setUser: (value: Profile) => void;
  showListModal: {
    id: number | string;
    isMovie: boolean;
    open: boolean;
  };
  openListModal: (id: number | string, isMovie: boolean) => void;
  closeListModal: () => void;
  logout: () => void;
};

export type QueryResult<T> = {
  data: PaginatedList<T> | undefined;
  isError: boolean;
  isLoading: boolean;
  isFetching: boolean;
};
