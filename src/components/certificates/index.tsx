import { Card, CardContent, Typography, Link } from "@mui/material";
import { motion } from "framer-motion";
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

const CertificateCard: React.FC<CertificateCardProps>  = ({ cert, index }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      key={index}
    >
      <Card elevation={3}>
        <CardContent>
          <img
            src={cert.logo}
            alt={cert.organization}
            style={{
              height: "70px",
              width: "70px",
              marginBottom: "10px",
              objectFit: "contain",
            }}
          />
          <Typography variant="h6" gutterBottom>
            {cert.title}
          </Typography>
          <Typography variant="body2">Date: {cert.date}</Typography>
          {cert.credentialId && (
            <Typography variant="body2">
              Credential ID: {cert.credentialId}
            </Typography>
          )}
          <Link
            href={cert.link}
            color="primary"
            underline="hover"
            style={{ marginTop: "0.5rem", display: "block" }}
          >
            View Certificate
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CertificateCard;
