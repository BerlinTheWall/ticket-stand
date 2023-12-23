import { useEffect, useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Tooltip,
  Container,
  Drawer,
  IconButton,
  Button,
  Avatar,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SearchIcon from "@mui/icons-material/Search";
import ThemeSwitch from "../../components/switch-theme";
import Image from "next/image";
import Images from "@/utils/image-helper";
import { THEME_VALUES } from "@/mui/theme";
import {
  NAVBAR_HEIGHT,
  NAVBAR_HEIGHT_MOBILE,
  PAGE_NOT_MARGIN_NAVBAR,
  PROFILE_ITEMS,
} from "./var";
import { useRouter } from "next/router";
import Link from "next/link";
import { LANDING_PAGE, LOGIN_PAGE } from "@/constants/urls";
import { NavbarSearch } from "@/components/navbar/search";
import GenresDrawer from "@/layout/main-layout/genres-drawer";
import { NavbarSidebar } from "./navbar-sidebar";
import Cookies from "js-cookie";
import { PROFILE_COOKIE } from "@/constants/cookie";
import { Profile } from "@/types/profile";

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("md"));
  const router = useRouter();

  const [drawerState, setDrawerState] = useState<boolean>(false);
  const [loginState, setLoginState] = useState<boolean>(false);
  const [profile, setProfile] = useState<Profile>(
    localStorage.getItem(PROFILE_COOKIE)
      ? JSON.parse(localStorage.getItem(PROFILE_COOKIE)!)
      : null
  );

  useEffect(() => {
    if (profile !== undefined && profile !== null) setLoginState(true);
    else setLoginState(false);
  }, [profile]);

  const toggleDrawer = () => {
    setDrawerState((prev) => !prev);
  };

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box
      mb={
        PAGE_NOT_MARGIN_NAVBAR.includes(router.pathname)
          ? 0
          : {
              md: `${NAVBAR_HEIGHT + 30}px`,
              xs: `${NAVBAR_HEIGHT_MOBILE + 30}px`,
            }
      }
    >
      <AppBar
        position="fixed"
        sx={{
          bgcolor: (theme) => `${theme.palette.background.paper}d6`,
          backgroundImage: "none",
          boxShadow: "none",
          backdropFilter: "blur(5px)",
          height: `${NAVBAR_HEIGHT}px`,
          pr: "0 !important",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Logo */}
            <Box sx={{ pt: 1, pl: 2 }}>
              <Link href={LANDING_PAGE}>
                <Image
                  src={
                    theme.palette.mode === THEME_VALUES.dark
                      ? Images.LogoWhite
                      : Images.LogoBlack
                  }
                  alt={"Logo"}
                  width={!isMobile ? 50 : 70}
                  height={!isMobile ? 50 : 70}
                  style={{ cursor: "pointer" }}
                  priority
                  loading="eager"
                />
              </Link>
            </Box>
            {/* MD Items */}
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Link href={LANDING_PAGE}>
                <Button
                  fullWidth
                  color="secondary"
                  sx={{ my: 2, display: "block", fontSize: "14px" }}
                >
                  HOME
                </Button>
              </Link>
              <GenresDrawer />
              <Button
                sx={{ my: 2, display: "block", fontSize: "14px" }}
                color="secondary"
              >
                MOVIE RELEASE
              </Button>
            </Box>
            {/* MD Login buttons */}
            <Stack
              sx={{ display: { xs: "none", md: "flex" } }}
              direction={"row"}
              alignItems={"center"}
              gap={2}
              whiteSpace={"nowrap"}
            >
              <NavbarSearch />
              <ThemeSwitch />
              {!loginState && (
                <Box display={"flex"} gap={2}>
                  <Link href={LOGIN_PAGE}>
                    <Button variant="outlined" fullWidth color="secondary">
                      Sign up
                    </Button>
                  </Link>
                  <Link href={LOGIN_PAGE}>
                    <Button variant="contained" fullWidth color="primary">
                      Login
                    </Button>
                  </Link>
                </Box>
              )}
              {loginState && (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      borderRadius: "100px",
                      padding: 1,
                    }}
                  ></Box>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      {profile &&
                      profile.avatar.tmdb.avatar_path !== undefined &&
                      profile.avatar.tmdb.avatar_path !== null ? (
                        <Image
                          src={
                            "http://www.themoviedb.org/t/p/w150_and_h150_face" +
                            profile.avatar.tmdb.avatar_path
                          }
                          alt={""}
                          width={40}
                          height={40}
                        />
                      ) : (
                        <Avatar alt="Profile Icon" />
                      )}
                    </IconButton>
                  </Tooltip>
                </>
              )}
            </Stack>
            {/* MD Profile */}
            {/* {loginState && (
              <Stack
                sx={{
                  display: { xs: "none", md: "flex" },
                }}
                gap={5}
                direction={"row"}
                alignItems={"center"}
              >
                <NavbarSearch />
                <ThemeSwitch />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    borderRadius: "100px",
                    padding: 1,
                  }}
                ></Box>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    {profile &&
                    profile.avatar.tmdb.avatar_path !== undefined &&
                    profile.avatar.tmdb.avatar_path !== null ? (
                      <Image
                        src={
                          "http://www.themoviedb.org/t/p/w150_and_h150_face" +
                          profile.avatar.tmdb.avatar_path
                        }
                        alt={""}
                        width={40}
                        height={40}
                      />
                    ) : (
                      <Avatar alt="Profile Icon" />
                    )}
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: 7 }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {PROFILE_ITEMS.map((item) => (
                    <MenuItem
                      key={item}
                      onClick={handleCloseUserMenu}
                      sx={{ px: 2.5, py: 1.25 }}
                    >
                      <Typography textAlign="center">{item}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Stack>
            )} */}
            {/* SM Drawer */}
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                gap: 2,
                alignItems: "center",
                justifyContent: "end",
              }}
            >
              <Box width={"50%"}>
                <NavbarSearch />
              </Box>
              <ThemeSwitch />
              <MenuRoundedIcon
                onClick={toggleDrawer}
                sx={{ cursor: "pointer" }}
                fontSize="large"
              />
              <Drawer
                anchor={"right"}
                open={drawerState}
                onClose={toggleDrawer}
                sx={{ display: { md: "none" } }}
              >
                <NavbarSidebar
                  toggleDrawer={toggleDrawer}
                  loginState={loginState}
                  setLoginState={setLoginState}
                />
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
