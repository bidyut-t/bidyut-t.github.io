import { Box, Typography, Link, useTheme } from "@mui/material";

interface Certificate {
  title: string;
  date: string;
  credentialId?: string;
  organization: string;
  logo?: string;
  link?: string;
}

interface CertificateCardProps {
  cert: Certificate;
  index: number;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ cert }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 1.5,
        py: 2.5,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Box
        component="img"
        src={cert.logo}
        alt=""
        sx={{
          height: 48,
          width: 48,
          objectFit: "contain",
        }}
      />
      <Typography
        sx={{
          fontSize: "1.05rem",
          color: theme.palette.primary.main,
          lineHeight: 1.35,
        }}
      >
        {cert.title}
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: theme.palette.text.secondary }}
      >
        {cert.organization} · {cert.date}
      </Typography>
      {cert.credentialId ? (
        <Typography
          variant="body2"
          sx={{ color: theme.palette.text.secondary, wordBreak: "break-all" }}
        >
          Credential ID: {cert.credentialId}
        </Typography>
      ) : null}
      {cert.link ? (
        <Link
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
          sx={{
            mt: "auto",
            pt: 1,
            color: theme.palette.secondary.main,
            fontSize: "0.9rem",
          }}
        >
          View Certificate
        </Link>
      ) : null}
    </Box>
  );
};

export default CertificateCard;
