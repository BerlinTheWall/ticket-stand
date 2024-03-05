import { Box, SxProps, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import errorImg from "../../../public/assets/images/shrek-error.webp";

interface ErrorMessageProps {
  sx?: SxProps;
  imageSX?: SxProps;
  title?: string | JSX.Element;
}

const DEFAULT_TITLE = (
  <Typography component={"h2"} sx={{ fontSize: 22, textAlign: "justify" }}>
    Sorry. <br /> An error has occurred.
    <br /> Come back in a few minutes.
  </Typography>
);

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  sx,
  imageSX,
  title = DEFAULT_TITLE,
}) => {
  const isMobile = useMediaQuery("(max-width:400px)");
  return (
    <Box
      sx={{
        display: "flex",
        gap: 4,
        mt: "12%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: { xs: "column", md: "row" },
        mx: "auto",
        textAlign: "center",
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
        <Image
          src={errorImg}
          alt="error image"
          layout="raw"
          style={{
            width: isMobile ? "90%" : "100%",
            height: "100%",
            objectFit: "cover",
            backgroundPosition: "center center",
            borderRadius: "12px",
            marginTop: 16,
          }}
        />
      </Box>
      {title}
    </Box>
  );
};

export default ErrorMessage;
