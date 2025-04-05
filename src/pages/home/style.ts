import { Theme } from "@mui/material";

const styles = (theme: Theme) => ({
  container: {
    marginTop: theme.spacing(6),
    padding: "4% 6%",
  },
  overViewSection: {
    fontWeight: "800",
    padding: "4%",
    fontSize: "2.5rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.4rem",
    },
  },
  aboutSectionOne: {
    // backgroundImage: 'linear-gradient(to right, #161F2A , #e6e6e6)',
    alignItems: "left",
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(10)
    },
  },
  aboutSectionTwo: {
    // backgroundImage: 'linear-gradient(to right,#fff, #161F2A )',
    [theme.breakpoints.down("md")]: {
      backgroundImage: "linear-gradient(to right, #161F2A , #161F2A)",
      display: "none",
    },
  },
  aboutContainer: {
    padding: "6% 4%",
  },
  aboutTitle: {
    color: theme.palette.primary.main,
    fontWeight: 600,
    fontSize: "2.5rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.4rem",
    },
  },
  aboutSubtitle: {
    color: theme.palette.primary.main,
    marginTop: theme.spacing(3),
    fontSize: "1rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "0.8rem",
    },
  },
  aboutDescription: {
    color: theme.palette.primary.main,
    fontSize: "0.8rem",
    textAlign: "auto",
  },
  aboutImage: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  myImage: {
    maxWidth: "100%",
  },
  summary: {
    backgroundColor: theme.palette.primary.main,
  },
  summaryContainer: {
    padding: "4% 8%",
  },
  paddingContainer: {
    padding: "8%",
  },
  w100: {
    width: "100%",
  },
  mainSection: {
    minHeight: "50%",
  },

  imageDiv: {
    margin: "3% -50% 2% -10%",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      display:'none'
    },
  },
  imageContainer: {
    backgroundColor: theme.palette.tertiary.main,
    padding: "25px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  innerCircle: {
    backgroundColor: theme.palette.tertiary.light, 
    padding: "20px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "250px",
    height: "250px",
    borderRadius: "50%",
    objectFit: "cover",
  },
});
export default styles;
