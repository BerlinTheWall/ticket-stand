import {
  Box,
  Button,
  ClickAwayListener,
  Divider,
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
import { Movie } from "@/types/movie";
import Image from "next/image";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import Link from "next/link";
import { SINGLE_MOVIE_PAGE } from "@/constants/urls";
import { useRouter } from "next/router";

export const NavbarSearch = () => {
  const router = useRouter();
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  const handleChange = useDebounce(
    async (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setSearchValue(e.target.value);
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
              sx={{
                width: "fit-content",
                transition: "all 0.5s",
                position: "fixed",
                top: 90,
                whiteSpace: "nowrap",
                height: 300,
                overflowX: "hidden",
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
              {searchResults.slice(0, 3).map((searchResult, index: number) => {
                return (
                  <Grid key={searchResult.id} item sm={4} xs={12} p={1.5}>
                    <Link href={`${SINGLE_MOVIE_PAGE}/${searchResult.id}`}>
                      <Stack
                        maxWidth={{ sm: 100, xs: "100%" }}
                        alignItems="center"
                      >
                        <Box
                          position="relative"
                          width={"100%"}
                          maxWidth={200}
                          height={150}
                          borderRadius={2}
                          overflow="hidden"
                          boxShadow={2}
                        >
                          <Image
                            src={
                              "https://www.themoviedb.org/t/p/w500/" +
                              searchResult.poster_path
                            }
                            alt={searchResult.original_title}
                            fill
                          />
                        </Box>
                        <Stack
                          direction="row"
                          spacing={1}
                          alignItems="center"
                          divider={<Divider orientation="vertical" flexItem />}
                          mt={1}
                        >
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
                          <Typography
                            overflow="hidden"
                            textOverflow="ellipsis"
                            fontWeight="bold"
                            variant="body2"
                          >
                            {searchResult.original_title ?? "..."}
                          </Typography>
                        </Stack>
                      </Stack>
                    </Link>
                  </Grid>
                );
              })}

              <Grid item xs={12} px={2}>
                <Button
                  onClick={() => {
                    router.push(`/movies?q=${searchValue}`);
                  }}
                  variant="outlined"
                  fullWidth
                >
                  Load More
                </Button>
              </Grid>
            </Grid>
          </Fade>
        )}
      </Box>
    </ClickAwayListener>
  );
};
