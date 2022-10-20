import React from "react";
import { useState } from "react";
import Header from "../../components/Header";
import { Grid, Link, Select, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Box } from "@mui/system";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";
import MaterialUiPhoneNumber from "material-ui-phone-number";
import { withGoogleMap, withScriptjs, GoogleMap } from "react-google-maps";

class Map extends React.Component {
  render = () => {
    return (
      <GoogleMap
        defaultZoom={16}
        defaultCenter={{ lat: 30.967171, lng: 29.552919 }}
      ></GoogleMap>
    );
  };
}

const MapComponent = withScriptjs(withGoogleMap(Map));
function Contactus() {
  const [language, setLanguage] = useState("");

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  const [value, setValue] = React.useState("");

  return (
    <>
      <Header title={"Contact Us"} />
      <Grid container>
        <Card
          sx={{
            width: "1300px",
            paddingTop: 1,
            border: 1,
            borderColor: "#DDDDDD",
            borderRadius: 5,
            marginLeft: 7,
            marginTop: 3,
            boxShadow: "none",
          }}
        >
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box>
                  <Typography variant="h4" gutterBottom>
                    We're Here For You
                  </Typography>
                  <Typography>
                    Log in to get help with your reservation, accounts and more.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box sx={{ paddingLeft: 30 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{
                      backgroundColor: "rgb(17, 51, 43)",
                      height: "60px",
                      width: "350px",
                      borderRadius: 5,
                      "&:hover": {
                        backgroundColor: "rgb(17, 51, 43)",
                        color: "#fff",
                      },
                    }}
                  >
                    Login or SignUp
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Typography
        gutterBottom
        variant="h4"
        sx={{ marginLeft: 7, marginTop: 8 }}
      >
        Get in touch by completing the below Form:
      </Typography>
      <Grid container>
        <Card
          sx={{
            maxWidth: 900,
            paddingTop: 1,
            border: 1,
            borderColor: "#DDDDDD",
            borderRadius: 5,
            marginLeft: 7,
            marginTop: 3,
            padding: 2,
            boxShadow: "none",
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5">
              Contact Details
            </Typography>

            <form>
              <Grid container justify="space-around" spacing={4} sx={{}}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Enter your name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    type="email"
                    placeholder="Enter email"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Select
                    value={language}
                    onChange={handleChange}
                    displayEmpty
                    fullWidth
                    required
                    renderValue={
                      language !== "" ? undefined : () => "choose your language"
                    }
                  >
                    <MenuItem value={"English"}>English</MenuItem>
                    <MenuItem value={"Arabic"}>Arabic</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box display="flex" flexDirection="column">
                    <MaterialUiPhoneNumber
                      countryCodeEditable={false}
                      defaultCountry="ae"
                      onlyCountries={["ae", "sa"]}
                      autoFormat={false}
                      variant="outlined"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-password-input"
                    type="password"
                    placeholder="password"
                    autoComplete="current-password"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-password-input"
                    type={passwordType}
                    onChange={handlePasswordChange}
                    value={passwordInput}
                    placeholder="password"
                    InputProps={{
                      endAdornment: (
                        <Button
                          sx={{ color: "black" }}
                          onClick={togglePassword}
                        >
                          {passwordType === "password" ? (
                            <VisibilityOffIcon />
                          ) : (
                            <VisibilityIcon />
                          )}
                        </Button>
                      ),
                    }}
                    fullWidth
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <Typography gutterBottom="2px" variant="h5">
                    What can we help you with ?
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    placeholder="Subject"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    multiline
                    rows={4}
                    placeholder="Description"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={3}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{
                      backgroundColor: "rgb(17, 51, 43)",
                      borderRadius: 3,
                      "&:hover": {
                        backgroundColor: "rgb(17, 51, 43)",
                        color: "#fff",
                      },
                    }}
                    fullWidth
                  >
                    Submit Request
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
        <Card
          sx={{
            paddingTop: 1,
            border: 1,
            borderColor: "#DDDDDD",
            borderRadius: 5,
            marginTop: 3,
            marginLeft: 7,
            height: 300,
            width: 300,
            boxShadow: "none",
            padding: 2,
          }}
        >
          <CardContent>
            <Box>
              <Typography variant="h5" gutterBottom>
                Contact Us
              </Typography>
            </Box>
            <Box sx={{ marginTop: "10px" }}>
              <Button color="inherit">
                <CallIcon sx={{ fontSize: "large", marginRight: 1 }} />
                +966 506125268
              </Button>
            </Box>

            <Box>
              <Link
                href="#"
                color="inherit"
                underline="none"
                sx={{ marginLeft: 1 }}
              >
                <MailOutlineIcon sx={{ fontSize: "large", marginRight: 1 }} />
                sales@horseoss.com
              </Link>
            </Box>
            <Box>
              <Typography variant="h5" gutterBottom sx={{ marginTop: 5 }}>
                Visit Us
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: 14 }}>
                501 Business Village-block B Al Maktoum Road Port Saeed, Deira,
                Dubai, United Arab Emirates{" "}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      <Grid className="google-map-code" sx={{ marginTop: 10 }}>
        <MapComponent
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCvLFfor-m1cMcKv-2OMacNZDkGUOo7l5k"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px`, width: "100%" }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </Grid>
    </>
  );
}

export default Contactus;
