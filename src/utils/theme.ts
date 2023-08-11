import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
let theme = createTheme({
  palette: {
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
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

// theme = createTheme(theme, {
//   palette: {
//     background: {
//         default: theme.palette.common.black
//     }
//   },
// });
export default theme;
