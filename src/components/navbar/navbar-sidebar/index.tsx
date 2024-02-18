import {
  Box,
  Button,
  ButtonBase,
  Collapse,
  Divider,
  Drawer,
  Stack,
  Typography,
} from "@mui/material";
import { AUTH_BUTTONS, PROFILE_ITEMS } from "../var";
import { useIsLoggedIn } from "@/hooks/useIsLoggedIn";
import Link from "next/link";
import { LANDING_PAGE, MOVIES_PAGE } from "@/constants/urls";
import { MovieGenre } from "@/constants/movie-genre";
import { useContext, useState } from "react";
import VideoCameraBackRoundedIcon from "@mui/icons-material/VideoCameraBackRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FiberNewRoundedIcon from "@mui/icons-material/FiberNewRounded";
import { AppContext } from "@/context/AppContext";
import { THEME_VALUES } from "@/mui/theme";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { ContextValue } from "@/types/general";

const DRAWER_ITEM_STYLE = {
  alignItems: "center",
  p: 1,
  borderRadius: 1,
  transition: "all 0.3s",
  ":hover": {
    bgcolor: "primary.dark",
  },
};

type NavbarSidebarProps = {
  onClose: () => void;
  open: boolean;
};

interface DrawerListItemProps {
  name: string;
  items?: {
    name: string;
    href: string;
  }[];
  icon: JSX.Element;
  href?: string;
}

const DRAWER_ITEMS: DrawerListItemProps[] = [
  {
    name: "Home",
    href: LANDING_PAGE,
    icon: <HomeRoundedIcon fontSize="small" />,
  },
  {
    name: "Discover",
    items: MovieGenre.map((item) => ({
      name: item.name,
      href: `${MOVIES_PAGE}?with_genres=${item.id}`,
    })),
    icon: <VideoCameraBackRoundedIcon fontSize="small" />,
  },
  {
    name: "Movie Release",
    href: LANDING_PAGE,
    icon: <FiberNewRoundedIcon fontSize="small" />,
  },
];

export const NavbarSidebar: React.FC<NavbarSidebarProps> = ({
  onClose,
  open,
}) => {
  const loggedIn = useIsLoggedIn();
  const { toggleTheme, mode, logout } = useContext(AppContext) as ContextValue;
  return (
    <Drawer elevation={0} anchor="left" open={open} onClose={onClose}>
      <Box role="menubar" width={200} p={1}>
        <Stack spacing={0.6}>
          {DRAWER_ITEMS.map((item, i) => (
            <DrawerListItem key={i} item={item} />
          ))}

          <Divider />

          {loggedIn ? (
            <></>
          ) : (
            // PROFILE_ITEMS.map((item) => (
            //   <Stack
            //     key={item.title}
            //     component={ButtonBase}
            //     direction="row"
            //     spacing={1}
            //     sx={{
            //       ...DRAWER_ITEM_STYLE,
            //       justifyContent: "start",
            //     }}
            //   >
            //     <item.icon fontSize="small" />
            //     <Typography>{item.title} </Typography>
            //   </Stack>
            // ))
            <Stack direction="column-reverse" spacing={1} py={0.5}>
              {AUTH_BUTTONS.map((btn) => {
                return (
                  <Link href={btn.href} key={btn.title}>
                    <Button variant={btn.variant} fullWidth color={btn.color}>
                      {btn.title}
                    </Button>
                  </Link>
                );
              })}
            </Stack>
          )}

          {/* {loggedIn && (
            <>
              <Stack
                onClick={logout}
                component={ButtonBase}
                direction="row"
                spacing={1}
                sx={{
                  ...DRAWER_ITEM_STYLE,
                  justifyContent: "start",
                }}
              >
                <LogoutRoundedIcon fontSize="small" />

                <Typography>Logout</Typography>
              </Stack>
              <Divider />
            </>
          )} */}

          <Stack
            onClick={toggleTheme}
            component={ButtonBase}
            direction="row"
            spacing={1}
            sx={{
              ...DRAWER_ITEM_STYLE,
              justifyContent: "start",
            }}
          >
            {mode === THEME_VALUES.dark ? (
              <LightModeIcon fontSize="small" />
            ) : (
              <DarkModeIcon fontSize="small" />
            )}
            <Typography sx={{ textTransform: "capitalize" }}>
              {mode} mode
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Drawer>
  );
};

const DrawerListItem: React.FC<{ item: DrawerListItemProps }> = ({ item }) => {
  const [openCollapse, setOpenCollapse] = useState(false);
  return (
    <>
      <Stack
        onClick={() => setOpenCollapse((prev) => !prev)}
        component={ButtonBase}
        direction="row"
        sx={{
          ...DRAWER_ITEM_STYLE,
          justifyContent: "space-between",
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          {item.icon}
          <Typography>{item.name}</Typography>
        </Stack>
        {item?.items && (
          <ChevronRightIcon
            sx={{
              transform: openCollapse ? "rotate(90deg)" : "none",
              transition: "all 0.3s",
            }}
          />
        )}
      </Stack>
      {item?.items && (
        <Collapse in={openCollapse}>
          <Stack spacing={1} m={1} ml={2}>
            {item.items?.map((item: any) => {
              return (
                <Link key={item.href} href={item.href}>
                  <Typography
                    sx={{
                      borderLeft: "3px solid",
                      borderLeftColor: "primary.main",
                      p: 1,
                      fontSize: 14,
                      transition: "all 0.3s",
                      borderTopRightRadius: 5,
                      borderBottomRightRadius: 5,
                      fontWeight: 400,
                      ":hover": {
                        bgcolor: "primary.main",
                        borderLeftColor: "warning.main",
                      },
                    }}
                    component="h3"
                  >
                    {item.name}
                  </Typography>
                </Link>
              );
            })}
          </Stack>
        </Collapse>
      )}
    </>
  );
};
