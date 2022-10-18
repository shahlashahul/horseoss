import { Button, Grid, Link, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Badge from "@mui/material/Badge";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";
import React from "react";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";

function Footer() {
  const badgeStyle = {
    "& .MuiBadge-badge": {
      color: "white",
      backgroundColor: "green",
      borderRadius: 0,
      width: 80,
      transform: "translate(86px,-10px)",
    },
  };
  
 
  return (
    <footer style={{ marginTop: 500 }}>
      <Box sx={{ backgroundColor: "black", }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <Box>
                <Link href="# " underline="none">
                  <Image src="/horseosslogo.png" width="100px" height="80px" />
                </Link>
              </Box>
              <Box sx={{ marginTop: "10px" }}>
                <Typography sx={{ color: "white", fontSize: 15 }}>
                  501 Business Village-block B Al Maktoum Road Port Saeed,
                  Deira, Dubai, United Arab Emirates{" "}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box sx={{ color: "white", fontWeight: 700 }}>General</Box>
              <Box sx={{ marginTop: "10px" }}>
                <Link href="/About us " color="white" underline="none">
                  About Horseoss
                </Link>
              </Box>
              <Box sx={{ marginTop: "10px" }}>
                <Link href="/News " color="white" underline="none">
                  News
                </Link>
              </Box>
              <Box sx={{ marginTop: "10px" }}>
                <Link href="/careers " color="white" underline="none">
                  Careers
                  <Badge badgeContent="we're hiring!" sx={badgeStyle}></Badge>
                </Link>
              </Box>
              <Box sx={{ marginTop: "10px" }}>
                <Link href="/FAQs " color="white" underline="none">
                  FAQs
                </Link>
              </Box>
              <Box sx={{ marginTop: "10px" }}>
                <Link href="/Privacy Policy " color="white" underline="none">
                  Privacy Policy
                </Link>
              </Box>
              <Box sx={{ marginTop: "10px" }}>
                <Link href="/Contact us " color="white" underline="none">
                  Contact Us
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box sx={{ color: "white", fontWeight: 700 }}>Follow Us</Box>
              <Box sx={{ marginTop: "10px" }}>
                <Link href="# " color="white" underline="none">
                  Twitter
                </Link>
              </Box>
              <Box sx={{ marginTop: "10px" }}>
                <Link href="#" color="white" underline="none">
                  LinkedIn
                </Link>
              </Box>
              <Box sx={{ marginTop: "10px" }}>
                <Link href="#" color="white" underline="none">
                  Instagram
                </Link>
              </Box>
              <Box sx={{ marginTop: "10px" }}>
                <Link href="#" color="white" underline="none">
                  TikTok
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box sx={{ color: "white", fontWeight: 700 }}>Contact</Box>
              <Box sx={{ marginTop: "10px" }}>
                <Link href="# " color="white" underline="none">
                  <CallIcon sx={{ fontSize: "medium", marginRight: 1 }} />
                  +966 506125268
                </Link>
              </Box>
              <Box sx={{ marginTop: "10px" }}>
                <Link href="#" color="white" underline="none">
                  <MailOutlineIcon
                    sx={{ fontSize: "medium", marginRight: 1 }}
                  />{" "}
                  sales@horseoss.com
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={4} sm={4} sx={{marginTop:10}}>
              <Box>
                <Link href="# " color="white" underline="none">
                  Copyright ⓒ 2022. All Rights Reserves
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} sx={{marginTop:6}}>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField variant="standard" label='your mail'  sx={{input: { color: 'white' ,transform: "translate(12px,-9px)"}, backgroundColor:'#212121', borderTopLeftRadius:( 20, 20),borderBottomLeftRadius:( 20, 20),height:'35px' , transform: "translate(60px,10px)",alignLabel:'center'}} InputProps={{ disableUnderline: true, }} />
                
              </Box>
            
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                
                <Button variant='contained' sx={{backgroundColor:'#f5f5f5',  borderTopRightRadius:( 20, 20),borderBottomRightRadius:( 20, 20), borderTopLeftRadius:( 0, 0),borderBottomLeftRadius:( 0, 0),height:'34px',color:'black',transform: "translate(260px,-40px)" }}>Subscribe</Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;
