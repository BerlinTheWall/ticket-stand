import React, { useState } from "react";
import {
  Tab,
  Tabs,
  Menu,
  MenuItem,
  Button,
  Box,
  Grid,
  Stack,
  Tooltip,
  useTheme,
  Typography,
} from "@mui/material";
import WatchList from "../watchlist";
import { profileListType } from "@/types/general";
import Favorites from "../favorites";
import MovieTooltip from "./movie-tooltip";
import Lists from "../lists";

const TabComponent = () => {
  const [tabValue, setTabValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] =
    useState<profileListType>("movie");

  const handleTabChange = (event: any, newValue: any) => {
    setTabValue(newValue);
    setAnchorEl(null); // Close the menu when switching tabs
  };

  // const handleMenuClick = (event: any) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleMenuClose = (option: profileListType) => {
  //   setAnchorEl(null);
  //   if (option) {
  //     setSelectedOption(option);
  //   }
  // };
  const [isHover, setIsHover] = useState(false);
  const theme = useTheme();
  return (
    <div>
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        sx={{ borderBottom: `2px solid ${theme.palette.primary.dark}` }}
      >
        <Tab label="Lists" />
        <Tab
          label={<MovieTooltip title="Favorites" setType={setSelectedOption} />}
        />
        <Tab
          label={<MovieTooltip title="Watchlist" setType={setSelectedOption} />}
        />
      </Tabs>
      <Box sx={{ pt: 2 }}>
        {tabValue === 0 && <Lists />}
        {tabValue === 1 && <Favorites option={selectedOption} />}
        {tabValue === 2 && <WatchList option={selectedOption} />}
      </Box>
    </div>
  );
};

export default TabComponent;
