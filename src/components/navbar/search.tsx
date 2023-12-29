import { styled, alpha, useTheme } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { getSearchMovie } from "@/api/movies";
import { Movie } from "@/types/movie";

export const NavbarSearch = () => {
  const theme = useTheme();
  const [searchResults, setSearchResults] = useState<Movie[]>([]);

  const handleChange = useDebounce(async (e: any) => {
    // console.log(e.target.value);
    // console.log("Searching for:", e.target.value);
    try {
      const movies = await getSearchMovie(e.target.value);
      setSearchResults(movies.results);
    } catch (error) {
      console.log(error);
    }
  }, 1000);

  return (
    <TextField
      fullWidth
      name="Movie Search"
      size="small"
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
      // value={value}
      // label={label}
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
