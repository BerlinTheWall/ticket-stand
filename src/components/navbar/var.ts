import { LOGIN_PAGE, PROFILE_PAGE } from "@/constants/urls";
import { ButtonOwnProps } from "@mui/material";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { toast } from "react-toastify";
export const NAVBAR_HEIGHT = "auto";
export const NAVBAR_HEIGHT_MOBILE = 65;
export const NEED_MARGIN_TOP_VALUE = "115px";
export const PAGE_NOT_MARGIN_NAVBAR = ["/"];
export const AUTH_BUTTONS: {
  title: string;
  href: string;
  color: ButtonOwnProps["color"];
  variant: ButtonOwnProps["variant"];
}[] = [
  {
    title: "Sign up",
    href: LOGIN_PAGE,
    color: "secondary",
    variant: "outlined",
  },
  {
    title: "Login",
    href: LOGIN_PAGE,
    color: "primary",
    variant: "contained",
  },
];

export const PAGES = ["Home", "Discover", "Movie Release"];
export const PROFILE_ITEMS = [
  {
    title: "Profile",
    icon: PersonRoundedIcon,
    href: PROFILE_PAGE,
  },
  // {
  //   title: "Logout",
  //   icon: "",
  //   isLink: false,
  //   onClick: async () => {
  //     try {
  //       await signOut();
  //       toast.success("Sign out");
  //       // console.log("Sign out");
  //       Cookies.remove(SESSION_ID_COOKIE);
  //       Cookies.remove(ACCOUNT_COOKIE);

  //       // setUser(null);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   },
  // },
];
