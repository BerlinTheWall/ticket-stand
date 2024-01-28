import { MovieGenre } from "@/constants/movie-genre";
import { Box, Button, Grid, Stack, useTheme } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormInputText } from "../forms/text-input";
import { FormInputSelect } from "../forms/select-input";
import { FormInputSwitch } from "../forms/switch-input";
import { FormInputSlider } from "../forms/slider-input";
import { useRouter } from "next/router";
import { filterObject, filteringMethod } from "@/utils/utils";
import { MOVIES_PAGE } from "@/constants/urls";
import { useEffect } from "react";

interface IFormInput {
  primary_release_year: string;
  with_genres: number | string;
  isAdult: boolean;
  score: number[];
}

const defaultValues = {
  primary_release_year: "",
  with_genres: "",
  isAdult: false,
  score: [0, 10],
};

type Props = {
  readUrl?: boolean;
};

const SearchBar: React.FC<Props> = ({ readUrl = false }) => {
  const router = useRouter();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    let newData = {
      ...data,
      certification: data.isAdult ? 18 : null,
      certification_country: data.isAdult ? "DE" : null,
      "vote_average.gte": data.score[0].toString(),
      "vote_average.lte": data.score[1].toString(),
    };
    router.push(MOVIES_PAGE + filteringMethod(filterObject(newData)));
  };
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

  useEffect(() => {
    if (readUrl) {
      const year = router.query.primary_release_year as string;
      const genre = router.query.with_genres as string;
      const scoreGte = router.query["vote_average.gte"] as unknown as number;
      const scoreLte = router.query["vote_average.lte"] as unknown as number;
      const isAdult = router.query.isAdult as unknown as boolean;
      const score =
        scoreGte !== undefined && scoreLte !== undefined
          ? [scoreGte, scoreLte]
          : [0, 10];

      reset({
        primary_release_year: year,
        with_genres: genre,
        isAdult: isAdult,
        score: score,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query, readUrl]);

  const theme = useTheme();

  return (
    <Box
      sx={{
        marginX: { xs: 2, sm: 5 },
        paddingX: { xs: 2, sm: 5 },
        border: `2px solid ${theme.palette.primary.main}`,
        borderRadius: 5,
        boxShadow: 5,
        bgcolor: `${theme.palette.primary.main}15`,
      }}
    >
      <Grid
        container
        spacing={2}
        py={3}
        alignItems={"center"}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Grid item lg={1.35} md={1.9} xs={6}>
          <FormInputText
            name={"primary_release_year"}
            control={control}
            label={"Movie year"}
            inputType="number"
            maxLength={4}
            rules={{
              minLength: { value: 4 },
            }}
          />
        </Grid>
        <Grid item md={2} xs={6}>
          <FormInputSelect
            name={"with_genres"}
            control={control}
            label={"Genre"}
            options={MovieGenre}
            selectedDropdownText="Select a genre"
            // rules={{
            //   required: "Please select a genre",
            //   valueAsNumber: true,
            // }}
          />
        </Grid>
        <Grid item xl={true} lg={4} md={6} xs={12}>
          <FormInputSlider
            name={"score"}
            control={control}
            label={"IMDB Rating"}
            step={1}
            min={0}
            max={10}
            isDouble
          />
        </Grid>
        <Grid item lg={2} md={2} xs={12}>
          <Box display="flex" justifyContent={{ xs: "start", md: "center" }}>
            <FormInputSwitch
              name={"isAdult"}
              control={control}
              label={"R-Rated"}
            />
          </Box>
        </Grid>
        <Grid item xl={2} lg={true} md={true} xs={12}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent={{ xs: "end", lg: "end" }}
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
