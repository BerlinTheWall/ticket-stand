import { useController } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { FormInputProps } from "./input-props";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

interface Props extends FormInputProps {
  inputType: string;
  maxLength?: number;
}

export const FormInputText = ({
  name,
  control,
  label,
  inputType,
  rules,
  sx,
  inputSx,
  maxLength,
}: Props) => {
  const {
    field: { onChange, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
  });

  return (
    <TextField
      helperText={error ? error.message : null}
      fullWidth
      size="small"
      sx={sx}
      error={!!error}
      onChange={onChange}
      value={value}
      label={label}
      type={inputType ? inputType : "text"}
      variant="outlined"
      inputRef={ref}
    />
  );
};
