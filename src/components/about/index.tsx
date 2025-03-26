import { Button, Typography, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const AboutMeSection = () => {
  const theme = useTheme();

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-cyan-100 to-white">
      {/* Background Wave */}
      <div
        className="absolute top-0 left-0 w-full h-[40vh] bg-gradient-to-r from-cyan-100 to-white"
        style={{
          clipPath:
            "path('M0,32 C150,100 300,0 450,40 C600,80 750,20 900,50 C1050,80 1200,0 1350,20 L1350,200 L0,200 Z')",
        }}
      ></div>

      <div className="container mx-auto px-8 relative z-10">
        <Grid container spacing={6} alignItems="center" justifyContent="center">
          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h2" component="h1" gutterBottom>
              About Me
            </Typography>
            <Typography
              color={theme.palette.tertiary?.main}
              variant="h6"
              gutterBottom
            >
              Over the years,
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "justify", px: 4, color: "black" }}
              paragraph
            >
              I've successfully developed and deployed robust web applications
              for a global clientele, encompassing industries from finance to
              enterprise solutions. My expertise lies in crafting intuitive,
              high-performance user experiences while adhering to industry best
              practices.
              <br />
              <br />
              Proficient in building scalable e-ticketing, payment, and
              insurance systems. Demonstrated expertise in integrating AI APIs
              to enhance application functionality.
              <br />
              <br />
              Passionate about leveraging technology to drive innovation and
              deliver exceptional user experiences.
            </Typography>
            <Button variant="contained" color="primary" size="large">
              View Resume
            </Button>
          </Grid>

          {/* Image Section */}
          <Grid
            item
            xs={12}
            md={6}
            p={6}
            sx={{
              textAlign: "center",
              clipPath:
                "path('M0,32 C150,100 300,0 450,40 C600,80 750,20 900,50 C1050,80 1200,0 1350,20 L1350,200 L0,200 Z')",
            }}
          >
            <img
              src="./images/productivity4.png"
              alt="me"
              style={{ width: "60%" }}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default AboutMeSection;
