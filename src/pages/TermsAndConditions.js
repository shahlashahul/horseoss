import dynamic from "next/dynamic";
import Link from "@mui/material/Link";
import { Grid, Typography } from "@mui/material";

const TermsAndConditions = () => {
  const TermsComponent = dynamic(() => import("../../components/terms"),{
    loading: () => <div>Loading...</div>,
    
  })

  return (
    <div>
      <Grid
        container
        sx={{ backgroundImage: 'url("/dw-bg.png")', height: 120 }}
      >
        <Grid md={6} xl={12}>
          <Typography
            variant="h5"
            sx={{ color: "white", marginLeft: 7, paddingTop: 2 }}
          >
            Terms and Conditions
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
              Terms and Conditions
            </Typography>
          </Link>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={6} xl={12} sx={{ marginLeft: 7 }}>
          <Typography variant="h3" sx={{ fontSize: "25px", marginTop: 5 }}>
            Terms of Agreement
          </Typography>
          <TermsComponent />
          <Typography variant="h3" sx={{ fontSize: "25px", marginTop: 5 }}>
            Modification of Terms
          </Typography>
          <TermsComponent />
          <TermsComponent />
          <Typography variant="h3" sx={{ fontSize: "25px", marginTop: 5 }}>
            Copyright And Trademarks
          </Typography>
          <TermsComponent />
          <Typography variant="h3" sx={{ fontSize: "25px", marginTop: 5 }}>
            Condition of Carriage
          </Typography>
          <TermsComponent />
        </Grid>
      </Grid>
    </div>
  );
};

export default TermsAndConditions;
