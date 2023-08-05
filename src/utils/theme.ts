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

export const lightTheme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    mode: "light",
  },
});

export const darkTheme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    mode: "dark",
  },
});

// export const globalStyles = css`
//   :root {
//     body {
//       background-color: #fff;
//       color: #121212;
//     }
//   }

//   [data-theme="dark"] {
//     body {
//       background-color: #121212;
//       color: #fff;
//     }
//   }
// `;
