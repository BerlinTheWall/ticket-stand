import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { PAGES, PROFILE_ITEMS } from "../var";
import { useIsLoggedIn } from "@/hooks/useIsLoggedIn";
import Link from "next/link";
import { LOGIN_PAGE } from "@/constants/urls";

type Props = {
  toggleDrawer: () => void;
};
export const NavbarSidebar: React.FC<Props> = ({ toggleDrawer }) => {
  const loggedIn = useIsLoggedIn();

  return (
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
