import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
const Header = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("md"));

  let lastScrollY = 0;

  const sections = [
    "home",
    "about",
    "skills",
    "projects",
    "certificates",
    "contact",
  ];

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setShowHeader(lastScrollY > currentScrollY || currentScrollY < 10);
    lastScrollY = currentScrollY;

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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
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
        sx={{
          backgroundColor: "white",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
        elevation={0}
      >
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginLeft: "8rem",
            marginRight: "8rem",
          }}
        >
          <Typography variant="h5" color="primary" sx={{ fontWeight: "400" }}>
            Bidyut Talukdar
          </Typography>
          {!isSmallDevice && (
            <div className="hidden md:flex">
              <Tabs
                value={activeTab}
                // onChange={(newValue) => setActiveTab(newValue)}
                textColor="primary"
                indicatorColor="primary"
              >
                {sections.map((section, index) => (
                  <Tab
                    key={index}
                    label={section.charAt(0).toUpperCase() + section.slice(1)}
                  />
                ))}
              </Tabs>
            </div>
          )}

          {isSmallDevice && (
            <div className="flex md:hidden">
              <IconButton color="primary" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
      {isSmallDevice && (
        <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
          <List>
            {sections.map((section, index) => (
              <ListItem
                component="button"
                key={section}
                onClick={() => {
                  setActiveTab(index);
                  setMobileOpen(false);
                }}
                sx={{ textAlign: "left" }} // Optional: Ensures left-aligned text inside button
              >
                <ListItemText
                  primary={section.charAt(0).toUpperCase() + section.slice(1)}
                />
              </ListItem>
            ))}
          </List>
        </Drawer>
      )}
    </motion.div>
  );
};

export default Header;
