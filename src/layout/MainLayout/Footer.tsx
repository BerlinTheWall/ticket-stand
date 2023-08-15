import { Box, Typography } from "@mui/material";
import { common } from "@mui/material/colors";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        paddingX: 5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "space-between", md: "space-between" },
        }}
      >
        <Box sx={{ width: "40%" }}>
          <Typography fontSize={28}>
            Our platform is trusted by millions & features best updated movies
            all around the world.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "end",
          }}
        >
          <Box>
            <Link
              style={{ textDecoration: "none", color: common.white }}
              href={"/"}
            >
              Home
            </Link>
            <span style={{ padding: "0px 10px" }}>/</span>
            <Link
              style={{ textDecoration: "none", color: common.white }}
              href={"/"}
            >
              Discover
            </Link>
            <span style={{ padding: "0px 10px" }}>/</span>
            <Link
              style={{ textDecoration: "none", color: common.white }}
              href={"/"}
            >
              Influence
            </Link>
            <span style={{ padding: "0px 10px" }}>/</span>
            <Link
              style={{ textDecoration: "none", color: common.white }}
              href={"/"}
            >
              Release
            </Link>
          </Box>
          <Box>Icons</Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          my: 7,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row", gap: 4 }}>
          <Typography>Privacy policy</Typography>
          <Typography>Term of service</Typography>
          <Typography>Language</Typography>
        </Box>
        <Box>@2023</Box>
      </Box>
    </Box>
  );
};

export default Footer;
