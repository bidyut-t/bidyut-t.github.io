import { Box, Grid, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { skills, experiences } from "../../contants";
import styles from "./style";

const Resume = () => {
  const theme = useTheme();
  const classes = styles(theme);

  return (
    <Box
      component={motion.div}
      sx={classes.container}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.15 }}
    >
      <Grid container spacing={{ xs: 6, md: 8 }}>
        <Grid item xs={12} md={6}>
          <Typography component="h2" sx={classes.sectionTitle}>
            Tech Stack
          </Typography>

          {skills.map((category) => (
            <Box key={category.category} sx={classes.skillGroup}>
              <Typography sx={classes.categoryLabel}>
                {category.category}
              </Typography>
              <Box sx={classes.skillTags}>
                {category.skills.map((skill) => (
                  <Box key={skill.name} component="span" sx={classes.skillTag}>
                    <Box
                      component="img"
                      src={skill.icon}
                      alt=""
                      sx={classes.skillIcon}
                    />
                    {skill.name}
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography component="h2" sx={classes.sectionTitle}>
            Work Experience
          </Typography>

          <Box sx={classes.experienceList}>
            {experiences.map((experience) => (
              <Box key={`${experience.company}-${experience.position}`} sx={classes.experienceItem}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: 2,
                  }}
                >
                  <Box>
                    <Typography sx={classes.role}>
                      {experience.position}
                    </Typography>
                    <Box sx={classes.meta}>
                      <Typography sx={classes.company}>
                        {experience.company}
                      </Typography>
                      <Typography sx={classes.duration}>
                        {experience.duration}
                      </Typography>
                    </Box>
                    {experience.description ? (
                      <Typography sx={classes.description}>
                        {experience.description}
                      </Typography>
                    ) : null}
                  </Box>
                  <Box
                    component="img"
                    src={experience.logo}
                    alt=""
                    sx={classes.logo}
                  />
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Resume;
