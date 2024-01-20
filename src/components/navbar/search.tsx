import { useTheme } from "@mui/material/styles";
import {
  Box,
  ClickAwayListener,
  Fade,
  Grid,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
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
import { THEME_VALUES } from "@/mui/theme";

export const NavbarSearch = () => {
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const handleChange = useDebounce(async (e: any) => {
    try {
      const movies = await getSearchMovie(e.target.value);
      setSearchResults(movies.results);
    } catch (error) {
      console.log(error);
    }
  }, 1000);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <ClickAwayListener
      onClickAway={() => {
        if (open) {
          toggleOpen();
        }
      }}
    >
      <Box>
        <OutlinedInput
          placeholder="Movie, TV..."
          onChange={handleChange}
          sx={{
            height: 40,
            pl: 0,
            width: open ? { sm: 300, xs: 120 } : 40,
            transition: "all 0.5s ease-in-out",
            border: "none",
            borderRadius: 5,
            display: "flex",
            justifyContent: "center",
            boxShadow: 1,
            cursor: "pointer",
            position: "relative",
            fontSize: 14,
            "& input": {
              width: open ? "100%" : 0,
              padding: open ? 1 : 0,
              transition: `width ${open ? "0.3s" : "0.7s"} `,
              border: "none",
            },
          }}
          startAdornment={
            <InputAdornment
              onClick={() => {
                toggleOpen();
              }}
              sx={{ m: 0 }}
              position="start"
            >
              <Box
                sx={{
                  p: 1.5,
                  borderRadius: 1,
                  bgcolor: "transparent",
                  color: "text.primary",
                  display: "flex",
                  cursor: "pointer",
                  position: "relative",
                  width: 44,
                  height: 44,
                }}
              >
                <SearchIcon />
              </Box>
            </InputAdornment>
          }
        />

        {searchResults.length !== 0 && (
          <Fade in={open} timeout={open ? 1000 : 500}>
            <Stack
              sx={{
                transition: "all 0.5s",
                position: "absolute",
                top: 66,
                whiteSpace: "nowrap",
                maxHeight: 300,
                overflowY: "scroll",
                overflowX: "hidden",
                bgcolor: (theme) =>
                  theme.palette.mode === THEME_VALUES.dark
                    ? "grey.800"
                    : "grey.500",
                opacity: open ? 1 : 0,
                color: "text.primary",
                right: { sm: "auto", xs: 0 },
                left: { sm: "auto", xs: 0 },
                borderBottom: "2px solid",
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
                      borderBottom={(theme) =>
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
                      <Stack overflow="hidden" direction={"column"}>
                        <Typography
                          overflow="hidden"
                          textOverflow="ellipsis"
                          fontWeight="bold"
                          pt={0.2}
                        >
                          {searchResult.original_title}
                        </Typography>
                        <Stack direction={"row"}>
                          <StarRateRoundedIcon
                            sx={{ color: "warning.light" }}
                          />
                          <Typography fontWeight="400" pt={0.2}>
                            {searchResult.vote_average.toFixed(1)}
                          </Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Link>
                );
              })}
            </Stack>
          </Fade>
        )}
      </Box>
    </ClickAwayListener>
  );
};
