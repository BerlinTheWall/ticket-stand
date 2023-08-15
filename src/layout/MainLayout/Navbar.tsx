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
import DehazeIcon from "@mui/icons-material/Dehaze";
import SearchIcon from "@mui/icons-material/Search";

import Image from "next/image";
import Images from "../../utils/imageHelper";

const pages = ["Home", "Discover", "Movie Release", "Forum", "About"];
const profile = ["Profile", "Account", "Dashboard", "Logout"];
type Anchor = "right";

const Navbar: React.FC = () => {
  const [drawerState, setDrawerState] = useState(false);
  const [loginState, setLoginState] = useState(false);

  const toggleDrawer = () => {
    setDrawerState((prev) => !prev);
  };

  const list = (anchor: Anchor) => (
    <Box
      role="menubar"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
      sx={{ width: "150px" }}
      display={{ md: "none" }}
    >
      <List>
        {pages.map((text, index) => (
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
        <Button variant="contained" fullWidth color="primary">
          Login
        </Button>
      </Box>
      <List sx={{ display: loginState ? "block" : "none" }}>
        {profile.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "transparent",
        backgroundImage: "none",
        boxShadow: "none",
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
            ></Image>
          </Box>
          {/* MD Items */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          {/* MD Login btns */}
          <Stack
            sx={{ display: loginState ? "none" : { xs: "none", md: "flex" } }}
            direction={"row"}
            alignItems={"center"}
            gap={1}
            spacing={1}
            whiteSpace={"nowrap"}
          >
            <SearchIcon />
            <Button variant="outlined" fullWidth color="secondary">
              Sign up
            </Button>
            <Button variant="contained" fullWidth color="primary">
              Login
            </Button>
          </Stack>
          {/* MD Profile */}
          <Box
            sx={{ display: !loginState ? "none" : { xs: "none", md: "block" } }}
          >
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
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
                  sx={{ padding: "10px 20px" }}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* SM Drawer */}
          <Box sx={{ display: { xs: "flex", md: "none" }, gap: 2 }}>
            <SearchIcon />
            <Fragment key={"right"}>
              <DehazeIcon onClick={toggleDrawer}>{"right"}</DehazeIcon>
              <Drawer
                anchor={"right"}
                open={drawerState}
                onClose={toggleDrawer}
              >
                {list("right")}
              </Drawer>
            </Fragment>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
