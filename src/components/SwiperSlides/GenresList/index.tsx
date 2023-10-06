import { Box, Typography } from "@mui/material";

type Props = {
  genres: string[];
};

const GenresList: React.FC<Props> = ({ genres }) => {
  return (
    <Box
      style={{
        listStyleType: "disc",
        display: "flex",
        gap: 20,
        opacity: 0.7,
      }}
      component="ul"
    >
      {genres.map((genre: string, index: number) => {
        return (
          <Box key={genre}>
            <Typography
              component="li"
              style={{
                fontSize: "0.8rem",
                listStyleType: index === 0 ? "none" : "",
              }}
            >
              {genre}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default GenresList;
