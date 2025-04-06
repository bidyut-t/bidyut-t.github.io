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

const skills = [
  {
    category: "Web Development",
    skills: [
      {
        name: "JavaScript",
        level: 95,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "React",
        level: 70,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Redux",
        level: 80,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      },
      {
        name: "RxJS",
        level: 85,
        icon: "https://rxjs.dev/assets/images/logos/Rx_Logo_S.png",
      },
      {
        name: "Webpack",
        level: 70,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
      },
      {
        name: "HTML",
        level: 90,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS / SCSS",
        level: 85,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      {
        name: "Python",
        level: 75,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "Node.js",
        level: 80,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        level: 75,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "GraphQL",
        level: 75,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
      },
      {
        name: "MySQL",
        level: 85,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "MongoDB",
        level: 80,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
    ],
  },
];

const experiences = [
  {
    company: "Tezo",
    position: "Software Developer",
    duration: "2022 - 2024",
    description:
      "Worked within the banking system, encompassing everything from quote flow to purchase flow. Developed and integrated APIs for third-party services, enhancing transaction processing and data sharing capabilities.",
    logo: "https://tezo.com/wp-content/uploads/2023/10/TezoLogo.svg",
  },
  {
    company: "Amtron",
    position: "Web Developer Consultant",
    duration: "2020 - 2022",
    description:
      "Worked on Node.js for developments of in-house APIs and 3rd party vendor APIs, User Authentication/Authorization. Also have experienced in the development of frontend using React.js.",
    logo: "https://www.developmentaid.org/files/organizationLogos/assam-electronics-development-corporation-ltd-amtron-76217.jpg",
  },
];

const Resume = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        padding: "60px 8%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Grid item xs={12} md={6} sx={{ mb: 10 }}>
            <Typography variant="h4" align="left" gutterBottom>
              Tech Stack
            </Typography>
          </Grid>

          {skills.map((category) => (
            <motion.div
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              key={category.category}
            >
              <Card
                sx={{
                  marginBottom: "20px",
                  padding: "20px",
                  borderRadius: "20px",
                }}
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
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                whileInView={{ opacity: 1, x: 0 }}
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
