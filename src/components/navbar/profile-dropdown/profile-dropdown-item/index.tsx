import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";

type Props = {
  item: {
    title: string;
    href?: string;
    onClick?: () => void;
    icon: any;
  };
};

const ProfileDropdownItem: React.FC<Props> = ({ item }) => {
  const button = (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        cursor: "pointer",
        transition: "all 0.2s ease-in-out",
        ":hover": {
          color: "primary.main",pl:0.2
        },
      }}
    >
      <item.icon fontSize="small" />
      <Typography
        component="h3"
        sx={{
          fontSize: 14,
          textAlign: "left",
          pl: 1,
        }}
      >
        {item.title}
      </Typography>
    </Stack>
  );
  return !!item.href ? (
    <Link href={item.href}>{button}</Link>
  ) : (
    <Box
      onClick={() => {
        if (item.onClick) {
          item.onClick();
        }
      }}
    >
      {button}
    </Box>
  );
};

export default ProfileDropdownItem;
