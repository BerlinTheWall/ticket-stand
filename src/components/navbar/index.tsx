import { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Container,
  IconButton,
  Button,
  Stack,
  useMediaQuery,
  useTheme,
  Tooltip,
  Typography,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ThemeSwitch from "../../components/switch-theme";
import Image from "next/image";
import Images from "@/utils/image-helper";
import { THEME_VALUES } from "@/mui/theme";
import {
  AUTH_BUTTONS,
  NAVBAR_HEIGHT,
  NAVBAR_HEIGHT_MOBILE,
  PAGE_NOT_MARGIN_NAVBAR,
} from "./var";
import { useRouter } from "next/router";
import Link from "next/link";
import { ABOUT_US_PAGE, LANDING_PAGE } from "@/constants/urls";
import { NavbarSearch } from "@/components/navbar/search";
import GenresDrawer from "@/layout/main-layout/genres-drawer";
import { NavbarSidebar } from "./navbar-sidebar";
import { useIsLoggedIn } from "@/hooks/useIsLoggedIn";
import ProfileDropdown from "./profile-dropdown";

const Navbar: React.FC = () => {
  const theme = useTheme();
  const router = useRouter();
  const loggedIn = useIsLoggedIn();
  const [drawerState, setDrawerState] = useState<boolean>(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = () => {
    setDrawerState((prev) => !prev);
  };

  return (
    <Box
      mb={
        PAGE_NOT_MARGIN_NAVBAR.includes(router.pathname)
          ? 0
          : {
              md: `${NAVBAR_HEIGHT}px`,
              xs: `${NAVBAR_HEIGHT_MOBILE}px`,
            }
      }
    >
      <AppBar
        position="fixed"
        sx={{
          bgcolor: (theme) => `${theme.palette.background.paper}d6`,
          backdropFilter: "blur(5px)",
          height: `${NAVBAR_HEIGHT}px`,
          pr: "0 !important",
        }}
        elevation={0}
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
            <Link href={LANDING_PAGE}>
              <Image
                src={
                  theme.palette.mode === THEME_VALUES.dark
                    ? Images.LogoWhite
                    : Images.LogoBlack
                }
                alt="Logo"
                width={isMobile ? 70 : 150}
                height={isMobile ? 70 : 75}
                priority
                style={{ paddingTop: 5 }}
                loading="eager"
              />
            </Link>

            {!isMobile && (
              <Stack direction="row">
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
                <Link href={ABOUT_US_PAGE}>
                  <Button
                    sx={{ my: 2, display: "block", fontSize: "14px" }}
                    color="secondary"
                  >
                    ABOUT US
                  </Button>
                </Link>
              </Stack>
            )}

            <Stack direction="row" alignItems="center" spacing={2}>
              <NavbarSearch />

              {!isMobile && <ThemeSwitch />}

              {loggedIn && <ProfileDropdown />}

              {!loggedIn && !isMobile && (
                <Stack direction="row" spacing={2}>
                  {AUTH_BUTTONS.map((btn) => {
                    return (
                      <Link
                        href={btn.href}
                        key={btn.title}
                        target={btn.target ? "_blank" : ""}
                      >
                        {btn.provided ? (
                          <Button
                            variant={btn.variant}
                            fullWidth
                            color={btn.color}
                          >
                            {btn.title}
                          </Button>
                        ) : (
                          <Tooltip
                            title={
                              <Typography variant="body2" textAlign="justify">
                                Sign up API was not provided! You have to sign
                                up in the TMDB website to continue.
                              </Typography>
                            }
                          >
                            <Button
                              variant={btn.variant}
                              fullWidth
                              color={btn.color}
                            >
                              {btn.title}
                            </Button>
                          </Tooltip>
                        )}
                      </Link>
                    );
                  })}
                </Stack>
              )}

              {isMobile && (
                <IconButton size="medium" onClick={toggleDrawer}>
                  <MenuRoundedIcon fontSize="inherit" />
                </IconButton>
              )}
            </Stack>

            {/* Drawer */}
            {isMobile && (
              <NavbarSidebar onClose={toggleDrawer} open={drawerState} />
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
