import {
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material";

const ResumeDownloadButton = () => {
  const theme = useTheme();

  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: theme.palette.tertiary.main,
        color: theme.palette.primary.main,
        px: 4,
        py: 1.5,
        borderRadius: 2,
        fontSize: "1rem",
        animation: "breath 3s ease-in-out infinite",
        "@keyframes breath": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
      }}
    >
      Resume
    </Button>
  );
};

export default ResumeDownloadButton;
