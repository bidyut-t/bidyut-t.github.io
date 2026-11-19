import { Theme } from "@mui/material";

const styles = (theme: Theme) => ({
  page: {
    width: "100%",
    overflowX: "hidden",
  },
  hero: {
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    alignItems: "stretch",
    backgroundColor: theme.palette.background.default,
    backgroundImage:
      "radial-gradient(ellipse 80% 60% at 70% 20%, rgba(15, 110, 106, 0.08), transparent 55%), radial-gradient(ellipse 50% 40% at 10% 80%, rgba(232, 228, 220, 0.9), transparent 50%)",
    pt: { xs: 10, md: 0 },
  },
  heroInner: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: { xs: "1fr", md: "1.05fr 0.95fr" },
    minHeight: { xs: "auto", md: "100vh" },
  },
  heroContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    px: "var(--section-pad-x)",
    py: { xs: 5, md: 8 },
    gap: { xs: 2, md: 2.25 },
    maxWidth: { md: 640 },
  },
  brandName: {
    fontFamily: "'Interval Pro Light', Georgia, serif",
    fontSize: { xs: "2.6rem", sm: "3.25rem", md: "3.75rem", lg: "4.25rem" },
    fontWeight: 400,
    lineHeight: 1.02,
    letterSpacing: "-0.03em",
    color: theme.palette.primary.main,
    m: 0,
  },
  roleLine: {
    fontSize: { xs: "1.1rem", md: "1.25rem" },
    color: theme.palette.text.secondary,
    fontWeight: 400,
    letterSpacing: "0.01em",
    "& span": {
      color: theme.palette.secondary.main,
    },
  },
  contactRow: {
    mt: 0.5,
    gap: 1,
  },
  contactItem: {
    color: theme.palette.text.secondary,
    fontSize: "0.95rem",
    "& .MuiSvgIcon-root": {
      fontSize: "1.1rem",
      color: theme.palette.secondary.main,
    },
  },
  ctaRow: {
    mt: 2,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: 1.5,
  },
  socialButton: {
    color: theme.palette.primary.main,
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: 1,
    "&:hover": {
      backgroundColor: theme.palette.tertiary.main,
      borderColor: theme.palette.secondary.main,
      color: theme.palette.secondary.main,
    },
  },
  heroVisual: {
    display: { xs: "none", md: "block" },
    position: "relative",
    minHeight: { md: "100%" },
    overflow: "hidden",
    backgroundColor: theme.palette.background.default,
    pt: { md: 9 },
  },
  heroImage: {
    width: "100%",
    height: { xs: "100%", md: "calc(100% - 72px)" },
    objectFit: "cover",
    objectPosition: "center top",
    display: "block",
    position: { xs: "relative", md: "absolute" },
    top: { md: 72 },
    left: { md: 0 },
    right: { md: 0 },
    bottom: { md: 0 },
    minHeight: { xs: 360, sm: 440, md: "auto" },
  },
  about: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    px: "var(--section-pad-x)",
    py: "var(--section-pad-y)",
  },
  aboutLayout: {
    display: "grid",
    gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1.05fr) minmax(0, 0.95fr)" },
    gap: { xs: 4, md: 5 },
    alignItems: "center",
  },
  aboutCopy: {
    minWidth: 0,
  },
  aboutGame: {
    display: "flex",
    justifyContent: { xs: "stretch", md: "stretch" },
    alignItems: "center",
    minWidth: 0,
    width: "100%",
  },
  aboutTitle: {
    fontFamily: "'Interval Pro Light', Georgia, serif",
    fontSize: { xs: "2rem", md: "2.75rem" },
    color: "#FAF8F4",
    mb: 3,
    maxWidth: 520,
  },
  aboutBody: {
    color: "rgba(250, 248, 244, 0.82)",
    fontSize: { xs: "1rem", md: "1.1rem" },
    lineHeight: 1.75,
    maxWidth: 640,
    m: 0,
    mb: 2,
  },
  aboutCta: {
    mt: 4,
  },
  section: {
    px: "var(--section-pad-x)",
    py: "var(--section-pad-y)",
  },
  sectionTitle: {
    fontFamily: "'Interval Pro Light', Georgia, serif",
    fontSize: { xs: "1.85rem", md: "2.35rem" },
    mb: 5,
    color: theme.palette.primary.main,
  },
});

export default styles;
