import { useController } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { FormInputProps } from "./input-props";
import { Box, Slider, Typography } from "@mui/material";
import { useState } from "react";

export const FormInputSlider = ({
  name,
  control,
  label,
  rules,
}: FormInputProps) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    defaultValue: [0, 10],
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
        step={1}
        marks
        min={0}
        max={10}
      />
    </Box>
  );
};
