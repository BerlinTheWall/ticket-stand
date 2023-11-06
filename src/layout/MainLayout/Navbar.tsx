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
import ThemeSwitch from "../../components/SwitchTheme";
import Image from "next/image";
import Images from "@/utils/imageHelper";
import { THEME_VALUES } from "@/MUI/theme";
import GenresDrawer from "./GenresDrawer";

const PAGES = ["Home", "Discover", "Movie Release"];
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
    <AppBar
      position="fixed"
      sx={{
        // bgcolor: "rgba(22,22,23,0.8)",
        bgcolor: (theme) => `${theme.palette.background.paper}d6`,
        backgroundImage: "none",
        boxShadow: "none",
        paddingX: 0,
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
            />
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
              <Button color="secondary" sx={{ px: 0, mx: 0, borderRadius: 20 }}>
                <SearchIcon
                  sx={{
                    cursor: "pointer",
                    px: 0,
                    mx: 0,
                  }}
                />
              </Button>
              <ThemeSwitch />
              <Button variant="outlined" fullWidth color="secondary">
                Sign up
              </Button>
              <Button
                variant="contained"
                fullWidth
                color="primary"
                onClick={() => setLoginState(true)}
              >
                Login
              </Button>
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
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
            }}
          >
            <SearchIcon sx={{ cursor: "pointer" }} fontSize="large" />
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
  );
};

export default Navbar;
