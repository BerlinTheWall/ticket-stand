import { Box } from "@mui/material";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { IChildren } from "@/types/component-type/IChildren";

const MainLayout: React.FC<IChildren> = ({ children }) => {
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
