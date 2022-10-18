import Link from "@mui/material/Link";
import { Grid, Typography } from "@mui/material";

const TermsComponent = ({ title, description }) => {
  return (
    <>
      <Typography variant="h3" sx={{ fontSize: "25px", marginTop: 5 }}>
        {title}
      </Typography>
      <Typography sx={{ fontSize: "15px", marginTop: 3 }}>
        {description}
      </Typography>
    </>
  );
};

const TermsAndConditions = () => {
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
          <TermsComponent
            title={"Terms of Agreement"}
            description={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum doloribus beatae itaque sunt, ab rem?Lorem ipsum dolor sit amet consectetur, adipisicing elit. At nesciunt asperiores voluptates dolorem et delectus, unde culpa, corporis illo fugit sequi voluptate neque! Reiciendis repellat tenetur similique hic assumenda dolores delenitialiquam quos obcaecati impedit officiis, amet ipsum optio, sapientequasi aperiam nihil inventore nam aliquid! Ut voluptatem voluptatesaliquid."
            }
          />
          <TermsComponent
            title={"Modification of Terms"}
            description={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum doloribus beatae itaque sunt, ab rem?Lorem ipsum dolor sit amet consectetur, adipisicing elit. At nesciunt asperiores voluptates dolorem et delectus, unde culpa, corporis illo fugit sequi voluptate neque! Reiciendis repellat tenetur similique hic assumenda dolores delenitialiquam quos obcaecati impedit officiis, amet ipsum optio, sapientequasi aperiam nihil inventore nam aliquid! Ut voluptatem voluptatesaliquid. \n Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum doloribus beatae itaque sunt, ab rem?Lorem ipsum dolor sit amet consectetur, adipisicing elit. At nesciunt asperiores voluptates dolorem et delectus, unde culpa, corporis illo fugit sequi voluptate neque! Reiciendis repellat tenetur similique hic assumenda dolores delenitialiquam quos obcaecati impedit officiis, amet ipsum optio, sapientequasi aperiam nihil inventore nam aliquid! Ut voluptatem voluptatesaliquid."
            }
          />

          <TermsComponent
            title={"Copyright And Trademarks"}
            description={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum doloribus beatae itaque sunt, ab rem?Lorem ipsum dolor sit amet consectetur, adipisicing elit. At nesciunt asperiores voluptates dolorem et delectus, unde culpa, corporis illo fugit sequi voluptate neque! Reiciendis repellat tenetur similique hic assumenda dolores delenitialiquam quos obcaecati impedit officiis, amet ipsum optio, sapientequasi aperiam nihil inventore nam aliquid! Ut voluptatem voluptatesaliquid."
            }
          />

          <TermsComponent
            title={"Condition of Carriage"}
            description={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum doloribus beatae itaque sunt, ab rem?Lorem ipsum dolor sit amet consectetur, adipisicing elit. At nesciunt asperiores voluptates dolorem et delectus, unde culpa, corporis illo fugit sequi voluptate neque! Reiciendis repellat tenetur similique hic assumenda dolores delenitialiquam quos obcaecati impedit officiis, amet ipsum optio, sapientequasi aperiam nihil inventore nam aliquid! Ut voluptatem voluptatesaliquid."
            }
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default TermsAndConditions;
