import { IChildren } from "@/types/component-type/IChildren";
import { Box } from "@mui/material";

const SimpleLayout: React.FC<IChildren> = ({ children }) => {
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
