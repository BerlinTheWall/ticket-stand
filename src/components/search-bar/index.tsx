import { MovieGenre } from "@/constants/movie-genre";
import { Genre } from "@/types/genres";
import { Box, Button, Grid, Stack, useTheme } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormInputText } from "../forms/text-input";
import { FormInputSelect } from "../forms/select-input";
import { FormInputSwitch } from "../forms/switch-input";
import { FormInputSlider } from "../forms/slider-input";

interface IFormInput {
  movieName: string;
  genre: number | string;
  isAdult: boolean;
  score: number[];
}

const defaultValues = {
  movieName: "",
  genre: "",
  isAdult: false,
  score: [0, 10],
};

const SearchBar: React.FC = () => {
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
    setValue,
    register,
  } = useForm<IFormInput>({
    defaultValues: defaultValues,
  });

  const theme = useTheme();

  return (
    <Box
      sx={{
        marginX: { sm: 5 },
        paddingX: 5,
        border: `2px solid ${theme.palette.primary.main}`,
        borderRadius: 5,
        boxShadow: 5,
        // ":hover": {
        bgcolor: `${theme.palette.primary.main}15`,
        // },
      }}
    >
      <Grid container spacing={2} py={3}>
        <Grid item md={3} xs={12}>
          <FormInputText
            name={"movieName"}
            control={control}
            label={"Movie name"}
            inputType="text"
            rules={{
              required: "This field is required",
              minLength: { value: 5, message: "Please enter more than 5 char" },
            }}
          />
        </Grid>
        <Grid item md={3} xs={12}>
          <FormInputSelect
            name={"genre"}
            control={control}
            label={"Genre"}
            options={MovieGenre}
            selectedDropdownText="Select a genre"
            rules={{
              required: "Please select a genre",
              valueAsNumber: true,
            }}
          />
        </Grid>
        <Grid item xl={3} lg={4} md={6} xs={12} alignSelf={"center"}>
          <FormInputSlider
            name={"score"}
            control={control}
            label={"IMDB Rating"}
          />
        </Grid>
        <Grid item lg={true} md={2} xs={12} alignSelf={"center"}>
          <Box display="flex" justifyContent={{ xs: "start", md: "center" }}>
            <FormInputSwitch
              name={"isAdult"}
              control={control}
              label={"PG-13"}
            />
          </Box>
        </Grid>
        <Grid item md={true} xs={12}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent={{ xs: "end", lg: "start" }}
            gap={2}
          >
            <Button
              onClick={handleSubmit(onSubmit)}
              variant={"contained"}
              sx={{ height: 40 }}
            >
              Search
            </Button>
            <Button
              onClick={() => reset()}
              variant={"outlined"}
              sx={{ height: 40 }}
            >
              Reset
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchBar;
