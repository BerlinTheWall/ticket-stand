import { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Tooltip,
  Container,
  Divider,
  Drawer,
  IconButton,
  Button,
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
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
import GenresDrawer from "./genres-drawer";
import {
  NAVBAR_HEIGHT,
  NAVBAR_HEIGHT_MOBILE,
  PAGE_NOT_MARGIN_NAVBAR,
} from "./var";
import { useRouter } from "next/router";
import Link from "next/link";
import { LANDING_PAGE, LOGIN_PAGE } from "@/constants/urls";
import { NavbarSearch } from "@/components/navbar/search";
const PAGES = ["Home2", "Discover", "Movie Release"];
const PROFILE_ITEMS = ["Profile", "Account", "Dashboard", "Logout"];

const NavbarDrawer = ({ toggleDrawer, loginState, setLoginState }: any) => (
  <Box
    role="menubar"
    onClick={toggleDrawer}
    onKeyDown={toggleDrawer}
    width={"200px"}
  >
    <List>
      {PAGES.map((text) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemText
              primary={text}
              primaryTypographyProps={{ fontSize: 18 }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <Divider />
    <Box
      sx={{
        display: loginState ? "none" : "flex",
        flexDirection: "column-reverse",
        paddingTop: 1,
        paddingX: 1,
        gap: 1,
      }}
    >
      <Button
        variant="outlined"
        fullWidth
        sx={{ fontSize: 15 }}
        color="secondary"
      >
        Sign up
      </Button>
      <Button
        variant="contained"
        fullWidth
        color="primary"
        sx={{ fontSize: 15 }}
        onClick={() => setLoginState(true)}
      >
        Login
      </Button>
    </Box>
    {loginState && (
      <List>
        {PROFILE_ITEMS.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    )}
  </Box>
);

const Navbar: React.FC = () => {
  const [drawerState, setDrawerState] = useState<boolean>(false);
  const [loginState, setLoginState] = useState<boolean>(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("md"));

  const router = useRouter();

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
              <Button
                key={0}
                sx={{ my: 2, display: "block", fontSize: "14px" }}
                color="secondary"
              >
                HOME
              </Button>
              <GenresDrawer />
              <Button
                key={2}
                sx={{ my: 2, display: "block", fontSize: "14px" }}
                color="secondary"
              >
                MOVIE RELEASE
              </Button>
            </Box>
            {/* MD Login buttons */}
            {!loginState && (
              <Stack
                sx={{ display: { xs: "none", md: "flex" } }}
                direction={"row"}
                alignItems={"center"}
                gap={2}
                whiteSpace={"nowrap"}
              >
                <NavbarSearch />
                <ThemeSwitch />
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
              </Stack>
            )}
            {/* MD Profile */}
            {loginState && (
              <Stack
                sx={{
                  display: { xs: "none", md: "flex" },
                }}
                gap={5}
                direction={"row"}
                alignItems={"center"}
              >
                <ThemeSwitch />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    borderRadius: "100px",
                    padding: 1,
                  }}
                >
                  <SearchIcon />
                </Box>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
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
            )}
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
                <NavbarDrawer
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
