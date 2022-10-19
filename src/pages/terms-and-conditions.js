import dynamic from 'next/dynamic'
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
  const HeaderComponent = dynamic(() => import("../../components/Header"));
  return (
    <div>
      <HeaderComponent  title={"Terms And Conditions"} />
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
