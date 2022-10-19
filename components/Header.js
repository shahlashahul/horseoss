import React from "react";
import Link from "@mui/material/Link";
import { Grid, Typography } from "@mui/material";
function Header({ title }) {

    return (
      <>
        <Grid
          container
          sx={{ backgroundImage: 'url("/dw-bg.png")', height: 150, paddingTop:5 }}
        >
          <Grid md={6} xl={12}>
            <Typography
              variant="h5"
              sx={{ color: "white", marginLeft: 7, paddingTop: 2 }}
            >
              {title}
            </Typography>

            <Link href="#" underline="none">
              <Typography
                variant="h6"
                sx={{
                  display: "inline-block",
                  paddingRight: "10px",
                  color: "white",
                  marginLeft: 7.5,
                  fontSize: 14,
                }}
              >
                Home
              </Typography>
            </Link>
            <Typography
              variant="h6"
              sx={{
                display: "inline-block",
                paddingRight: "10px",
                color: "white",
                fontSize: 14,
              }}
            >
              |
            </Typography>

            <Link href="/TermsAndConditions" underline="none">
              <Typography
                variant="h6"
                sx={{
                  display: "inline-block",
                  paddingRight: "10px",
                  color: "gold",
                  fontSize: 14,
                }}
              >
                {title}
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </>
    );
  };

export default Header;
