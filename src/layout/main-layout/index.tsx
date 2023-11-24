import { Box, Container } from "@mui/material";
import Footer from "./footer";
import Navbar from "./navbar";
import { ReactNode } from "react";

export type Props = {
  children: ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        minHeight: "100vh",
        color: "text.primary",
      }}
    >
      <Navbar />
      <Box component={"main"}>{children}</Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;
