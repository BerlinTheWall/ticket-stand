import { Box, CircularProgress, Typography } from "@mui/material";

const LoadingSpinner = () => {
  return (
    <Box textAlign="center">
      <CircularProgress />
      <Typography>Loading ...</Typography>
    </Box>
  );
};

export default LoadingSpinner;
