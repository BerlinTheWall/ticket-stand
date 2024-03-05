import { Box, Stack, SxProps, Typography } from "@mui/material";
import Image from "next/image";
import errorImg from "../../../public/assets/images/shrek-error.webp";

interface ErrorMessageProps {
  sx?: SxProps;
  imageSX?: SxProps;
  title?: string | JSX.Element;
}

const DEFAULT_TITLE = (
  <Typography fontSize={22}>
    Sorry. <br /> An error has occurred.
    <br /> Come back in a few minutes.
  </Typography>
);

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  sx,
  imageSX,
  title = DEFAULT_TITLE,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        mt: 2,
        justifyContent: "center",
        ...sx,
      }}
    >
      <Box
        sx={{
          width: 350,
          height: 250,
          position: "relative",
          ...imageSX,
        }}
      >
        <Image src={errorImg} alt="error image" fill />
      </Box>
      {title}
    </Box>
  );
};

export default ErrorMessage;
