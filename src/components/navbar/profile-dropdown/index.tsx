import { Menu, useTheme } from "@mui/material";
import { PROFILE_ITEMS } from "../var";
import ProfileDropdownItem from "./profile-dropdown-item";

type Props = {
  anchorElUser: any;
  handleCloseUserMenu: any;
};

const ProfileDropdown: React.FC<Props> = ({
  anchorElUser,
  handleCloseUserMenu,
}) => {
  const theme = useTheme();
  return (
    <Menu
      sx={{
        mt: 7,
        "& .MuiMenu-paper": {
          background: `${theme.palette.background.paper}f6`,
          color: theme.palette.text.primary,
          boxShadow: 2,
          py: 1.5,
          pr: 1,
          minWidth: 100,
          borderRadius: 5,
        },
      }}
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
        <ProfileDropdownItem key={item.title} {...item} />
      ))}
    </Menu>
  );
};

export default ProfileDropdown;
