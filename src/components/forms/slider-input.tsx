import { useController } from "react-hook-form";
import { FormInputProps } from "./input-props";
import { Box, Slider, Stack, Typography } from "@mui/material";
import { useState } from "react";

interface Props extends FormInputProps {
  step: number;
  min: number;
  max: number;
  marks?: any[];
  isDouble?: boolean;
  showValue?: boolean;
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
  showValue = false,
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

  const [showDigits, setShowDigits] = useState<boolean>(showValue);
  const handleShowDigits = (value: boolean) => {
    setShowDigits(value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 4,
        alignItems: "center",
        width: "100%",
        pr: 2,
      }}
      onMouseEnter={() => handleShowDigits(true)}
      onMouseLeave={() => handleShowDigits(false)}
    >
      <Stack direction={"row"} gap={1} alignItems={"center"}>
        <Typography sx={sx} whiteSpace={"nowrap"}>
          {label}:
        </Typography>
        {isDouble ? (
          <>
            <Typography fontWeight={"bold"} color={"primary.dark"}>
              {value[0]}
            </Typography>
            <span>-</span>
            <Typography fontWeight={"bold"} color={"primary.dark"}>
              {value[1]}
            </Typography>
          </>
        ) : (
          <Typography
            sx={sx}
            fontWeight={"bold"}
            color={"primary.dark"}
            fontSize={20}
          >
            {value}
          </Typography>
        )}
      </Stack>
      <Slider
        value={value}
        onChange={onChange}
        valueLabelDisplay={showDigits ? "on" : "auto"}
        step={step}
        marks={marks}
        min={min}
        max={max}
      />
    </Box>
  );
};
