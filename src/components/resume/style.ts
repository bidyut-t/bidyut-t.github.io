import { Theme } from "@mui/material";

const styles = (theme: Theme) => ({
  container: {
    padding: "4% 14%",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      padding: "4% 8%",
    },
  },
  title:{
    fontSize: theme.typography.h4.fontSize,
    textAlign: "left",
    marginBottom: theme.spacing(1), // from gutterBottom
  }
  
});
export default styles;
