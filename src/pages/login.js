import {
  Box,
  Button,
  Link,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import React from "react";

function login() {
  return (
    <div>
      <Grid
        container
        spacing={0}
        justifyContent="center"
        sx={{
          backgroundImage: 'url("/dw-bg.png")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
          height: "100vh",
          width: "100%",
        }}
      >
        <Grid
          item
          xs={4}
          sm={4}
          md={3}
          lg={3}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100vh",
          }}
        >
          <Paper
            elevation={0}
            sx={{
              justify: "space-around",
              borderRadius: 5,
              padding: 6,
            }}
          >
            <Typography
              variant="h4"
              textAlign="center"
              sx={{ color: "#284831", marginBottom: 3, fontWeight: 800 }}
            >
              Login
            </Typography>
            <form>
              <Grid container spacing={3} justify="space=around">
                <Grid item xs={12} sm={12}>
                  <TextField placeholder="Enter username" fullWidth required />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    placeholder="Enter password"
                    type="password"
                    fullWidth
                    required
                  />
                </Grid>

                <Grid item xs={12} sm={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      borderRadius: 3,
                      backgroundColor: "#284831",
                      py: 2,
                      "&:hover": {
                        backgroundColor: "#284831",
                        color: "#fff",
                      },
                    }}
                  >
                    Sign in
                  </Button>
                </Grid>
              </Grid>
              <Grid
                container
                spacing={2}
                justify="space=around"
                sx={{ marginTop: 2 }}
              >
                <Grid item xs={12} sm={12}>
                  <Typography textAlign="center">
                    <Link
                      href="#"
                      color="#284831"
                      sx={{ textDecoration: "none", fontWeight: 700 }}
                    >
                      Forgot password ?{" "}
                    </Link>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Typography textAlign="center" sx={{ color: "black" }}>
                    Don't have an account ?
                    <Link
                      href="#"
                      color="#284831"
                      sx={{
                        textDecoration: "none",
                        fontWeight: 700,
                        paddingLeft: 1,
                      }}
                    >
                      Create an Account
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
export default login;
