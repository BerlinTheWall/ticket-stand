import { MovieGenre } from "@/constants/movie-genre";
import { Genre } from "@/types/genres";
import Image from "next/image";
import {
  Box,
  Button,
  Grid,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormInputText } from "../forms/text-input";
import Images from "@/utils/image-helper";
import { THEME_VALUES } from "@/mui/theme";

interface IFormInput {
  username: string;
  password: string;
}

const defaultValues = {
  username: "",
  password: "",
};

const LoginForm: React.FC = () => {
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
    setValue,
    register,
  } = useForm<IFormInput>({
    defaultValues: defaultValues,
  });

  const theme = useTheme();

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
          component={"h1"}
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
          minLength: { value: 5, message: "Please enter more than 5 char" },
        }}
      />
      <FormInputText
        name={"password"}
        control={control}
        label={"Password"}
        inputType="password"
        rules={{
          required: "This field is required",
          minLength: { value: 5, message: "Please enter more than 5 char" },
        }}
      />
      <Button
        onClick={handleSubmit(onSubmit)}
        variant={"contained"}
        sx={{ height: 40 }}
      >
        Login
      </Button>
      <Typography sx={{ textAlign: "center", fontSize: 15 }}>
        Don&apos;t have an account? <Link>Sign up</Link>
      </Typography>
    </Stack>
  );
};

export default LoginForm;
