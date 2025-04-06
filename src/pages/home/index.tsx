import React from "react";
import {
  Grid,
  Typography,
  Box,
  IconButton,
  Stack,
  useTheme,
} from "@mui/material";
import {
  Email,
  Phone,
  LocationOn,
  GitHub,
  LinkedIn,
  Language,
} from "@mui/icons-material";
import { motion } from "framer-motion";

import Header from "../../components/header/index.tsx";
import Resume from "../../components/resume/index.tsx";
import EducationSection from "../../components/Education/index.tsx";
import CertificateCard from "../../components/certificates/index.tsx";
// import ContactUsComponent from "../../components/contactus";
import ProfileLinksFooter from "../../components/profileLinkFooter/index.tsx";

import ResumeDownloadButton from "../../components/common/resumeDownloadButton/index.tsx";

import { sections, certificates } from "../../contants/index.ts";

import styles from "./style";

const Home = () => {
  const theme = useTheme();
  const classes = styles(theme);

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Header />
        </Grid>

        <Grid item xs={12} id={sections[0]}>
          <Grid container sx={classes.paddingContainer}>
            <Grid item xs={12} md={7} lg={8} sx={classes.aboutSectionOne}>
              <Grid container sx={classes.aboutContainer} spacing={1}>
                <Grid item xs={12}>
                  <Box
                    sx={{
                      backgroundColor: "#00D7DF",
                      color: "#fff",
                      padding: "10px 18px",
                      borderRadius: "20px 20px 20px 4px",
                      display: "inline-block",
                      maxWidth: "fit-content",
                      animation: "fadeInUp 0.6s ease-out",
                      "@keyframes fadeInUp": {
                        "0%": {
                          opacity: 0,
                          transform: "translateY(20px)",
                        },
                        "50%": {
                          opacity: 1,
                          transform: "translateY(04px)",
                        },
                        "100%": {
                          opacity: 1,
                          transform: "translateY(0)",
                        },
                      },
                    }}
                  >
                    <Typography variant="body1" sx={{ fontWeight: 400 }}>
                      Hello, I'm
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h4" sx={{ mt: 2 }}>
                    Bidyut Talukdar
                  </Typography>
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
                    <IconButton
                      component="a"
                      href="https://www.linkedin.com/in/bidyut-talukdar/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedIn />
                    </IconButton>
                    <IconButton
                      component="a"
                      href="https://github.com/bidyut-t"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHub />
                    </IconButton>
                    <IconButton
                      component="a"
                      href="https://bidyut-t.github.io/portfolio/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Language />
                    </IconButton>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={5} lg={4} sx={classes.imageDiv}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: 1 * 0.3,
                }}
                viewport={{ once: true }}
              >
                <div style={classes.imageContainer}>
                  <div style={classes.innerCircle}>
                    <img
                      src="./images/bidyutnew.jpg"
                      alt="me"
                      style={classes.image as React.CSSProperties}
                    />
                  </div>
                </div>
              </motion.div>
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
                backgroundColor: theme.palette.background.default,
                borderRadius: "0 0 50% 50%",
              }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sx={classes.summary} id={sections[1]}>
          <Grid container sx={classes.summaryContainer}>
            <Grid item xs={12} md={6}>
              <Typography
                color={theme.palette.tertiary.dark}
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
                <ResumeDownloadButton />
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
                src="/portfolio/images/productivity.png"
                alt="me"
                style={{ width: "100%" }}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Box
            sx={{
              width: "100%",
              height: "150px",
              backgroundColor: theme.palette.background.default,
              position: "relative",
              mt: -2,
            }}
          >
            {/* Wave at the top */}
            <Box
              sx={{
                position: "absolute",
                left: 0,
                width: "100%",
                height: "80px",
                backgroundColor: theme.palette.primary.main,
                borderRadius: "0 0 50% 50%",
              }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} id={sections[2]}>
          <Resume />
        </Grid>

        <Grid item xs={12} id={sections[3]}>
          <Grid container spacing={3} sx={classes.paddingContainer}>
            <Grid item xs={12}>
              <Typography variant="h4" align="center" gutterBottom>
                Certificates & Awards
              </Typography>
            </Grid>
            {certificates.map((cert, index) => (
              <Grid item xs={12} sm={6} md={4}>
                <CertificateCard cert={cert} index={index} />
              </Grid>
            ))}
          </Grid>
          <Grid container justifyContent="center" sx={{ mt: 3 }}>
            <ResumeDownloadButton />
          </Grid>
        </Grid>

        <Grid item xs={12} id={sections[4]}>
          <EducationSection />
        </Grid>

        <Grid item xs={12} mb={1} id={sections[5]}>
          <ProfileLinksFooter />
        </Grid>
      </Grid>
    </>
  );
};
export default Home;
