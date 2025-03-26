import React from 'react'
import {
  Grid,
  Typography,
  Button,
  Box,
  IconButton,
  Stack,
} from "@mui/material";
import { useTheme } from "@mui/material";
import {
  Email,
  Phone,
  LocationOn,
  GitHub,
  LinkedIn,
  Instagram,
  Facebook,
  Language,
} from "@mui/icons-material";
import ContactUsComponent from "../../components/contactus";
import styles from "./style";
import Resume from "../../components/resume/index.tsx";
import CertificateCard from "../../components/certificates/index.tsx";
import Header from "../../components/header/index.tsx";
import EducationSection from "../../components/Education/index.tsx";

const certificates = [
  {
    title: "AWS Academy Data Analytics",
    date: "May 03, 2022",
    credentialId: "",
    organization: "AWS Academy",
  },
  {
    title: "Certified Angular Developer",
    date: "Sept 13, 2020",
    credentialId: "80e8e2b06532",
    organization: "Hackerrank",
  },
  {
    title: "Data Structures",
    date: "Aug 23, 2020",
    credentialId: "WUSAKQ9WSVBEK",
    organization: "UC San Diego",
  },
  {
    title: "Advanced Algorithms",
    date: "Jul 12, 2022",
    credentialId: "8YY76VGCAT2J",
    organization: "UC San Diego",
  },
  {
    title: "Database Programming with SQL",
    date: "Jan 16, 2017",
    credentialId: "",
    organization: "Oracle Academy",
  },
  {
    title: "Database Design",
    date: "Jan 16, 2017",
    credentialId: "",
    organization: "Oracle Academy",
  },
];

const Home = () => {
  const theme = useTheme();
  const classes = styles(theme);

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Header />
        </Grid>

        <Grid item xs={12}>
          <Grid container sx={classes.paddingContainer}>
            <Grid item xs={12} md={7} lg={8} sx={classes.aboutSectionOne}>
              <Grid container sx={classes.aboutContainer} spacing={1}>
                <Grid item xs={12}>
                  <Typography variant="h4">Bidyut Talukdar</Typography>
                  <Typography variant="h1" sx={classes.aboutTitle}>
                    Software Developer<span>.</span>
                  </Typography>
                </Grid>
                <Grid item xs={12} mb={4}>
                  <Stack spacing={1.5} sx={{ mt: 2, textAlign: "center" }}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Email />
                      <Typography>bidyut3004@gmail.com</Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Phone />
                      <Typography>+91 7002762871</Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <LocationOn />
                      <Typography>Hyderabad, India</Typography>
                    </Stack>
                  </Stack>

                  <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                    <IconButton>
                      <Facebook />
                    </IconButton>
                    <IconButton>
                      <Instagram />
                    </IconButton>
                    <IconButton>
                      <LinkedIn />
                    </IconButton>
                    <IconButton>
                      <GitHub />
                    </IconButton>
                    <IconButton>
                      <Language />
                    </IconButton>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={5} lg={4} sx={classes.imageDiv}>
              <div style={classes.imageContainer}>
                <div style={classes.innerCircle}>
                  <img
                    src="./images/bidyutnew.jpg"
                    alt="me"
                    style={classes.image as React.CSSProperties}
                  /> 
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Box
            sx={{
              width: "100%",
              height: "150px",
              backgroundColor: theme.palette.primary.main,
              position: "relative",
              mt: -5,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "-40px",
                left: 0,
                width: "100%",
                height: "80px",
                backgroundColor: "white",
                borderRadius: "0 0 50% 50%",
              }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sx={classes.summary}>
          <Grid container sx={classes.summaryContainer}>
            <Grid item xs={12} md={6}>
              <Typography
                color={theme.palette.tertiary.main}
                sx={classes.overViewSection}
              >
                About me
              </Typography>
              <p
                style={{
                  textAlign: "justify",
                  padding: "0 4%",
                  color: "white",
                }}
              >
                I've successfully developed and deployed robust web applications
                for a global clientele, encompassing industries from finance to
                enterprise solutions. My expertise lies in crafting intuitive,
                high-performance user experiences while adhering to industry
                best practices.
                <br />
                <br />
                Proficient in building scalable e-ticketing, payment, and
                insurance systems. Demonstrated expertise in integrating AI APIs
                to enhance application functionality.
                <br />
                <br />
                Passionate about leveraging technology to drive innovation and
                deliver exceptional user experiences.
              </p>
              <Grid container justifyContent="center" sx={{ mt: 3 }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: theme.palette.tertiary.main,
                    color: theme.palette.primary.main,
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    fontSize: "1rem",
                    animation: "breath 3s ease-in-out infinite",
                    "@keyframes breath": {
                      "0%": { transform: "scale(1)" },
                      "50%": { transform: "scale(1.05)" },
                      "100%": { transform: "scale(1)" },
                    },
                  }}
                >
                  Resume
                </Button>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              p={6}
              sx={{ 
                textAlign: "center", 
                ...classes.aboutImage
              }}
            >
              <img
                src="./images/productivity4.png"
                alt="me"
                style={{ width: "60%" }}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Resume />
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={2} sx={classes.paddingContainer}>
            <Grid item xs={12}>
              <Typography variant="h3" align="center" gutterBottom>
                Certificates
              </Typography>
            </Grid>
            {certificates.map((cert, index) => (
              <Grid item xs={12} sm={6} md={4}>
                <CertificateCard cert={cert} index={index} />
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={12} sx={{mb:2}}>
          <Grid container justifyContent="center" sx={{ mt: 3 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: theme.palette.tertiary.main,
                color: theme.palette.primary.main,
                px: 4,
                py: 1.5,
                borderRadius: 2,
                fontSize: "1rem",
                animation: "breath 3s ease-in-out infinite",
                "@keyframes breath": {
                  "0%": { transform: "scale(1)" },
                  "50%": { transform: "scale(1.05)" },
                  "100%": { transform: "scale(1)" },
                },
              }}
            >
              Resume
            </Button>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <EducationSection/>
        </Grid>

        <Grid item xs={12} mb={1}>
          <ContactUsComponent />
        </Grid>
      </Grid>
    </>
  );
};
export default Home;
