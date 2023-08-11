import { AppContext } from "@/context/AppContext";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { useContext } from "react";

const DisplayTest = () => {
  const { toggleTheme, mode } = useContext(AppContext);
  return (
    <Box>
      <Button
        onClick={toggleTheme}
        variant="contained"
        fullWidth
        color="primary"
      >
        toggle Theme, {mode}
      </Button>
      <Box p={5}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card sx={{ p: 3 }}>
              <Typography textAlign="center" variant="h1">
                HomePage
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader
                title={<Typography>Read me</Typography>}
                subheader={<Divider />}
              />
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Typography
                      component={"p"}
                      color="error.main"
                      fontWeight={600}
                    >
                      Decide first that you want to use 1-SX props or
                      2-attribute props. Just use MUI components(tags), not html
                      tags . use (Stack direction={"row"}) instead of display
                      flex, use (Stack ) instead of display grid, read Stack Doc
                      on mui website.
                    </Typography>

                    <Stack direction={"row"} spacing={2} mt={2}>
                      <Box
                        sx={{
                          width: 200,
                          height: 120,
                          borderRadius: 1,
                          bgcolor: "primary.main",
                        }}
                        
                      >
                        1-SX props sample
                      </Box>

                      <Box
                        width={200}
                        height={120}
                        borderRadius={1}
                        bgcolor="secondary.main"
                      >
                        2-attribute props
                      </Box>
                    </Stack>

                    <Typography component={"p"} fontWeight={600} mt={3}>
                      main tags for coding in MUI:
                    </Typography>
                    <List dense={true}>
                      {["Grid", "Stack", "Box", "Card", "Paper"].map(
                        (item, i) => {
                          return (
                            <ListItem key={item}>
                              <ListItemText primary={`${i + 1}- ${item}`} />
                            </ListItem>
                          );
                        }
                      )}
                      <ListItem>
                        <ListItemText primary="and ....." />
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader
                title={<Typography>Buttons contained</Typography>}
                subheader={<Divider />}
              />

              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={3}>
                    <Button
                      onClick={toggleTheme}
                      variant="contained"
                      fullWidth
                      color="primary"
                    >
                      primary btn
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Button variant="contained" fullWidth color="secondary">
                      secondary btn
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Button variant="contained" fullWidth color="error">
                      secondary btn
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Button variant="contained" fullWidth color="success">
                      success btn
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Button variant="contained" fullWidth color="warning">
                      warning btn
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Button variant="contained" fullWidth color="info">
                      info btn
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Button variant="contained" fullWidth color="inherit">
                      inherit btn
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Button
                      variant="contained"
                      fullWidth
                      color="primary"
                      disabled
                    >
                      disabled btn
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader
                title={<Typography>Buttons outlined</Typography>}
                subheader={<Divider />}
              />

              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={3}>
                    <Button
                      onClick={toggleTheme}
                      variant="outlined"
                      fullWidth
                      color="primary"
                    >
                      primary btn
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Button variant="outlined" fullWidth color="secondary">
                      secondary btn
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Button variant="outlined" fullWidth color="error">
                      secondary btn
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Button variant="outlined" fullWidth color="success">
                      success btn
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Button variant="outlined" fullWidth color="warning">
                      warning btn
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Button variant="outlined" fullWidth color="info">
                      info btn
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Button variant="outlined" fullWidth color="inherit">
                      inherit btn
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Button
                      onClick={toggleTheme}
                      variant="outlined"
                      fullWidth
                      color="primary"
                      disabled
                    >
                      disabled btn
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader
                title={<Typography>Buttons text</Typography>}
                subheader={<Divider />}
              />

              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={3}>
                    <Button
                      onClick={toggleTheme}
                      variant="text"
                      fullWidth
                      color="primary"
                    >
                      primary btn
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Button variant="text" fullWidth color="secondary">
                      secondary btn
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Button variant="text" fullWidth color="error">
                      secondary btn
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Button variant="text" fullWidth color="success">
                      success btn
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Button variant="text" fullWidth color="warning">
                      warning btn
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Button variant="text" fullWidth color="info">
                      info btn
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Button variant="text" fullWidth color="inherit">
                      inherit btn
                    </Button>
                  </Grid>{" "}
                  <Grid item xs={12} md={3}>
                    <Button variant="text" fullWidth color="primary" disabled>
                      disabled btn
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader
                title={<Typography>Typography</Typography>}
                subheader={<Divider />}
              />

              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Typography variant="h1">h1</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h2">h2</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h3">h3</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h4">h4</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h5">h5</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h6">h6</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1">body1</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2">body2</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="button">button</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="caption">caption</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="inherit">inherit</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="overline">overline</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1">subtitle1</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle2">subtitle2</Typography>
                  </Grid>
                  <Grid item xs={12} display="flex" gap={3}>
                    <Typography
                      variant="subtitle2"
                      component={"p"}
                      color={"primary.main"}
                    >
                      primary.main
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      component={"p"}
                      color={"primary.light"}
                    >
                      primary.light
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      component={"p"}
                      color={"primary.dark"}
                    >
                      primary.dark
                    </Typography>
                  </Grid>
                  <Grid item xs={12} display="flex" gap={3}>
                    <Typography
                      variant="subtitle2"
                      component={"p"}
                      color={"secondary.main"}
                    >
                      secondary.main
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      component={"p"}
                      color={"secondary.light"}
                    >
                      secondary.light
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      component={"p"}
                      color={"secondary.dark"}
                    >
                      secondary.dark
                    </Typography>
                  </Grid>
                  <Grid item xs={12} display="flex" gap={3} flexWrap={"wrap"}>
                    <Typography
                      variant="subtitle2"
                      color={"primary.main"}
                      fontWeight={900}
                    >
                      fontWeight={900}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color={"primary.main"}
                      fontWeight={800}
                    >
                      fontWeight={800}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color={"primary.main"}
                      fontWeight={700}
                    >
                      fontWeight={700}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color={"primary.main"}
                      fontWeight={600}
                    >
                      fontWeight={600}
                    </Typography>{" "}
                    <Typography
                      variant="subtitle2"
                      color={"primary.main"}
                      fontWeight={500}
                    >
                      fontWeight={500}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color={"primary.main"}
                      fontWeight={400}
                    >
                      fontWeight={400}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color={"primary.main"}
                      fontWeight={300}
                    >
                      fontWeight={300}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color={"primary.main"}
                      fontWeight={200}
                    >
                      fontWeight={200}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color={"primary.main"}
                      fontWeight={100}
                    >
                      fontWeight={100}
                    </Typography>{" "}
                    <Typography
                      variant="subtitle2"
                      color={"primary.main"}
                      fontWeight={"bold"}
                    >
                      fontWeight={"bold"}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader
                title={<Typography>Colors</Typography>}
                subheader={<Divider />}
              />
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={1}>
                    <Box
                      width={80}
                      height={80}
                      borderRadius={1}
                      bgcolor="primary.main"
                    >
                      primary
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={1}>
                    <Box
                      width={80}
                      height={80}
                      borderRadius={1}
                      bgcolor="secondary.main"
                    >
                      secondary
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={1}>
                    <Box
                      width={80}
                      height={80}
                      borderRadius={1}
                      bgcolor="error.main"
                    >
                      error
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={1}>
                    <Box
                      width={80}
                      height={80}
                      borderRadius={1}
                      bgcolor="success.main"
                    >
                      success
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={1}>
                    <Box
                      width={80}
                      height={80}
                      borderRadius={1}
                      sx={{
                        // bgcolor: (theme) => theme.palette.info.main,
                        bgcolor: "info.main"
                      }}
                    >
                      info
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={1}>
                    <Box
                      width={80}
                      height={80}
                      borderRadius={1}
                      sx={{
                        bgcolor: (theme) => theme.palette.warning.main,
                      }}
                    >
                      warning
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={1}>
                    <Box
                      width={80}
                      height={80}
                      borderRadius={1}
                      sx={{
                        bgcolor: (theme) => theme.palette.grey[500],
                      }}
                    >
                      grey[500]
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader
                title={<Typography>Hover Sample code</Typography>}
                subheader={<Divider />}
              />
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={1}>
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: 1,
                        bgcolor: "red",
                        transition: "1s ",
                        cursor: "pointer",
                        ":hover": {
                          bgcolor: "blue",
                        },
                      }}
                    >
                      hover me
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default DisplayTest;
