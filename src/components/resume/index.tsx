import {
  Box,
  Grid,
  Typography,
  Card,
  LinearProgress,
  Avatar,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { skills, experiences } from "../../contants";
import styles from "./style";

const Resume = () => {
  const theme = useTheme();
  const classes = styles(theme);
  return (
    <Box sx={classes.container}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Grid item xs={12} md={6} sx={{ mb: 10 }}>
            <Typography variant="h4" align="left" gutterBottom>
              Tech Stack
            </Typography>
          </Grid>

          {skills.map((category, index) => (
            <motion.div
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
              viewport={{ once: true }}
              key={index}
            >
              <Card
                sx={{
                  marginBottom: "20px",
                  padding: "20px",
                  borderRadius: "20px",
                }}
                key={index}
              >
                <Typography variant="h5" style={{ marginBottom: "14px" }}>
                  {category.category}
                </Typography>
                {category.skills.map((skill) => (
                  <Box
                    key={skill.name}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "14px",
                    }}
                  >
                    <Avatar
                      src={skill.icon}
                      sx={{ width: 24, height: 24, marginRight: "10px" }}
                    />
                    <Typography sx={{ flexGrow: 1 }}>{skill.name}</Typography>
                    <LinearProgress
                      variant="determinate"
                      value={skill.level}
                      sx={{
                        width: "50%",
                        marginRight: "10px",
                        height: "6px",
                        borderRadius: "10px",
                        "& .MuiLinearProgress-bar": {
                          borderRadius: "10px",
                          backgroundColor: theme.palette.tertiary.dark,
                        },
                      }}
                    />
                    <Typography>{`${skill.level}%`}</Typography>
                  </Box>
                ))}
              </Card>
            </motion.div>
          ))}
        </Grid>

        <Grid item xs={12} md={6} sx={{ position: "relative" }}>
          <Grid item xs={12} md={6} sx={{ mb: 10 }}>
            <Typography variant="h4" align="left" gutterBottom>
              Work Experience
            </Typography>
          </Grid>
          <Box
            sx={{
              position: "absolute",
              top: "160px",
              left: "20px",
              bottom: 0,
              width: "4px",
              backgroundColor: theme.palette.tertiary.dark,
              zIndex: 0,
            }}
          ></Box>
          {experiences.map((experience, index) => (
            <Box
              key={index}
              sx={{ position: "relative", marginBottom: "20px" }}
            >
              <Box
                sx={{
                  position: "absolute",
                  left: "-16px",
                  top: "25px",
                  width: "12px",
                  height: "12px",
                  backgroundColor: theme.palette.tertiary.dark,
                  borderRadius: "50%",
                  zIndex: 1,
                }}
              ></Box>
              <Box
                sx={{
                  position: "absolute",
                  left: "-13.5px",
                  top: "27px",
                  width: "8px",
                  height: "8px",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  zIndex: 1,
                }}
              ></Box>
              <Box
                sx={{
                  position: "absolute",
                  left: "-5px",
                  top: "30px",
                  width: "14px",
                  height: "3px",
                  backgroundColor: theme.palette.tertiary.dark,
                  borderRadius: "10%",
                  zIndex: 1,
                }}
              ></Box>
              <motion.div
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.3 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    marginBottom: "20px",
                    marginLeft: "10px",
                    padding: "20px",
                    borderRadius: "20px",
                    borderLeft: `5px solid ${theme.palette.tertiary.dark}`,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography variant="h6">{experience.position}</Typography>
                    <Typography color="textSecondary">
                      {experience.company}
                    </Typography>
                    <Typography color="textSecondary">
                      {experience.duration}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      sx={{ marginTop: "10px" }}
                    >
                      {experience.description}
                    </Typography>
                  </Box>
                  <Avatar
                    src={experience.logo}
                    sx={{ width: 40, height: 40 }}
                  />
                </Card>
              </motion.div>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Resume;
