import {
  Avatar,
  Divider,
  IconButton,
  Menu,
  Stack,
  Tooltip,
} from "@mui/material";
import { PROFILE_ITEMS } from "../var";
import ProfileDropdownItem from "./profile-dropdown-item";
import { useContext, useState } from "react";
import { AppContext } from "@/context/AppContext";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { ContextValue } from "@/types/general";

const ProfileDropdown: React.FC = () => {
  const { user, logout } = useContext(AppContext) as ContextValue;
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const open = Boolean(anchorElUser);

  return (
    <>
      <Tooltip title={user?.username}>
        <IconButton
          onClick={handleOpenUserMenu}
          sx={{ p: 0, overflow: "hidden" }}
          id="menu-button"
          aria-controls={open ? "menu-appbar" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar
            src={
              "http://www.themoviedb.org/t/p/w150_and_h150_face" +
              user!?.avatar?.tmdb?.avatar_path
            }
            sx={{ bgcolor: "primary.main" }}
            alt={`${user!?.username} logo`}
          />
        </IconButton>
      </Tooltip>
      <Menu
        open={open}
        onClose={handleCloseUserMenu}
        id="menu-appbar"
        anchorEl={anchorElUser}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        MenuListProps={{
          "aria-labelledby": "menu-button",
        }}
        PaperProps={{
          elevation: 0,
          sx: {
            minWidth: 120,
            px: 2,
            display: "grid",
            overflow: "visible",
            filter: (theme) =>
              `drop-shadow(0px 2px 8px ${theme.palette.primary.main})`,
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
      >
        <Stack divider={<Divider flexItem />} spacing={1}>
          {PROFILE_ITEMS.map((item) => (
            <ProfileDropdownItem key={item.title} item={item} />
          ))}

          <ProfileDropdownItem
            item={{
              icon: LogoutRoundedIcon,
              title: "Logout",
              onClick: logout,
            }}
          />
        </Stack>
      </Menu>
    </>
  );
};

export default ProfileDropdown;
