import { Theme } from "@mui/material";

const styles = (theme: Theme) => ({
  container: {
    px: "var(--section-pad-x)",
    py: "var(--section-pad-y)",
    backgroundColor: theme.palette.background.default,
  },
  sectionTitle: {
    fontFamily: "'Interval Pro Light', Georgia, serif",
    fontSize: { xs: "1.85rem", md: "2.35rem" },
    color: theme.palette.primary.main,
    mb: 4,
  },
  categoryLabel: {
    fontSize: "0.75rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: theme.palette.text.secondary,
    mb: 2,
  },
  skillGroup: {
    mb: 4,
  },
  skillTags: {
    display: "flex",
    flexWrap: "wrap",
    gap: 1.25,
  },
  skillTag: {
    display: "inline-flex",
    alignItems: "center",
    gap: 1,
    px: 1.5,
    py: 0.85,
    backgroundColor: theme.palette.tertiary.main,
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: 1,
    fontSize: "0.95rem",
    color: theme.palette.primary.main,
  },
  skillIcon: {
    width: 18,
    height: 18,
  },
  experienceList: {
    display: "flex",
    flexDirection: "column",
    gap: 0,
    borderLeft: `2px solid ${theme.palette.divider}`,
    pl: { xs: 2.5, md: 3.5 },
  },
  experienceItem: {
    position: "relative",
    pb: 4,
    "&:last-child": {
      pb: 0,
    },
    "&::before": {
      content: '""',
      position: "absolute",
      left: { xs: -30, md: -38 },
      top: 8,
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: theme.palette.secondary.main,
      border: `2px solid ${theme.palette.background.default}`,
      boxSizing: "content-box",
    },
  },
  role: {
    fontSize: { xs: "1.1rem", md: "1.2rem" },
    color: theme.palette.primary.main,
    mb: 0.5,
  },
  meta: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: 1.5,
    mb: 1.5,
  },
  company: {
    color: theme.palette.secondary.main,
    fontSize: "0.95rem",
  },
  duration: {
    color: theme.palette.text.secondary,
    fontSize: "0.9rem",
  },
  description: {
    color: theme.palette.text.secondary,
    fontSize: "0.98rem",
    lineHeight: 1.7,
    maxWidth: 520,
  },
  logo: {
    width: 36,
    height: 36,
    objectFit: "contain",
  },
});

export default styles;
