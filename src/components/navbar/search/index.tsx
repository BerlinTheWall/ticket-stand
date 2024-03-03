import {
  Box,
  Button,
  ClickAwayListener,
  Collapse,
  Fade,
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
import { W500_IMAGE_URL } from "@/constants/image-urls";

const MOVIE_PER_ROW = 3;
export const NavbarSearch = () => {
  const [searchResults, setSearchResults] = useState<Media[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [showMore, setShowMore] = useState<boolean>(false);

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
    setShowMore((prev) => !prev);
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
            <Stack
              direction="row"
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
                p: 2,
                flexWrap: "wrap",
                rowGap: 2,
                columnGap: 1,
                justifyContent: "space-between",
              }}
            >
              {/* show less */}
              <MovieSearch list={searchResults.slice(0, MOVIE_PER_ROW)} />

              {/* show more */}
              <Collapse in={!showMore} sx={{ width: "100%" }}>
                <Stack
                  direction="row"
                  sx={{
                    flexWrap: "wrap",
                    rowGap: 2,
                    columnGap: 1,
                    justifyContent: "space-between",
                  }}
                >
                  <MovieSearch
                    list={searchResults.slice(MOVIE_PER_ROW, 2 * MOVIE_PER_ROW)}
                  />
                </Stack>
              </Collapse>

              <Box flex={1}>
                {searchResults.length > MOVIE_PER_ROW && (
                  <Button onClick={handleLoadMore} variant="outlined" fullWidth>
                    {showMore ? "Show More" : "Show Less"}
                  </Button>
                )}
              </Box>
            </Stack>
          </Fade>
        )}
      </Box>
    </ClickAwayListener>
  );
};

interface MovieSearchProps {
  list: Media[];
}
const MovieSearch: React.FC<MovieSearchProps> = ({ list }) => {
  return list.map((item) => {
    return (
      <Box
        component={Link}
        href={`${
          item.media_type === "movie" ? SINGLE_MOVIE_PAGE : SINGLE_TVSERIES_PAGE
        }/${item.id}`}
        width={{ md: 125, xs: 200 }}
      >
        <Stack>
          <Box
            position="relative"
            height={180}
            borderRadius={2}
            overflow="hidden"
            boxShadow={2}
          >
            <Image
              src={W500_IMAGE_URL + item.poster_path}
              alt={item.title ? item.title : item.name ? item.name : "unknown"}
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
              {item.title ?? item.name}
            </Typography>
            <Stack fontSize={14} alignItems="center" direction={"row"}>
              <StarRateRoundedIcon
                sx={{
                  color: "warning.light",
                  fontSize: "inherit",
                }}
              />
              <Typography fontWeight="400" fontSize="inherit">
                {item?.vote_average?.toFixed(1)}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    );
  });
};
