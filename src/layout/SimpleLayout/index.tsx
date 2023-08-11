import { Box } from "@mui/material";
import { ReactNode } from "react";

export type Props = {
  children: ReactNode;
};

const SimpleLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Box component={"main"} sx={{ bgcolor: "background.default" }}>
        {children}
      </Box>
    </>
  );
};

export default SimpleLayout;
