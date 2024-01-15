import MainLayout from "@/layout/main-layout";
import { Avatar, Box, Stack, Typography, useTheme } from "@mui/material";
import { NextPage } from "next";
import { useIsLoggedIn } from "@/hooks/useIsLoggedIn";
import { useContext, useState } from "react";
import { AppContext } from "@/context/AppContext";
import Image from "next/image";
import TabComponent from "@/components/profile/profile-tab";

const ProfilePage: NextPage = () => {
  const theme = useTheme();
  const loggedIn = useIsLoggedIn();
  const { user } = useContext(AppContext);
  // console.log(user);
  const [value, setValue] = useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <MainLayout>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
        }}
      >
        <Stack width={"90%"}>
          <Stack direction={"row"} gap={3} mt={5} pb={3}>
            {loggedIn && user?.avatar?.tmdb?.avatar_path ? (
              <Image
                src={
                  "http://www.themoviedb.org/t/p/w150_and_h150_face" +
                  user.avatar.tmdb.avatar_path
                }
                alt={"Profile image"}
                width={100}
                height={100}
                style={{ borderRadius: 50 }}
              />
            ) : (
              <Avatar alt="Profile Icon" sx={{ width: 100, height: 100 }} />
            )}
            <Stack direction={"column"}>
              <Typography
                component={"h1"}
                sx={{
                  fontSize: 36,
                  fontWeight: "bold",
                  color: theme.palette.primary.dark,
                }}
              >
                {user.username}
              </Typography>
              <Typography
                component={"h1"}
                sx={{
                  fontSize: 28,
                  fontWeight: "300",
                }}
              >
                {user.name}
              </Typography>
            </Stack>
          </Stack>
          <TabComponent />

          <Box sx={{ width: "100%" }}>
            {/* <Tabs
              value={value}
              onChange={handleChange}
              textColor="primary"
              indicatorColor="primary"
              aria-label="secondary tabs example"
            > */}
            {/* <Tab value="one" label="Watch list" />
              <Tab value="two" label="Favorites" />
              <Tab
                value="three"
                label="Lists"
                children={
                  <Menu
                    elevation={0}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    // {...props}
                  />
                }
              ></Tab> */}
            {/* </Tabs> */}
          </Box>
        </Stack>
      </Box>
    </MainLayout>
  );
};
export default ProfilePage;
