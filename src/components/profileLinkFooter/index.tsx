import { Box, Typography, Link, useTheme } from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";
import { profiles } from "../../contants";

const ProfileLinksFooter = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        px: "var(--section-pad-x)",
        py: "var(--section-pad-y)",
      }}
    >
      <Typography
        component="h2"
        sx={{
          fontFamily: "'Interval Pro Light', Georgia, serif",
          fontSize: { xs: "1.85rem", md: "2.35rem" },
          mb: 5,
          color: "#FAF8F4",
        }}
      >
        Profile Links
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: { xs: 3, md: 5 },
          mb: 6,
        }}
      >
        {profiles.map((profile) =>
          profile.link ? (
            <Link
              key={profile.name}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.5,
                color: "#FAF8F4",
                borderBottom: "1px solid transparent",
                pb: 0.5,
                transition: "border-color 0.2s ease, color 0.2s ease",
                "&:hover": {
                  color: theme.palette.secondary.light,
                  borderBottomColor: theme.palette.secondary.light,
                },
              }}
            >
              <Box
                component="img"
                src={profile.icon}
                alt=""
                sx={{
                  width: 22,
                  height: 22,
                  filter: "brightness(0) invert(1)",
                  opacity: 0.9,
                }}
              />
              <Typography component="span" sx={{ fontSize: "1.05rem" }}>
                {profile.name}
              </Typography>
            </Link>
          ) : (
            <Box
              key={profile.name}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.5,
                color: "rgba(250, 248, 244, 0.45)",
              }}
            >
              <Box
                component="img"
                src={profile.icon}
                alt=""
                sx={{
                  width: 22,
                  height: 22,
                  filter: "brightness(0) invert(1)",
                  opacity: 0.45,
                }}
              />
              <Typography component="span" sx={{ fontSize: "1.05rem" }}>
                {profile.name}
              </Typography>
            </Box>
          )
        )}
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          flexWrap: "wrap",
          gap: { xs: 1.5, sm: 3 },
          mb: 6,
          color: "rgba(250, 248, 244, 0.75)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Email sx={{ fontSize: 18, color: theme.palette.secondary.light }} />
          <Typography variant="body2">bidyut3004@gmail.com</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Phone sx={{ fontSize: 18, color: theme.palette.secondary.light }} />
          <Typography variant="body2">+91 7002762871</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <LocationOn
            sx={{ fontSize: 18, color: theme.palette.secondary.light }}
          />
          <Typography variant="body2">Hyderabad, India</Typography>
        </Box>
      </Box>

      <Typography
        variant="body2"
        sx={{
          color: "rgba(250, 248, 244, 0.45)",
          borderTop: "1px solid rgba(250, 248, 244, 0.12)",
          pt: 3,
        }}
      >
        © 2025 Bidyut Talukdar | All rights reserved
      </Typography>
    </Box>
  );
};

export default ProfileLinksFooter;
