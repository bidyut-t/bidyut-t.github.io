import { Box, Typography, Card, CardContent, useTheme } from "@mui/material";

const educationData = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/en/7/78/Gauhati_University_Logo.jpeg",
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    institution: "Gauhati University",
    startDate: "Aug-2016",
    endDate: "Oct-2020",
    grade: "9.54 CGPA",
  },
  {
    logo: "https://cottonuniversity.ac.in/storage/uploads/page/025403c253eab05a949dc9eaff23fae2a3edb9.jpg",
    degree: "Higher Secondary",
    field: "Science Stream(PCM)",
    institution: "Cotton University",
    startDate: "Jul-2013",
    endDate: "Jul-2015",
    grade: "85%",
  },
];

const EducationSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{ padding: { xs: "2rem", md: "4rem" }, backgroundColor: "#F6F6F6" }}
    >
      <Typography variant="h4" textAlign="center" mb={4}>
        Education
      </Typography>
      <Box display="flex" flexDirection="column" gap={4} alignItems="center">
        {educationData.map((edu, index) => (
          <Card
            key={index}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" }, // Responsive layout
              width: { xs: "100%", sm: "100%", md: "100%" },
              maxWidth: "800px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              borderRadius: "16px",
            }}
          >
            <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                component="img"
                src={edu.logo}
                alt="logo"
                sx={{ width: { xs: 50, md: 60 }, height: { xs: 50, md: 60 } }}
              />
              <Box>
                <Typography variant="h6" fontWeight="bold">
                  {edu.degree}
                </Typography>
                <Typography variant="h5" fontWeight="600">
                  {edu.field}
                </Typography>
                <Typography variant="body1" color="text.secondary">
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
              sx={{
                marginLeft: { xs: 0, md: "auto" },
                alignItems: "center",
                padding: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                color:theme.palette.primary.main,
              }}
            >
              <Typography>{edu.endDate}</Typography>
              <Box sx={{ borderLeft: `2px solid ${theme.palette.primary.main}`, height: "40px" }} />
              <Typography>{edu.startDate}</Typography>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default EducationSection;
