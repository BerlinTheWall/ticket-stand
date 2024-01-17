import { styled, alpha, useTheme } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Box, Stack, TextField, Typography } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { getSearchMovie } from "@/api/movies";
import { Movie } from "@/types/movie";
import Image from "next/image";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import Link from "next/link";
import { SINGLE_MOVIE_PAGE } from "@/constants/urls";

export const NavbarSearch = () => {
  const theme = useTheme();
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleChange = useDebounce(async (e: any) => {
    // console.log(e.target.value);
    // console.log("Searching for:", e.target.value);
    try {
      const movies = await getSearchMovie(e.target.value);
      setSearchResults(movies.results);
      console.log(movies);
    } catch (error) {
      console.log(error);
    }
  }, 1000);

  return (
    <>
      <TextField
        fullWidth
        autoComplete="false"
        name="movie-search"
        size="small"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        sx={{
          paddingLeft: 0,
          width: "100%",
          // border: "none",
          // "&:hover": {
          //   color: "red",
          //   width: "100%",
          // },
          //   color: "inherit",
          //   width: "10", // Set initial width to 0 to make it hidden
          overflow: "hidden",
          transition: theme.transitions.create("width"),
          //   transition: theme.transitions.create("width"),

          //   [theme.breakpoints.up("sm")]: {
          // width: "10ch",
          //   "&:hover": {
          //     width: "50%",
          //   },
          //   "&:focus": {
          //     width: "50%",
          //   },
          //   },
          //   "&:hover": {
          //     width: "100%",
          //     // width: "20ch",
          //     // Expand width to 100% on hover
          //   },
          //   "&:focus": {
          //     // width: "100%",
          //     // backgroundColor: "white",
          //     width: "100%",
          //     // Expand width to 100% on hover
          //   },

          "& .MuiInputBase-input": {
            // padding: theme.spacing(1, 1, 1, 0),
            //   paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            width: "100%", // Set initial width to 100%
            transition: theme.transitions.create("width"),

            [theme.breakpoints.up("sm")]: {
              width: "10ch",
              "&:focus": {
                width: "20ch",
              },
            },
          },
        }}
        onChange={handleChange}
        type={"text"}
        variant="outlined"
        placeholder="Movie, TV..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          sx: {
            borderRadius: 10,
            height: 45,
            // width: "33%",
          },
        }}
      />
      {searchResults.length !== 0 && isFocused && (
        <Stack
          sx={{
            position: "absolute",
            top: 66,
            maxWidth: 330,
            whiteSpace: "nowrap",
            maxHeight: 300,
            overflowY: "scroll",
            overflowX: "hidden",
            borderRadius: 3,
            bgcolor: theme.palette.background.default,
          }}
        >
          {searchResults.map((searchResult, index: number) => {
            return (
              <Link
                href={`${SINGLE_MOVIE_PAGE}/${searchResult.id}`}
                key={searchResult.id}
              >
                <Stack
                  direction={"row"}
                  gap={2}
                  borderBottom={
                    index !== searchResults.length - 1
                      ? `1px solid ${theme.palette.primary.light}`
                      : "none"
                  }
                  px={1}
                  py={0.8}
                >
                  <Image
                    src={
                      "https://www.themoviedb.org/t/p/w500/" +
                      searchResult.poster_path
                    }
                    alt={searchResult.original_title}
                    width={35}
                    height={50}
                  />
                  <Stack direction={"column"}>
                    <Typography fontWeight="bold" pt={0.2}>
                      {/* {searchResult.original_title} */}
                      {searchResult.original_title}
                    </Typography>
                    <Stack direction={"row"}>
                      <StarRateRoundedIcon sx={{ color: "warning.light" }} />
                      {/* <Typography fontWeight="400" pt={0.2}>
                        {searchResult.vote_average.toFixed(1)}
                      </Typography> */}
                    </Stack>
                  </Stack>
                </Stack>
              </Link>
            );
          })}
        </Stack>
      )}
    </>
  );
};

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.primary.contrastText, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.contrastText, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  //   width: "10", // Set initial width to 0 to make it hidden
  overflow: "hidden",
  transition: theme.transitions.create("width"),

  "&:focus": {
    // width: "100%",
    width: "20ch",
    // Expand width to 100% on hover
  },

  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%", // Set initial width to 100%
    transition: theme.transitions.create("width"),

    [theme.breakpoints.up("sm")]: {
      width: "10ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
