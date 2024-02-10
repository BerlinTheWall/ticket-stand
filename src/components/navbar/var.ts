import { signOut } from "@/api/login";
import { ACCOUNT_COOKIE, SESSION_ID_COOKIE } from "@/constants/cookie";
import { LOGIN_PAGE, PROFILE_PAGE } from "@/constants/urls";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

export const NAVBAR_HEIGHT = 85;
export const NAVBAR_HEIGHT_MOBILE = 65;
export const NEED_MARGIN_TOP_VALUE = "115px";
export const PAGE_NOT_MARGIN_NAVBAR = ["/"];

export const PAGES = ["Home", "Discover", "Movie Release"];
export const PROFILE_ITEMS = [
  { title: "Profile", icon: "", isLink: true, href: PROFILE_PAGE },
  { title: "Account", icon: "", isLink: true, href: LOGIN_PAGE },
  { title: "Dashboard", icon: "", isLink: true, href: LOGIN_PAGE },
  {
    title: "Logout",
    icon: "",
    isLink: false,
    onClick: async () => {
      try {
        await signOut();
        toast.success("Sign out");
        // console.log("Sign out");
        Cookies.remove(SESSION_ID_COOKIE);
        Cookies.remove(ACCOUNT_COOKIE);

        // setUser(null);
      } catch (error) {
        console.log(error);
      }
    },
  },
];
