import { Theme } from "@mui/material";

const styles = (theme: Theme) => ({
  container: {
    backgroundColor: theme.palette.tertiary.main,
    px: "var(--section-pad-x)",
    py: "var(--section-pad-y)",
  },
  title: {
    fontFamily: "'Interval Pro Light', Georgia, serif",
    fontSize: { xs: "1.85rem", md: "2.35rem" },
    color: theme.palette.primary.main,
    mb: 5,
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: 0,
    maxWidth: 900,
  },
  item: {
    display: "grid",
    gridTemplateColumns: { xs: "1fr", md: "auto 1fr auto" },
    gap: { xs: 2, md: 3 },
    alignItems: "center",
    py: 3.5,
    borderTop: `1px solid ${theme.palette.divider}`,
    "&:last-child": {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
  },
  logo: {
    width: { xs: 48, md: 56 },
    height: { xs: 48, md: 56 },
    objectFit: "contain",
    backgroundColor: theme.palette.background.paper,
    p: 0.5,
  },
  degreeText: {
    fontSize: { xs: "1.1rem", md: "1.2rem" },
    color: theme.palette.primary.main,
    mb: 0.5,
  },
  fieldText: {
    color: theme.palette.secondary.main,
    fontSize: "0.95rem",
    mb: 0.5,
  },
  institutionText: {
    color: theme.palette.text.secondary,
    fontSize: "0.95rem",
  },
  gradeText: {
    color: theme.palette.text.secondary,
    fontSize: "0.9rem",
    fontStyle: "italic",
    mt: 0.75,
  },
  dates: {
    textAlign: { xs: "left", md: "right" },
    color: theme.palette.text.secondary,
    fontSize: "0.9rem",
    whiteSpace: "nowrap",
  },
});

export default styles;
