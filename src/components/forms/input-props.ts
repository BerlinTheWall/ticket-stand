import { SxProps, Theme } from "@mui/material";

export interface FormInputProps {
  name: string;
  control?: any;
  label: string;
  setValue?: any;
  rules?: any;
  sx?: SxProps<Theme>;
  inputSx?: SxProps<Theme>;
}
