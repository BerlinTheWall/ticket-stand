// tertiary config
declare module "@mui/material/styles" {
  interface Palette {
    tertiary: Palette["primary"];
  }

  interface PaletteOptions {
    tertiary?: PaletteOptions["primary"];
  }
}
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    tertiary: true;
  }
}

// colors
export const blackColor = "#000";
export const whiteColor = "#fff";

export const PRIMARY = {
  dark: {
    light: "#e5f6ea",
    main: "#00925D",
    contrastText: whiteColor,
    50: "#e5f6ee",
    100: "#c1e8d4",
    200: "#99d9b9",
    300: "#6dcb9e",
    400: "#49bf89",
    500: "#14b475",
    600: "#0ba46a",
    700: "#00925D", //main
    800: "#008150",
    900: "#00613b",
  },
  light: {
    light: "#e5f6ea",
    main: "#00925D",
    contrastText: whiteColor,
    50: "#e5f6ee",
    100: "#c1e8d4",
    200: "#99d9b9",
    300: "#6dcb9e",
    400: "#49bf89",
    500: "#14b475",
    600: "#0ba46a",
    700: "#00925D", //main
    800: "#008150",
    900: "#00613b",
  },
};
export const SECONDARY = {
  dark: {
    main: "#FFFFFF",
    contrastText: blackColor,
  },
  light: {
    light: "#f7f6f0",
    main: "#0d0c0f",
    contrastText: whiteColor,
    50: "#f7f6f9",
    100: "#ececee",
    200: "#dfdee1",
    300: "#cccbce",
    400: "#a6a5a8",
    500: "#858487",
    600: "#5e5d60",
    700: "#4b4b4d",
    800: "#2e2d2f",
    900: "#0d0c0f", //main
  },
};
export const TERTIARY = {
  dark: { main: "#fff", contrastText: blackColor },
  light: { main: "#fff", contrastText: blackColor },
};
export const BACKGROUND = {
  dark: { default: "#0D0C0F", paper: "#121212" },
  light: { default: "#ffffff", paper: "#dddddd" },
};
export const TEXT = {
  dark: {
    primary: "rgba(255, 255, 255)",
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
  },
  light: {
    primary: "rgba(0, 0, 0, 0.87)",
    secondary: "rgba(0, 0, 0, 0.6)",
    disabled: "rgba(0, 0, 0, 0.38)",
  },
};
export const SUCCESS = {
  dark: {
    main: "#2e7d32",
    light: "#4caf50",
    dark: "#1b5e20",
    contrastText: "#fff",
  },
  light: {
    main: "#66bb6a",
    light: "#81c784",
    dark: "#388e3c",
    contrastText: "rgba(0, 0, 0, 0.87)",
  },
};
export const WARNING = {
  dark: {
    main: "#ffa726",
    light: "#ffb74d",
    dark: "#f57c00",
    contrastText: "rgba(0, 0, 0, 0.87)",
  },
  light: {
    main: "#ed6c02",
    light: "#ff9800",
    dark: "#e65100",
    contrastText: "#fff",
  },
};
export const INFO = {
  dark: {
    main: "#29b6f6",
    light: "#4fc3f7",
    dark: "#0288d1",
    contrastText: "rgba(0, 0, 0, 0.87)",
  },
  light: {
    main: "#0288d1",
    light: "#03a9f4",
    dark: "#01579b",
    contrastText: "#fff",
  },
};
export const ERROR = {
  dark: {
    main: "#f44336",
    light: "#e57373",
    dark: "#d32f2f",
    contrastText: "#fff",
  },
  light: {
    main: "#d32f2f",
    light: "#ef5350",
    dark: "#c62828",
    contrastText: "#fff",
  },
};
export const GREY = {
  dark: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
  light: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
};
