import { useController } from "react-hook-form";
import { FormInputProps } from "./input-props";
import { Box, Slider, Typography } from "@mui/material";

interface Props extends FormInputProps {
  step: number;
  min: number;
  max: number;
  marks?: any[];
  isDouble?: boolean;
}

export const FormInputSlider = ({
  name,
  control,
  label,
  rules,
  step,
  min,
  max,
  marks,
  sx,
  isDouble = false,
}: Props) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    defaultValue: !isDouble ? min : [min, max],
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
      <Typography sx={sx} whiteSpace={"nowrap"}>
        {label}
      </Typography>
      <Slider
        value={value}
        onChange={onChange}
        valueLabelDisplay={!isDouble ? "on" : "auto"}
        step={step}
        marks={marks}
        min={min}
        max={max}
      />
    </Box>
  );
};
