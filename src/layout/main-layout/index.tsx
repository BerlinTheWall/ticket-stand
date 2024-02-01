import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { IChildren } from "@/types/component-type/IChildren";
import { Box } from "@mui/material";
import { NEED_MARGIN_TOP_VALUE } from "@/components/navbar/var";
import AddToListModal from "@/components/media/add-to-list-modal";

export type Props = {
  children: IChildren["children"];
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
      <AddToListModal />
    </Box>
  );
};

export default MainLayout;
