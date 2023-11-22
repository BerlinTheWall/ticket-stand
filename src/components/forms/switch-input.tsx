import { FormControl, FormControlLabel, Switch } from "@mui/material";
import { Controller } from "react-hook-form";
import { FormInputProps } from "./input-props";

export const FormInputSwitch: React.FC<FormInputProps> = ({
  name,
  control,
  label,
}) => {
  return (
    <FormControlLabel
      sx={{ whiteSpace: "nowrap" }}
      control={
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value } }) => {
            return <Switch checked={value} onChange={onChange} />;
          }}
        />
      }
      label={label}
    />
  );
};
