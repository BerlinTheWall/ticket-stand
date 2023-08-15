import { Box, Container } from "@mui/material";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { ReactNode } from "react";

export type Props = {
  children: ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <Container
      sx={{ bgcolor: "background.default", minHeight: "100vh" }}
      maxWidth="xl"
    >
      <Navbar />
      <Box component={"main"}>{children}</Box>
      <Footer />
    </Container>
  );
};

export default MainLayout;
