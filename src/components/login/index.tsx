import Image from "next/image";
import { Button, Link, Stack, Typography, useTheme } from "@mui/material";
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

interface IFormInput {
  username: string;
  password: string;
}

const defaultValues = {
  username: "",
  password: "",
};

const LoginForm: React.FC = () => {
  const router = useRouter();
  const theme = useTheme();

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
    setValue,
    register,
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
      getAccount(sessionId.data.session_id);
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
              ? Images.LogoWhite
              : Images.LogoBlack
          }
          alt="logo"
          width={40}
          height={40}
        />
        <Typography
          component="h1"
          sx={{ fontSize: 25, fontWeight: 500, textAlign: "center" }}
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
      <Typography sx={{ textAlign: "center", fontSize: 15 }}>
        Don&apos;t have an account? <Link>Sign up</Link>
      </Typography>
    </Stack>
  );
};

export default LoginForm;
