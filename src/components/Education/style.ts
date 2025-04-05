import { Theme } from "@mui/material";

const styles = (theme: Theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: "4rem",
    marginTop: theme.spacing(6),
    [theme.breakpoints.down("md")]: {
      padding: "2rem",
    },
  },
  card: {
    display: "flex",
    flexDirection: "column", // default (xs)
    width: "100%",
    maxWidth: "800px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    borderRadius: "16px",

    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  cardContent: {
    display: "flex",
    alignItems: "center",
    gap: 2,
  },
  rightSection: {
    marginLeft: "auto",
    alignItems: "center",
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: theme.palette.primary.main,

    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  degreeText: {
    fontWeight: "bold",
  },
  fieldText: {
    fontWeight: 600,
  },
  institutionText: {
    color: theme.palette.text.secondary,
  },
  verticalDivider: {
    borderLeft: `2px solid ${theme.palette.primary.main}`,
    height: "40px",
  },
});

export default styles;
