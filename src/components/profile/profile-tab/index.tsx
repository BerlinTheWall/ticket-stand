import React, { useState } from "react";
import { Tab, Box } from "@mui/material";
import WatchList from "../watchlist";
import Favorites from "../favorites";
import Lists from "../lists";
import { TabContext, TabList, TabPanel } from "@mui/lab";

const TAB_VALUES = {
  LIST: "list",
  FAVORITES: "Favorites",
  WATCHLIST: "Watchlist",
};

const TAB_ITEMS = [
  {
    title: TAB_VALUES.LIST,
    hasSubMenu: false,
  },
  {
    title: TAB_VALUES.FAVORITES,
    hasSubMenu: true,
  },
  {
    title: TAB_VALUES.WATCHLIST,
    hasSubMenu: true,
  },
];

const TabComponent = () => {
  const [selectedTab, setSelectedTab] = useState(TAB_VALUES.LIST);

  const handleChange = (e: React.SyntheticEvent, val: string) => {
    setSelectedTab(val);
  };

  return (
    <Box>
      <TabContext value={selectedTab}>
        <Box sx={{ borderBottom: 2, borderColor: "primary.dark" }}>
          <TabList onChange={handleChange}>
            {TAB_ITEMS.map((item) => {
              return (
                <Tab key={item.title} label={item.title} value={item.title} />
              );
            })}
          </TabList>
        </Box>

        <TabPanel value={TAB_VALUES.LIST}>
          <Lists />
        </TabPanel>
        <TabPanel value={TAB_VALUES.FAVORITES}>
          <Favorites />
        </TabPanel>
        <TabPanel value={TAB_VALUES.WATCHLIST}>
          <WatchList />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default TabComponent;
