import { Genre } from "@/types/genres";
import { SxProps, Theme } from "@mui/material";

export interface FormInputProps {
  name: string;
  control?: any;
  label: string;
  inputType?: string;
  options?: Genre[];
  selectedDropdownText?: string;
  setValue?: any;
  rules?: any;
  sx?: SxProps<Theme>;
  inputSx?: SxProps<Theme>;
}
