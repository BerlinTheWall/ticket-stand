import LoginForm from "@/components/login";
import MainLayout from "@/layout/main-layout";
import { Box, Container, useTheme } from "@mui/material";
import { NextPage } from "next";
import classes from "../styles/login.module.css";
import HeadTitle from "@/components/head-title";

const LoginPage: NextPage = () => {
  const theme = useTheme();
  return (
    <MainLayout>
      <HeadTitle title="Login" />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box className={classes.square2} bgcolor={theme.palette.primary.main} />
        <Box className={classes.square1} />
        <Box className={classes.square3} />
        <Box className={classes.square4} />
        <Container
          sx={{
            position: "relative",
            width: "340px",
            height: "auto",
            backgroundColor: "background.default",
            display: "flex",
            borderRadius: "10px",
            paddingY: "30px",
            boxShadow: `0 7px 20px ${theme.palette.common.black}`,
            border: `1px solid ${theme.palette.primary.main}`,
          }}
        >
          <LoginForm />
        </Container>
      </Box>
    </MainLayout>
  );
};
export default LoginPage;
