import LoginForm from "@/components/login";
import MainLayout from "@/layout/main-layout";
import { Box, Container } from "@mui/material";
import { NextPage } from "next";

const LoginPage: NextPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component="section"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minWidth: "100vh",
        }}
      >
        <Box
          className="square-2"
          sx={{
            position: "absolute",
            filter: "blur(150px)",
            top: "-150px",
            width: "700px",
            height: "700px",
            backgroundColor: "#00925d",
          }}
        />
        <Box
          className="square-1"
          sx={{
            position: "absolute",
            filter: "blur(150px)",
            bottom: "-150px",
            left: "100px",
            width: "600px",
            height: "600px",
            backgroundColor: "#007aff",
          }}
        />
        <Box
          className="square-3"
          sx={{
            position: "absolute",
            filter: "blur(150px)",
            bottom: "100px",
            right: "100px",
            width: "400px",
            height: "400px",
            backgroundColor: "#5d6166",
          }}
        />
        <Box
          className="square-4"
          sx={{
            position: "absolute",
            filter: "blur(150px)",
            bottom: "-150px",
            width: "400px",
            height: "400px",
            backgroundColor: "#4a1c68",
          }}
        />
        <Container
          sx={{
            position: "relative",
            width: "340px",
            height: "auto",
            backgroundColor: "background.default",
            display: "flex",
            borderRadius: "10px",
            paddingY: "30px",
            boxShadow: "0 25px 45px rgba(0, 0, 0, 0.3)",
            border: "1px solid #00925d",
          }}
        >
          <LoginForm />
        </Container>
      </Box>
    </Box>
  );
};
LoginPage.PageLayout = MainLayout;
export default LoginPage;
