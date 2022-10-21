import { Button, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import { KeyboardDatePicker, DatePicker } from "@material-ui/pickers";
import { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MaleIcon from "@mui/icons-material/Male";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Box } from "@mui/system";
import NativeSelect from "@mui/material/NativeSelect";

function home() {
  const [selectedDate, handleDateChange] = useState(new Date());

  const [gender, setGender] = useState("");

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  

  return (
    <>
      <Grid
        container
        sx={{
          backgroundImage: 'url("/dw-bg.png")',
          height: 250,
          paddingTop: 5,
        }}
      >
        <Grid items md={6} xl={12} sx={{}}>
          <Typography
            variant="h3"
            gutterBottom="0.2px"
            sx={{ color: "white", textAlign: "center" }}
          >
            Saddle Up with Technology
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ color: "gold", textAlign: "center", fontSize: 15 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            voluptatibus.
          </Typography>
        </Grid>
      </Grid>
      <Grid container marginTop="15px">
        <Card
          sx={{
            border: 1,
            borderColor: "#DDDDDD",
            borderRadius: 5,
            boxShadow: "none",
          }}
        >
          <CardContent>
            <form>
              <Grid container columnSpacing={2} rowSpacing={2}>
                <Grid xs={4} md={4} item>
                  <TextField
                    placeholder="Enter your name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={4} md={4}>
                  <TextField
                    type="number"
                    placeholder="No of Horses"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={4} md={4}>
                  <KeyboardDatePicker
                    autoOk
                    variant="inline"
                    inputVariant="outlined"
                    format="dd/MM/yyyy"
                    value={selectedDate}
                    label="Date of birth"
                    InputAdornmentProps={{ position: "start" }}
                    onChange={(date) => handleDateChange(date)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={3} md={2}>
                  <DatePicker
                    placeholder="2018/10/10"
                    value={selectedDate}
                    onChange={(date) => handleDateChange(date)}
                    format="yyyy/MM/dd"
                    variant="inline"
                    inputVariant="outlined"
                    InputProps={{
                      endAdornment: <ArrowBackIcon />,
                    }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={3} md={2}>
                  <DatePicker
                    placeholder="2018/10/10"
                    value={selectedDate}
                    onChange={(date) => handleDateChange(date)}
                    format="yyyy/MM/dd"
                    variant="inline"
                    inputVariant="outlined"
                    InputProps={{
                      endAdornment: <ArrowForwardIcon />,
                    }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={3} md={4}>
                  <TextField id="select" label="Age" value="20" select>
                    <MenuItem value="10">Ten</MenuItem>
                    <MenuItem value="20">Twenty</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={3} md={4}>
                  <TextField
                    placeholder="Enter your name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={6} md={6} sx={{ marginTop: 5 }}>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Free Cancellation"
                    />
                  </FormGroup>
                </Grid>
                
              
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}

export default home;
