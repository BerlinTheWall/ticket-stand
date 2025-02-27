import { CssBaseline, ThemeProvider } from "@mui/material";
import { IChildren } from "@/types/component-type/IChildren";
import { responsiveFontSizes } from "@mui/material/styles";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import { ContextValue } from "@/types/general";

const MUIThemeProvider: React.FC<IChildren> = ({ children }) => {
  const { appTheme } = useContext(AppContext) as ContextValue;

  return (
    <ThemeProvider theme={responsiveFontSizes(appTheme)}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MUIThemeProvider;
