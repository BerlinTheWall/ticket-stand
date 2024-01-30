import { Theme } from "@mui/material";
import { Profile } from "./profile";

export type profileListType = "movie" | "tv";

export type ContextValue = {
  toggleTheme: () => void;
  appTheme: Theme;
  mode: string;
  user: Profile;
  setUser: (value: Profile) => void;
  showListModal: boolean;
  toggleListModal: () => void;
};
