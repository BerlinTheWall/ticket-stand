import { Box, Typography, useTheme } from "@mui/material";
import Link from "next/link";

type Props = {
  title: string;
  isLink: boolean;
  href?: string;
  onClick?: () => void;
};

const ProfileDropdownItem: React.FC<Props> = ({
  title,
  isLink,
  href,
  onClick,
}) => {
  const theme = useTheme();

  const boxContent = (
    <Box onClick={onClick} sx={{ px: 2.5, py: 1.25, cursor: "pointer" }}>
      <Typography
        textAlign="left"
        fontWeight={700}
        component="h3"
        sx={{
          pl: 1,
          cursor: "pointer",
          borderLeft: `2px solid ${theme.palette.primary.main}`,
          transition: "padding-left 0.2s ease-in-out",
          ":hover": {
            pl: 1.5,
            color: theme.palette.primary.main,
          },
        }}
      >
        {title}
      </Typography>
    </Box>
  );

  return isLink && href ? <Link href={href}>{boxContent}</Link> : boxContent;
};

export default ProfileDropdownItem;