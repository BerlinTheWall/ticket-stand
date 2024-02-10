import { useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import Cookies from "js-cookie";
import { IChildren } from "@/types/component-type/IChildren";
import { darkTheme, lightTheme } from "@/mui/theme";
import { ACCOUNT_COOKIE, SESSION_ID_COOKIE } from "@/constants/cookie";
import { Profile } from "@/types/profile";
import { signOut } from "@/api/login";

const AppState = ({ children }: IChildren) => {
  const [mode, setMode] = useState(Cookies.get("mode") ?? "dark");
  const [appTheme, setAppTheme] = useState(
    Cookies && Cookies.get("mode") === "light" ? lightTheme : darkTheme
  );
  const [hasMounted, setHasMounted] = useState(false);
  const [user, setUser] = useState<Profile | null>(
    Cookies && Cookies.get(ACCOUNT_COOKIE)
      ? JSON.parse(Cookies.get(ACCOUNT_COOKIE)!)
      : null
  );
  const [showListModal, setShowListModal] = useState<{
    id: number | string;
    isMovie: boolean;
    open: boolean;
  }>({
    id: -1,
    isMovie: false,
    open: false,
  });

  const openListModal = (id: number | string, isMovie: boolean) => {
    setShowListModal({
      id: id,
      isMovie: isMovie,
      open: true,
    });
  };
  const closeListModal = () => {
    setShowListModal((prev) => ({
      ...prev,
      open: false,
    }));
  };

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

  const logout = async () => {
    try {
      await signOut();
      setUser(null);
      Cookies.remove(SESSION_ID_COOKIE);
      Cookies.remove(ACCOUNT_COOKIE);
    } catch (error) {
      console.log(error);
    }
  };

  if (!hasMounted) return null;

  return (
    <AppContext.Provider
      value={{
        toggleTheme,
        appTheme,
        mode,
        user,
        setUser,
        showListModal,
        openListModal,
        closeListModal,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
