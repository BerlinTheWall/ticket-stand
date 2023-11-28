import { useController } from "react-hook-form";
import { FormInputProps } from "./input-props";
import { Box, Slider, Typography } from "@mui/material";

interface Props extends FormInputProps {
  step: number;
  min: number;
  max: number;
}

export const FormInputSlider = ({
  name,
  control,
  label,
  rules,
  step,
  min,
  max,
}: Props) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    defaultValue: [min, max],
  });

  return (
    <Box
      sx={{
        display: "flex",
        gap: 4,
        alignItems: "center",
        width: "100%",
        pr: 2,
      }}
    >
      <Typography whiteSpace={"nowrap"}>{label}</Typography>
      <Slider
        value={value}
        onChange={onChange}
        valueLabelDisplay="auto"
        step={step}
        marks
        min={min}
        max={max}
      />
    </Box>
  );
};
