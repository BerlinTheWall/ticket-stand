import { MenuItem, TextField } from "@mui/material";
import { useController } from "react-hook-form";
import { FormInputProps } from "./input-props";
import { Genre } from "@/types/genres";

interface Props extends FormInputProps {
  options?: Genre[];
  selectedDropdownText?: string;
}

export const FormInputSelect: React.FC<Props> = ({
  options,
  name,
  control,
  label,
  selectedDropdownText,
  rules,
}) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    defaultValue: "",
  });

  const generateSingleOption = () => {
    return options?.map((option: any) => (
      <MenuItem key={option.id} value={option.id}>
        {option.name}
      </MenuItem>
    ));
  };

  return (
    <TextField
      fullWidth
      select
      size="small"
      onChange={onChange}
      value={value}
      label={label}
      error={!!error}
      helperText={error ? error.message : null}
      defaultValue={""}
    >
      <MenuItem value={""} disabled>
        {selectedDropdownText ? selectedDropdownText : label}
      </MenuItem>
      {generateSingleOption()}
    </TextField>
  );
};
