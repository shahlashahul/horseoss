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
      justifyContent='center'
      sx={{
        backgroundImage: 'url("/dw-bg.png")',
       
        backgroundSize: "cover",
        backgroundRepeat:'no-repeat',
        paddingTop:20,paddingBottom:20,
         height: '100%' 
      }}
    >
      <Grid item sm={12} justifyContent="center">
        
      <Paper
        elevation={0}
        sx={{
          padding: 10,
          height: "40vh",
          width: 400,
          margin: "20px auto",
          justify: "space-around",
          borderRadius: 5,
          
        }}
      >
        <Typography variant="h4" textAlign="center" gutterBottom="2px">
          Login
        </Typography>
        <form>
          <Grid container spacing={4} justify="space=around">
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
               
                variant="contained"
                fullWidth
                sx={{ borderRadius: 2, backgroundColor:"#284831" }}
              >
                Sign in
              </Button>
            </Grid>
            <Grid item xs={12} sm={12} sx={{ marginTop: "10px" }}>
              <Typography textAlign="center">
                <Link href="#" color="#284831" sx={{ textDecoration: "none" ,fontWeight:700}}>
                  Forgot password ?{" "}
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography textAlign="center" sx={{ color: "black" }}>
                Don't have an account ?
                <Link href="#" color="#284831" sx={{ textDecoration: "none" ,fontWeight:700}}>
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
