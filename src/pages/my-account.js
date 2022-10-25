import {
  Card,
  CardMedia,
  CardContent,
  Grid,
  Avatar,
  Typography,
  Link,
  StepIcon,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import Badge from "@mui/material/Badge";
import React from "react";
import PageBanner from "../../components/Header";
import Slider from "@mui/material/Slider";
import { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { styled } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import AddIcon from "@mui/icons-material/Add";

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 40,
  height: 40,
  right: -18,
  bottom: -100,
  backgroundColor: "#ecd693",

  border: `4px solid ${theme.palette.background.paper}`,
}));



function account() {
  const steps = [
    "Verified Email-ID",
    "Add your Mobile Number",
    "Complete Basic information",
  ];
  const [value, setValue] = useState(0);
  const handleChange = (event) => {
    setValue(event.target.value);
  };

 
  return (
    <div>
      <PageBanner title={"My Account"} />

      <Grid container spacing={6} sx={{ marginLeft:15, marginTop:5 }}>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Card
            sx={{
              border: 2,
              borderRadius: 2,
              borderColor: "#dddddd",
              boxShadow: "none",
              padding:3
            }}
          >
            <CardContent>
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  md={12}
                  sm={12}
                  textAlign="center"
                  justifyContent="center"
                  alignContent="center"
                >
                  <Badge
                    overlap="circular"
                    badgeContent={
                      <SmallAvatar>
                        <EditIcon size="small" />
                      </SmallAvatar>
                    }
                  >
                    <Avatar
                      sx={{
                        borderRadius: 3,
                        height: "20vh",
                        width: "20vh",
                        backgroundColor: "#284831",
                      }}
                    >
                      FM
                    </Avatar>
                  </Badge>
                  <Grid item xs={12} sm={12}>
                    <Typography> name</Typography>
                    <Typography>personal profile</Typography>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={12} sm={12}>
                  <Link
                    href="#"
                    color="#284831"
                    sx={{
                      textDecoration: "none",
                      fontWeight: 700,
                      
                    }}
                  >
                    profile
                  </Link>
                </Grid>
                <Grid item xs={12} md={12} sm={12}>
                  <Link
                    href="#"
                    color="#284831"
                    sx={{
                      textDecoration: "none",
                      fontWeight: 700,
                      
                    }}
                  >
                    Login Details
                  </Link>
                </Grid>
                <Grid item xs={12} md={12} sm={12}>
                  <Link
                    href="#"
                    color="#284831"
                    sx={{
                      textDecoration: "none",
                      fontWeight: 700,
                      
                    }}
                  >
                    Horses
                  </Link>
                </Grid>
                <Grid item xs={12} md={12} sm={12}>
                  <Link
                    href="#"
                    color="#284831"
                    sx={{
                      textDecoration: "none",
                      fontWeight: 700,
                      
                    }}
                  >
                    Logout
                  </Link>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <Grid container  width="55vw" spacing={4}>
            <Grid item xs={12} md={12} sm={12} width="95%">
              <Box
                sx={{
                  border: 2,
                  borderRadius: 2,
                  borderColor: "#dddddd",
                  boxShadow: "none",
                  padding: 6,
                  
                }}
              >
                
                    <Typography
                      sx={{ display: "inline-block", paddingRight:10 }}
                    >
                      Complete your Profile
                    </Typography>
                    <Typography sx={{ display: "inline-block" }}>
                      {value}%
                    </Typography>
                    <Box width="40%" >
                      
                      <Slider
                        defaultValue={value}
                        onChange={handleChange}
                        sx={{
                          "& .MuiSlider-thumb": {
                            display: "none",
                          },
                          "& .MuiSlider-rail": {
                            color: "#eac276",
                          },
                          "& .MuiSlider-track": {
                            display: "none",
                          },
                          height: 10,
                          
                        }}
                      />
                     
                    </Box>
                    <Typography>
                      get the best out of Horse OSS by completing the remaining
                      details!
                    </Typography>
                   
                    <Box
                      sx={{
                        backgroundColor: "#e6ffff",
                        borderRadius: 3,
                        width:'100%',
                        height:'10vh',
                       marginTop:4,
                       padding:'25px'
                      }}
                    >
                      
                      <Stepper activeStep={1} connector="" >
                        {steps.map((label) => (
                          <Step key={label}>
                           
                            <StepLabel >{label}</StepLabel>
                          </Step>
                        ))}
                      </Stepper>
                     
                    </Box>
                
              </Box>
            </Grid>

            <Grid item xs={6} md={12} sm={12} width="95%">
              <Box
                sx={{
                  border: 2,
                  borderRadius: 2,
                  borderColor: "#dddddd",
                  boxShadow: "none",
                  padding: 6,
                  
                }}
              >
                <Typography
                  variant={"h4"}
                  sx={{ display: "inline-block", paddingRight: 75 }}
                >
                  Profile
                </Typography>
              
                  <Button variant="contained"  sx={{ display: "inline-block",py:1, borderRadius:5 }} startIcon={<AddIcon size="small" />}> Edit</Button>
                
                <Typography>
                  get the best out of Horse OSS by completing the remaining
                  details!
                </Typography>
                <List component="nav" aria-label="mailbox folders">
                  <ListItem>
                    <ListItemText primary="Name" />
                    <Button startIcon={<AddIcon size="small" />}>add</Button>
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemText primary="Email" />
                    <Button startIcon={<AddIcon size="small" />}>add</Button>
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemText primary="Country" />
                    <Button startIcon={<AddIcon size="small" />}>add</Button>
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemText primary="Phone number" />
                    <Button  startIcon={<AddIcon size="small" />}>add</Button>
                  </ListItem>
                </List>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default account;
