import React from "react";
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
    title: "Graph Developer - Associate",
    date: "Jan 21, 2025",
    credentialId: "af7cfd27-1ece-4d54-a6a1-d6aa33f3558e",
    organization: "Apollo GraphQL",
    link: "https://www.apollographql.com/tutorials/certifications/af7cfd27-1ece-4d54-a6a1-d6aa33f3558e",
    logo: "https://www.apollographql.com/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F102461%2F1739903846-rocket.png&w=1920&q=100",
  },
  {
    title: "SQL Certified",
    date: "Jan 31, 2022",
    credentialId: "AF52DDB5E0B1",
    organization: "HackerRank",
    link: "https://www.hackerrank.com/certificates/af52ddb5e0b1",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
  },
  {
    title: "Hack for health - Hackathon, IIT Guwahati",
    date: "Jan, 2019",
    credentialId: "",
    organization: "IIT Guwahati",
    link: "https://www.linkedin.com/in/bidyut-talukdar/details/honors",
    logo: "https://event.iitg.ac.in/icann2019/Proceedings_LaTeX/2019/IITG_logo.png",
  },
  {
    title: "Above & Beyond",
    date: "Dec, 2023",
    credentialId: "",
    organization: "Tezo",
    link: "https://www.linkedin.com/in/bidyut-talukdar/details/honors",
    logo: "https://tezo.com/wp-content/uploads/2023/10/TezoLogo.svg",
  },
  {
    title: "Code Fest'18, organised by T&P Cell",
    date: "Sept, 2019",
    credentialId: "",
    organization: "GUIST",
    link: "https://www.linkedin.com/in/bidyut-talukdar/details/honors",
    logo: "https://upload.wikimedia.org/wikipedia/en/7/78/Gauhati_University_Logo.jpeg",
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
                ...classes.aboutImage,
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
                Certificates & Awards
              </Typography>
            </Grid>
            {certificates.map((cert, index) => (
              <Grid item xs={12} sm={6} md={4}>
                <CertificateCard cert={cert} index={index} />
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={12} sx={{ mb: 2 }}>
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
          <EducationSection />
        </Grid>

        <Grid item xs={12} mb={1}>
          <ContactUsComponent />
        </Grid>
      </Grid>
    </>
  );
};
export default Home;
