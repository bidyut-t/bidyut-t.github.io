import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Grid,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";

import { profiles } from "../../contants";

const ProfileLinksFooter = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.tertiary.main,
        padding: "60px 20px",
      }}
    >
      {/* Profile Links Section */}
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ mb: 6, mt: 4, fontWeight: 400 }}
      >
        Profile Links
      </Typography>

      <Grid container spacing={3} justifyContent="center" sx={{ mb: 6 }}>
        {profiles.map((profile, index) => (
          <Grid item key={index}>
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
                padding: 2,
                minWidth: 140,
                textAlign: "center",
                boxShadow: 3,
                borderRadius: 2,
              }}
            >
              <CardContent>
                <Avatar
                  src={profile.icon}
                  sx={{ width: 40, height: 40, margin: "0 auto 10px" }}
                />
                <Typography>{profile.name}</Typography>
              </CardContent>
            </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Contact Info */}
      {/* <Box sx={{ textAlign: "left", maxWidth: 400, margin: "0 auto" }}>
        <Typography variant="h6" gutterBottom>
          Get in touch
        </Typography>
        <Box display="flex" alignItems="center" mb={1}>
          <EmailIcon fontSize="small" sx={{ mr: 1 }} />
          <Typography variant="body1">prasenjeetpaul14@gmail.com</Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <PhoneIcon fontSize="small" sx={{ mr: 1 }} />
          <Typography variant="body1">+1 9803459457</Typography>
        </Box>
      </Box> */}

      {/* Footer */}
      <Typography variant="body2" align="center" sx={{ mt: 6 }}>
        © 2025 Bidyut Talukdar | All rights reserved
      </Typography>
    </Box>
  );
};

export default ProfileLinksFooter;
