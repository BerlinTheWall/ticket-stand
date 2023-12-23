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
import { Dispatch, SetStateAction } from "react";

type Props = {
  toggleDrawer: () => void;
  loginState: boolean;
  setLoginState: Dispatch<SetStateAction<boolean>>;
};
export const NavbarSidebar: React.FC<Props> = ({
  toggleDrawer,
  loginState,
  setLoginState,
}) => (
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
