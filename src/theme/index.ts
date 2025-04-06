import { createTheme } from "@mui/material/styles";
import { PaletteColor, PaletteColorOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    tertiary: PaletteColor;
  }
  interface PaletteOptions {
    tertiary?: PaletteColorOptions;
  }
  interface Theme {
    grid: {
      fontFamily: string;
    };
    effects: {
      boxShadow: string;
      textShadow: string;
      transition: string;
    };
  }
  interface ThemeOptions {
    grid?: {
      fontFamily: string;
    };
    effects?: {
      boxShadow: string;
      textShadow: string;
      transition: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#1E1E2F",     // Deep tech navy
      light: "#2E2E42",    // Slightly lighter for subtle contrast
    },
    secondary: {
      main: "#6C63FF",     // AI-like calming purple
      light: "#D1D0FF",    // Soft lavender for hover backgrounds
    },
    tertiary: {
      main: "#A0E7E5",     // Friendly, minty accent
      light: "#E0FCFB",    // Background hover/glow
      dark:"#20b2aa"
    },
    background: {
      default: "#F8FAFC",  // Light gray background
      paper: "#FFFFFF",    // White cards
    },
  },
  typography: {
    h1: {
      fontSize: "2.5rem",
    },
    fontFamily: ["'Inter'", "sans-serif"].join(","),
  },
  grid: {
    fontFamily: ["'Inter'", "sans-serif"].join(","),
  },
  effects: {
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.04) !important",
    textShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
    transition: "all 0.3s ease-in-out !important",
  },
});

export default theme;
