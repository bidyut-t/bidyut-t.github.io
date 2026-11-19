import {
  Box,
  Typography,
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
} from "@mui/icons-material";
import { motion } from "framer-motion";

import Header from "../../components/header/index.tsx";
import Resume from "../../components/resume/index.tsx";
import EducationSection from "../../components/Education/index.tsx";
import CertificateCard from "../../components/certificates/index.tsx";
import ProfileLinksFooter from "../../components/profileLinkFooter/index.tsx";
import ResumeDownloadButton from "../../components/common/resumeDownloadButton/index.tsx";

import { sections, certificates } from "../../contants/index.ts";
import styles from "./style";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: "easeOut" as const },
  viewport: { once: true, amount: 0.2 },
};

const Home = () => {
  const theme = useTheme();
  const classes = styles(theme);

  return (
    <Box sx={classes.page}>
      <Header />

      <Box component="section" id={sections[0]} sx={classes.hero}>
        <Box sx={classes.heroInner}>
          <Box sx={classes.heroContent}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Typography component="h1" sx={classes.brandName}>
                Bidyut Talukdar
              </Typography>
              <Typography sx={classes.roleLine} mt={2}>
                Senior Software Developer<span>.</span>
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            >
              <Stack spacing={1.25} sx={classes.contactRow}>
                <Stack direction="row" alignItems="center" spacing={1} sx={classes.contactItem}>
                  <Email />
                  <Typography>bidyut3004@gmail.com</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1} sx={classes.contactItem}>
                  <Phone />
                  <Typography>+91 7002762871</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1} sx={classes.contactItem}>
                  <LocationOn />
                  <Typography>Hyderabad, India</Typography>
                </Stack>
              </Stack>

              <Box sx={classes.ctaRow}>
                <ResumeDownloadButton />
                <IconButton
                  component="a"
                  href="https://www.linkedin.com/in/bidyut-talukdar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  sx={classes.socialButton}
                >
                  <LinkedIn />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://github.com/bidyut-t"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  sx={classes.socialButton}
                >
                  <GitHub />
                </IconButton>
              </Box>
            </motion.div>
          </Box>

          <Box sx={classes.heroVisual}>
            <Box
              component={motion.img}
              src="./images/1770715700276.jpg"
              alt="Bidyut Talukdar"
              sx={classes.heroImage}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            />
          </Box>
        </Box>
      </Box>

      <Box
        component={motion.section}
        id={sections[1]}
        sx={classes.about}
        {...fadeUp}
      >
        <Typography component="h2" sx={classes.aboutTitle}>
          About me
        </Typography>
        <Typography component="p" sx={classes.aboutBody}>
          I've successfully developed and deployed robust web applications for a
          global clientele, encompassing industries from finance to enterprise
          solutions. My expertise lies in crafting intuitive, high-performance
          user experiences while adhering to industry best practices.
        </Typography>
        <Typography component="p" sx={classes.aboutBody}>
          Proficient in building scalable e-ticketing, payment, and insurance
          systems. Demonstrated expertise in integrating AI APIs to enhance
          application functionality.
        </Typography>
        <Typography component="p" sx={classes.aboutBody}>
          Passionate about leveraging technology to drive innovation and deliver
          exceptional user experiences.
        </Typography>
        <Box sx={classes.aboutCta}>
          <ResumeDownloadButton light />
        </Box>
      </Box>

      <Box component="section" id={sections[2]}>
        <Resume />
      </Box>

      <Box
        component={motion.section}
        id={sections[3]}
        sx={classes.section}
        {...fadeUp}
      >
        <Typography component="h2" sx={classes.sectionTitle}>
          Certificates & Awards
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr",
            },
            gap: { xs: 3, md: 4 },
          }}
        >
          {certificates.map((cert, index) => (
            <CertificateCard key={cert.title} cert={cert} index={index} />
          ))}
        </Box>
        <Box sx={{ mt: 5, display: "flex", justifyContent: "flex-start" }}>
          <ResumeDownloadButton />
        </Box>
      </Box>

      <Box component="section" id={sections[4]}>
        <EducationSection />
      </Box>

      <Box component="section" id={sections[5]}>
        <ProfileLinksFooter />
      </Box>
    </Box>
  );
};

export default Home;
