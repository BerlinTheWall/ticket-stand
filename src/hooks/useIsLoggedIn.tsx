import { ACCOUNT_COOKIE, SESSION_ID_COOKIE } from "@/constants/cookie";
import { AppContext } from "@/context/AppContext";
import Cookies from "js-cookie";
import { useContext, useEffect, useState } from "react";

export const useIsLoggedIn = () => {
  const { user } = useContext(AppContext);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const sessionId = Cookies.get(SESSION_ID_COOKIE);

  useEffect(() => {
    setIsLoggedIn(!!user && !!sessionId);
  }, [user, sessionId]);
  return isLoggedIn;
};
