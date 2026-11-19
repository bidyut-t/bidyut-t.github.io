import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { educationData } from "../../contants";
import styles from "./style";

const EducationSection = () => {
  const theme = useTheme();
  const classes = styles(theme);

  return (
    <Box
      component={motion.div}
      sx={classes.container}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <Typography component="h2" sx={classes.title}>
        Education
      </Typography>
      <Box sx={classes.list}>
        {educationData.map((edu) => (
          <Box key={`${edu.institution}-${edu.degree}`} sx={classes.item}>
            <Box
              component="img"
              src={edu.logo}
              alt=""
              sx={classes.logo}
            />
            <Box>
              <Typography sx={classes.degreeText}>{edu.degree}</Typography>
              <Typography sx={classes.fieldText}>{edu.field}</Typography>
              <Typography sx={classes.institutionText}>
                {edu.institution}
              </Typography>
              <Typography sx={classes.gradeText}>Grade: {edu.grade}</Typography>
            </Box>
            <Typography sx={classes.dates}>
              {edu.startDate} — {edu.endDate}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default EducationSection;
