import { Roboto } from "next/font/google";
import { createTheme, PaletteOptions } from "@mui/material/styles";
import { BORDER_RADIUS } from "./BorderRadius";
import { SPACING } from "./Spacing";
import {
  BACKGROUND,
  ERROR,
  GREY,
  INFO,
  PRIMARY,
  SECONDARY,
  SUCCESS,
  TERTIARY,
  TEXT,
  WARNING,
} from "./Colors";
import { BOXSHADOW } from "./BoxShadow";
export type AllowedTheme = NonNullable<PaletteOptions["mode"]>;

export const DEFAULT_THEME: AllowedTheme = "dark";

export const THEME_VALUES = {
  dark: "dark",
  light: "light",
};

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

const CommonStyles = {
  spacing: SPACING,
  shape: {
    borderRadius: BORDER_RADIUS,
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "10px 24px",
          borderRadius: "10px",
          fontSize: "12px",
          fontWeight: "600",
        },
      },
    },
  },
};

// Create a light theme instance.
export const lightTheme = createTheme({
  ...CommonStyles,

  palette: {
    mode: "light",

    primary: PRIMARY.light,
    secondary: SECONDARY.light,
    tertiary: TERTIARY.light,
    background: BACKGROUND.light,
    text: TEXT.light,
    success: SUCCESS.light,
    warning: WARNING.light,
    info: INFO.light,
    error: ERROR.light,
    grey: GREY.light,
  },
  shadows: BOXSHADOW.light,
});
// Create a dark theme instance.
export const darkTheme = createTheme({
  ...CommonStyles,

  palette: {
    mode: "dark",

    primary: PRIMARY.dark,
    secondary: SECONDARY.dark,
    tertiary: TERTIARY.dark,
    background: BACKGROUND.dark,
    text: TEXT.dark,
    success: SUCCESS.dark,
    warning: WARNING.dark,
    info: INFO.dark,
    error: ERROR.dark,
    grey: GREY.dark,
  },
});
