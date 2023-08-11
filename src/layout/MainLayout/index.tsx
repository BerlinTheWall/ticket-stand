import { Box } from "@mui/material";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { ReactNode } from "react";

export type Props = {
  children: ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box
        component={"main"}
        sx={{ bgcolor: "background.default", minHeight: "100vh" }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default MainLayout;
