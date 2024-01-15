import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import { Stack, useTheme } from "@mui/material";

type Props = {
  text: string;
  maxLength: number;
};

const ReadMoreCollapse: React.FC<Props> = ({ text, maxLength }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };
  const theme = useTheme();

  return (
    <Stack mt={2} textAlign={"justify"} px={3}>
      <Typography variant="body1">
        {expanded ? text : `${text.slice(0, maxLength)}...`}
      </Typography>
      <Collapse in={expanded}>
        <Typography variant="body1">{text}</Typography>
      </Collapse>
      <Typography
        onClick={handleToggle}
        sx={{
          color: theme.palette.primary.dark,
          mt: 2,
          cursor: "pointer",
          textAlign: "right",
        }}
      >
        {expanded ? "Read Less" : "Read More..."}
      </Typography>
    </Stack>
  );
};

export default ReadMoreCollapse;
