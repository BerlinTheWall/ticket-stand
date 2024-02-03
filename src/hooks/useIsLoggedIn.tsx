import { SESSION_ID_COOKIE } from "@/constants/cookie";
import { AppContext } from "@/context/AppContext";
import Cookies from "js-cookie";
import { useContext, useMemo } from "react";

export const useIsLoggedIn = () => {
  const { user } = useContext(AppContext)!;
  const sessionId = Cookies.get(SESSION_ID_COOKIE);

  const isLoggedIn = useMemo(
    () => !!user && !!Cookies.get(SESSION_ID_COOKIE),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user, sessionId]
  );

  return isLoggedIn;
};
