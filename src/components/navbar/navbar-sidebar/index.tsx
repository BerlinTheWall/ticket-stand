import {
  Box,
  Button,
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { PROFILE_ITEMS } from "../var";
import { useIsLoggedIn } from "@/hooks/useIsLoggedIn";
import Link from "next/link";
import { LANDING_PAGE, LOGIN_PAGE, MOVIES_PAGE } from "@/constants/urls";
import { MovieGenre } from "@/constants/movie-genre";
import { useState } from "react";
import { ChevronRight } from "@mui/icons-material";

type Props = {
  toggleDrawer: () => void;
};

const DRAWER_ITEMS = [
  { name: "Home", href: LANDING_PAGE },
  {
    name: "Discover",
    items: MovieGenre.map((item) => ({
      name: item.name,
      href: `${MOVIES_PAGE}?with_genres=${item.id}`,
    })),
  },
  { name: "Movie Release", href: LANDING_PAGE },
];

export const NavbarSidebar: React.FC<Props> = ({ toggleDrawer }) => {
  const loggedIn = useIsLoggedIn();

  return (
    <Box
      role="menubar"
      // onClick={toggleDrawer}
      // onKeyDown={toggleDrawer}
      width={"200px"}
    >
      <List>
        {DRAWER_ITEMS.map((item, i) => (
          <DrawerListItem key={i} item={item} />
        ))}
      </List>
      <Divider />
      <Box
        sx={{
          display: loggedIn ? "none" : "flex",
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
        <Link href={LOGIN_PAGE}>
          <Button
            variant="contained"
            fullWidth
            color="primary"
            sx={{ fontSize: 15 }}
          >
            Login
          </Button>
        </Link>
      </Box>
      {loggedIn && (
        <List>
          {PROFILE_ITEMS.map((item) => (
            <ListItem key={item.title} disablePadding>
              <ListItemButton>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

const DrawerListItem = ({ item }: any) => {
  const [openCollapse, setOpenCollapse] = useState(false);
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText
            primary={
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography>{item.name} </Typography>
                {item?.items && (
                  <ChevronRight
                    sx={{
                      transform: openCollapse ? "rotate(90deg)" : "none",
                      transition: "all 0.3s",
                    }}
                    color="disabled"
                  />
                )}
              </Stack>
            }
            primaryTypographyProps={{ fontSize: 18 }}
            onClick={() => setOpenCollapse((prev) => !prev)}
          />
        </ListItemButton>
      </ListItem>
      {item?.items && (
        <Collapse in={openCollapse} sx={{ mt: 0 }}>
          <Stack spacing={1} mt={1}>
            {item.items?.map((item: any) => {
              return (
                <Link key={item.href} href={item.href}>
                  <Typography component="h3" pl={4}>
                    {item.name}
                    <Divider />
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
