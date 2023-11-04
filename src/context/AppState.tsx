import { useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import Cookies from "js-cookie";
import { IChildren } from "@/types/componentType/IChildren";
import { darkTheme, lightTheme } from "@/utils/theme";

const AppState = ({ children }: IChildren) => {
  const [mode, setMode] = useState(Cookies.get("mode") ?? "dark");
  const [appTheme, setAppTheme] = useState(
    Cookies && Cookies.get("mode") === "light" ? lightTheme : darkTheme
  );
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const toggleTheme = () => {
    if (mode === "light") {
      setAppTheme(darkTheme);
      setMode("dark");
      Cookies.set("mode", "dark");
      document.body.setAttribute("data-theme", "dark");
    } else {
      setAppTheme(lightTheme);
      setMode("light");
      Cookies.set("mode", "light");
      document.body.setAttribute("data-theme", "light");
    }
  };

  if (!hasMounted) return null;

  return (
    <AppContext.Provider
      value={{
        toggleTheme,
        appTheme,
        mode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
