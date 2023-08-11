import { Roboto } from "next/font/google";
import { createTheme, PaletteOptions } from "@mui/material/styles";
import { red } from "@mui/material/colors";
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

// Create a theme instance.
export const lightTheme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    mode: "light",
    background: {
      default: "#F4F4F4",
    },
    primary: {
      main: "#00925D",
    },
    secondary: {
      main: "#EB3F5E",
    },
    error: {
      main: red.A400,
    },
  },
});

export const darkTheme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    mode: "dark",
    background: {
      default: "#0D0C0F",
    },
    primary: {
      main: "#00925D",
    },
    secondary: {
      main: "#EB3F5E",
    },
    error: {
      main: red.A400,
    },
  },
});

// theme = createTheme(theme, {
//   palette: {
//     background: {
//         default: theme.palette.common.black
//     }
//   },
// });
