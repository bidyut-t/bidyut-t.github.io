import { useState, useEffect, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Box,
  Button,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";

import { sections } from "../../contants";

const Header = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowHeader(
        lastScrollY.current > currentScrollY || currentScrollY < 10
      );
      lastScrollY.current = currentScrollY;

      sections.forEach((section, index) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveTab(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (section: string, index: number) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActiveTab(index);
    setMobileOpen(false);
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: showHeader ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      style={{ position: "fixed", width: "100%", top: 0, zIndex: 1000 }}
    >
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "rgba(243, 240, 234, 0.92)",
          backdropFilter: "blur(10px)",
          borderBottom: `1px solid ${theme.palette.divider}`,
          color: theme.palette.primary.main,
        }}
      >
        <Toolbar
          sx={{
            px: "var(--section-pad-x)",
            minHeight: { xs: 64, md: 72 },
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Typography
            component="button"
            onClick={() => scrollToSection(sections[0], 0)}
            sx={{
              fontFamily: "'Interval Pro Light', Georgia, serif",
              fontWeight: 400,
              fontSize: { xs: "1.15rem", md: "1.35rem" },
              letterSpacing: "-0.02em",
              color: theme.palette.primary.main,
              background: "none",
              border: "none",
              cursor: "pointer",
              p: 0,
              "&:hover": { color: theme.palette.secondary.main },
            }}
          >
            Bidyut Talukdar
          </Typography>

          {!isSmallDevice && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              {sections.map((section, index) => (
                <Button
                  key={section}
                  onClick={() => scrollToSection(section, index)}
                  sx={{
                    color:
                      activeTab === index
                        ? theme.palette.secondary.main
                        : theme.palette.text.secondary,
                    fontSize: "0.9rem",
                    px: 1.5,
                    minWidth: 0,
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: 12,
                      right: 12,
                      bottom: 6,
                      height: 2,
                      backgroundColor: theme.palette.secondary.main,
                      transform: activeTab === index ? "scaleX(1)" : "scaleX(0)",
                      transformOrigin: "left",
                      transition: "transform 0.25s ease",
                    },
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: theme.palette.secondary.main,
                    },
                  }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Button>
              ))}
            </Box>
          )}

          {isSmallDevice && (
            <IconButton
              color="inherit"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              sx={{ color: theme.palette.primary.main }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: "min(320px, 85vw)",
            backgroundColor: theme.palette.background.default,
            px: 1,
            pt: 1,
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
          <IconButton
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {sections.map((section, index) => (
            <ListItemButton
              key={section}
              onClick={() => scrollToSection(section, index)}
              selected={activeTab === index}
              sx={{
                borderRadius: 1,
                mb: 0.5,
                "&.Mui-selected": {
                  backgroundColor: theme.palette.tertiary.main,
                  color: theme.palette.secondary.main,
                },
              }}
            >
              <ListItemText
                primary={section.charAt(0).toUpperCase() + section.slice(1)}
                primaryTypographyProps={{
                  fontFamily: "'Interval Pro Regular', Georgia, serif",
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </motion.div>
  );
};

export default Header;
