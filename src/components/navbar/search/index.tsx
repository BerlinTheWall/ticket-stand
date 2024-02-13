import {
  Box,
  Button,
  ClickAwayListener,
  Fade,
  Grid,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { ChangeEvent, useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { getSearchMovie } from "@/api/movies";
import Image from "next/image";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import Link from "next/link";
import { SINGLE_MOVIE_PAGE, SINGLE_TVSERIES_PAGE } from "@/constants/urls";
import { Media } from "@/types/media";

export const NavbarSearch = () => {
  const [searchResults, setSearchResults] = useState<Media[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  // const [searchValue, setSearchValue] = useState<string>("");
  const [displayResults, setDisplayResults] = useState<number>(3);
  const [showLess, setShowLess] = useState<boolean>(false);

  const handleChange = useDebounce(
    async (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      // setSearchValue(e.target.value);
      try {
        const movies = await getSearchMovie(e.target.value);
        setSearchResults(movies.results);
      } catch (error) {
        console.log(error);
      }
    },
    1000
  );

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleLoadMore = () => {
    if (showLess) {
      setShowLess(false);
      setDisplayResults(displayResults - 3);
    } else {
      setDisplayResults(displayResults + 3);
      setShowLess(true);
    }
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
            width: open ? { lg: 300, md: 200, sm: 200, xs: 120 } : 40,
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
                  p: 1.35,
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
            <Grid
              container
              maxWidth={{ sm: 450, xs: "100%" }}
              sx={{
                width: "fit-content",
                transition: "all 0.5s",
                position: "fixed",
                top: 90,
                whiteSpace: "nowrap",
                overflowX: "hidden",
                height: 330,
                bgcolor: "background.default",
                opacity: open ? 1 : 0,
                color: "text.primary",
                right: { sm: 30, xs: 10 },
                left: { sm: "auto", xs: 10 },
                filter: (theme) =>
                  `drop-shadow(0px 2px 8px ${theme.palette.primary.main})`,
                borderRadius: 2,
                pb: 2,
              }}
            >
              {searchResults
                .slice(0, displayResults)
                .map((searchResult, index: number) => {
                  return (
                    <Grid key={searchResult.id} item sm={4} xs={12} p={1.5}>
                      <Link
                        href={`${
                          searchResult.media_type === "movie"
                            ? SINGLE_MOVIE_PAGE
                            : SINGLE_TVSERIES_PAGE
                        }/${searchResult.id}`}
                      >
                        <Stack>
                          <Box
                            position="relative"
                            width={"100%"}
                            maxWidth={200}
                            height={180}
                            borderRadius={2}
                            overflow="hidden"
                            boxShadow={2}
                          >
                            <Image
                              src={
                                "https://www.themoviedb.org/t/p/w500/" +
                                searchResult.poster_path
                              }
                              alt={
                                searchResult.original_title
                                  ? searchResult.original_title
                                  : searchResult.original_name
                                  ? searchResult.original_name
                                  : "unknown"
                              }
                              fill
                            />
                          </Box>
                          <Stack direction="column" mt={0.8}>
                            <Typography
                              textOverflow="ellipsis"
                              overflow="hidden"
                              fontWeight="bold"
                              variant="body2"
                            >
                              {searchResult.original_title ??
                                searchResult.original_name}
                            </Typography>
                            <Stack
                              fontSize={14}
                              alignItems="center"
                              direction={"row"}
                            >
                              <StarRateRoundedIcon
                                sx={{
                                  color: "warning.light",
                                  fontSize: "inherit",
                                }}
                              />
                              <Typography fontWeight="400" fontSize="inherit">
                                {searchResult?.vote_average?.toFixed(1)}
                              </Typography>
                            </Stack>
                          </Stack>
                        </Stack>
                      </Link>
                    </Grid>
                  );
                })}

              <Grid item xs={12} px={2}>
                {searchResults.length > 3 && (
                  <Button onClick={handleLoadMore} variant="outlined" fullWidth>
                    {showLess ? "Show Less" : "Show More"}
                  </Button>
                )}
              </Grid>
            </Grid>
          </Fade>
        )}
      </Box>
    </ClickAwayListener>
  );
};
