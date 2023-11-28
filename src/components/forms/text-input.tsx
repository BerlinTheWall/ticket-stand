import { useController } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { FormInputProps } from "./input-props";

export const FormInputText = ({
  name,
  control,
  label,
  inputType,
  rules,
}: FormInputProps) => {
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
