import { Fragment, useState } from "react";
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
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SearchIcon from "@mui/icons-material/Search";

import Image from "next/image";
import Images from "@/utils/imageHelper";

const pages = ["Home", "Discover", "Movie Release", "About"];
const profile = ["Profile", "Account", "Dashboard", "Logout"];

const NavbarDrawer = ({ toggleDrawer, loginState, setLoginState }: any) => (
  <Box
    role="menubar"
    onClick={toggleDrawer}
    onKeyDown={toggleDrawer}
    width={"150px"}
  >
    <List>
      {pages.map((text) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemText primary={text} />
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
    </Box>
    {loginState && (
      <List>
        {profile.map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
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
        bgcolor: "rgba(22,22,23,0.8)",
        backgroundImage: "none",
        boxShadow: "none",
        paddingX: 0,
        fliter: "blur(5px)",
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
              src={Images.LogoWhite}
              alt={"Logo"}
              width={70}
              height={70}
              style={{ cursor: "pointer" }}
              onClick={() => {}}
            />
          </Box>
          {/* MD Items */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, display: "block" }}
                color="secondary"
              >
                {page}
              </Button>
            ))}
          </Box>
          {/* MD Login btns */}
          {!loginState && (
            <Stack
              sx={{ display: { xs: "none", md: "flex" } }}
              direction={"row"}
              alignItems={"center"}
              gap={2}
              whiteSpace={"nowrap"}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  bgcolor: "GrayText",
                  borderRadius: "100px",
                  padding: 1,
                }}
              >
                <SearchIcon />
              </Box>
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
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  bgcolor: "GrayText",
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
                {profile.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={handleCloseUserMenu}
                    sx={{ px: 2.5, py: 1.25 }}
                  >
                    <Typography textAlign="center">{setting}</Typography>
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
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                bgcolor: "GrayText",
                borderRadius: "100px",
                padding: 0.5,
              }}
            >
              <SearchIcon sx={{ cursor: "pointer" }} />
            </Box>
            <MenuRoundedIcon onClick={toggleDrawer} />
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
