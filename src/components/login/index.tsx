import Image from "next/image";
import { Stack, Tooltip, Typography, useTheme } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormInputText } from "../forms/text-input";
import Images from "@/utils/image-helper";
import { THEME_VALUES } from "@/mui/theme";
import {
  createSessionLogin,
  getAccount,
  getRequestToken,
  getSessionId,
} from "@/api/login";
import { useRouter } from "next/router";
import { LoadingButton } from "@mui/lab";
import Cookies from "js-cookie";
import { ACCOUNT_COOKIE, SESSION_ID_COOKIE } from "@/constants/cookie";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import { ContextValue } from "@/types/general";
import Link from "next/link";
import { SIGN_UP_PAGE } from "@/constants/urls";

interface IFormInput {
  username: string;
  password: string;
}

const defaultValues = {
  username: "",
  password: "",
};

const LoginForm: React.FC = () => {
  const { setUser } = useContext(AppContext) as ContextValue;
  const router = useRouter();
  const theme = useTheme();

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<IFormInput>({
    defaultValues: defaultValues,
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const token = await getRequestToken();
      const login_token = await createSessionLogin(
        data.username,
        data.password,
        token.data.request_token
      );
      const sessionId = await getSessionId(login_token.data.request_token);
      const account = await getAccount(sessionId.data.session_id);
      Cookies.set(SESSION_ID_COOKIE, sessionId.data.session_id);
      Cookies.set(ACCOUNT_COOKIE, JSON.stringify(account.data));
      setUser(account.data);
      router.back();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Stack height={"100%"} width={"100%"} gap={3}>
      <Stack alignItems="center" direction="row" gap={9}>
        <Image
          src={
            theme.palette.mode !== THEME_VALUES.dark
              ? Images.OldLogoWhite
              : Images.OldLogoBlack
          }
          alt="logo"
          width={40}
          height={40}
        />
        <Typography
          component="h1"
          sx={{ fontSize: 25, fontWeight: 700, textAlign: "center" }}
        >
          Login
        </Typography>
      </Stack>
      <FormInputText
        name={"username"}
        control={control}
        label={"Username"}
        inputType="text"
        rules={{
          required: "This field is required",
        }}
      />
      <FormInputText
        name={"password"}
        control={control}
        label={"Password"}
        inputType="password"
        rules={{
          required: "This field is required",
        }}
      />
      <LoadingButton
        onClick={handleSubmit(onSubmit)}
        variant={"contained"}
        sx={{ height: 40 }}
        loading={isSubmitting}
      >
        Login
      </LoadingButton>
      <Stack direction={"row"} justifyContent={"center"} gap={1}>
        <Typography sx={{ textAlign: "center", fontSize: 15 }}>
          Don&apos;t have an account?
        </Typography>
        <Link href={SIGN_UP_PAGE} target="_blank">
          <Tooltip
            title={
              <Typography variant="body2" textAlign="justify">
                Sign up API was not provided! You have to sign up in the TMDB
                website to continue.
              </Typography>
            }
          >
            <Typography
              sx={{
                textDecoration: "underline",
                color: theme.palette.primary.dark,
              }}
            >
              Sign up
            </Typography>
          </Tooltip>
        </Link>
      </Stack>
    </Stack>
  );
};

export default LoginForm;
