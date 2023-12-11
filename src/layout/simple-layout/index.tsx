import { Box } from "@mui/material";
import { ReactNode } from "react";
import Footer from "../main-layout/footer";
import Navbar from "../main-layout/navbar";

export type Props = {
  children: ReactNode;
};

const SimpleLayout: React.FC<Props> = ({ children }) => {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        minHeight: "100vh",
        color: "text.primary",
      }}
    >
      <Box component={"main"}>{children}</Box>
    </Box>
  );
};

export default SimpleLayout;
