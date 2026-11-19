import { Button } from "@mui/material";
import { useTheme } from "@mui/material";
import { motion } from "framer-motion";

interface ResumeDownloadButtonProps {
  light?: boolean;
}

const ResumeDownloadButton = ({ light = false }: ResumeDownloadButtonProps) => {
  const theme = useTheme();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "./pdf/resume.pdf";
    link.download = "Bidyut Resume.pdf";
    link.target = "_blank";
    link.click();
  };

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      style={{ display: "inline-block" }}
    >
      <Button
        variant="contained"
        onClick={handleDownload}
        sx={{
          backgroundColor: light
            ? theme.palette.background.paper
            : theme.palette.secondary.main,
          color: light ? theme.palette.primary.main : "#FFFFFF",
          px: 3.5,
          py: 1.25,
          borderRadius: 1,
          fontSize: "0.95rem",
          letterSpacing: "0.04em",
          border: light
            ? `1px solid ${theme.palette.background.paper}`
            : "1px solid transparent",
          "&:hover": {
            backgroundColor: light
              ? theme.palette.tertiary.main
              : theme.palette.secondary.dark,
          },
        }}
      >
        Download Resume
      </Button>
    </motion.div>
  );
};

export default ResumeDownloadButton;
