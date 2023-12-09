import { useController } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { FormInputProps } from "./input-props";

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
      error={!!error}
      onChange={onChange}
      value={value}
      label={label}
      type={inputType ? inputType : "text"}
      variant="outlined"
      inputRef={ref}
      inputProps={{ maxLength: maxLength }}
      onInput={
        inputType === "number"
          ? (e: any) => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, maxLength);
            }
          : () => {}
      }
    />
  );
};
