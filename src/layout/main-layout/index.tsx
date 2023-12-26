import { Box, Container } from "@mui/material";
import Footer from "./footer";
import Navbar from "./navbar";
import { ReactNode } from "react";
import { NEED_MARGIN_TOP_VALUE } from "./var";

export type Props = {
  children: ReactNode;
  needMargin?: boolean;
};

const MainLayout: React.FC<Props> = ({ children, needMargin = false }) => {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        minHeight: "100vh",
        color: "text.primary",
      }}
    >
      <Navbar />
      <Box component={"main"} mt={needMargin ? NEED_MARGIN_TOP_VALUE : 0}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;
