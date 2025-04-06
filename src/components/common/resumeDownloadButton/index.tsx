import { Button } from "@mui/material";
import { useTheme } from "@mui/material";

const ResumeDownloadButton = () => {
  const theme = useTheme();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/pdf/resume.pdf";
    link.download = "Bidyut Resume.pdf";
    link.target = "_blank";
    link.click();
  };

  return (
    <Button
      variant="contained"
      onClick={handleDownload}
      sx={{
        backgroundColor: theme.palette.tertiary.dark,
        color: "white",
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
