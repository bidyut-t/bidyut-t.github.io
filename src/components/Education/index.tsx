import { Box, Typography, Card, CardContent, useTheme } from "@mui/material";
import { educationData } from "../../contants";

import styles from "./style";

const EducationSection = () => {
  const theme = useTheme();
  const classes = styles(theme);

  return (
    <Box
      sx={classes.container}
    >
      <Typography variant="h4" textAlign="center" mb={4}>
        Education
      </Typography>
      <Box display="flex" flexDirection="column" gap={4} alignItems="center">
        {educationData.map((edu, index) => (
          <Card
            key={index}
            sx={classes.card}
          >
            <CardContent sx={classes.cardContent}>
              <Box
                component="img"
                src={edu.logo}
                alt="logo"
                sx={{ width: { xs: 50, md: 60 }, height: { xs: 50, md: 60 } }}
              />
              <Box>
                <Typography sx={classes.degreeText}>
                  {edu.degree}
                </Typography>
                <Typography sx={classes.fieldText}>
                  {edu.field}
                </Typography>
                <Typography sx={classes.institutionText}>
                  {edu.institution}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontStyle="italic"
                >
                  Grade: {edu.grade}
                </Typography>
              </Box>
            </CardContent>
            <Box
              sx={classes.rightSection}
            >
              <Typography>{edu.endDate}</Typography>
              <Box sx={classes.verticalDivider} />
              <Typography>{edu.startDate}</Typography>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default EducationSection;
