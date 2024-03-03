import { Stack, SxProps, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

type Props = {
  href: string;
  sx?: SxProps;
};

const SeeMoreBox: React.FC<Props> = ({ href, sx }) => {
  const theme = useTheme();

  return (
    <Stack
      direction="row"
      spacing={0.25}
      sx={{
        py: 0.5,
        px: 2,
        borderRadius: 4,
        justifyContent: "space-between",
        width: "fit-content",
        alignItems: "center",
        color: "primary.dark",
        border: "1px solid",
        borderColor: "primary.dark",
        bgcolor: `${theme.palette.primary.dark}15`,
        transition: "background-color 0.3s",
        "&:hover": {
          bgcolor: `${theme.palette.primary.dark}50`,
        },
        ...sx,
      }}
      component={Link}
      href={href}
    >
      <Typography pb={0.35}>See More</Typography>
      <ChevronRightRoundedIcon />
    </Stack>
  );
};

export default SeeMoreBox;
