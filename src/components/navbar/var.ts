import { signOut } from "@/api/login";
import { SESSION_ID_COOKIE } from "@/constants/cookie";
import { LOGIN_PAGE } from "@/constants/urls";
import Cookies from "js-cookie";

export const NAVBAR_HEIGHT = 85;
export const NAVBAR_HEIGHT_MOBILE = 65;
export const PAGE_NOT_MARGIN_NAVBAR = ["/"];

export const PAGES = ["Home", "Discover", "Movie Release"];
export const PROFILE_ITEMS = [
  { title: "Profile", icon: "", isLink: true, href: LOGIN_PAGE },
  { title: "Account", icon: "", isLink: true, href: LOGIN_PAGE },
  { title: "Dashboard", icon: "", isLink: true, href: LOGIN_PAGE },
  {
    title: "Logout",
    icon: "",
    isLink: false,
    onClick: () => {
      const session_id = Cookies.get(SESSION_ID_COOKIE);
      signOut(session_id!!);
    },
  },
];
