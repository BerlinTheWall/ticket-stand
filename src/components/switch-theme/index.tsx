import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import { IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { THEME_VALUES } from "@/mui/theme";
import { ContextValue } from "@/types/general";

export default function SwitchTheme() {
  const { toggleTheme, mode } = useContext(AppContext) as ContextValue;

  return (
    <IconButton onClick={toggleTheme}>
      {mode === THEME_VALUES.dark ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
}
