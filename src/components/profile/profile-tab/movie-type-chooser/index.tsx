import { profileListType } from "@/types/general";
import MenuItem from "@mui/material/MenuItem";

import { FormControl, Select, SelectChangeEvent } from "@mui/material";

type Props = {
  setSelectedOption: (value: profileListType) => void;
  selectedOption: profileListType;
};

const MovieTypeChooser: React.FC<Props> = ({
  selectedOption,
  setSelectedOption,
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    setSelectedOption(event.target.value as any);
  };

  return (
    <FormControl fullWidth>
      <Select value={selectedOption} onChange={handleChange}>
        <MenuItem value="movie">Movie</MenuItem>
        <MenuItem value="tv">Tv Series</MenuItem>
      </Select>
    </FormControl>
  );
};

export default MovieTypeChooser;
