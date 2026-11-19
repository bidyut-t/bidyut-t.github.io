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

const fontBody = "'Interval Pro Regular', 'Georgia', serif";
const fontLight = "'Interval Pro Light', 'Georgia', serif";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1A1A1A",
      light: "#3D3D3D",
      dark: "#0D0D0D",
      contrastText: "#F3F0EA",
    },
    secondary: {
      main: "#0F6E6A",
      light: "#1A8F8A",
      dark: "#0A4F4C",
      contrastText: "#FFFFFF",
    },
    tertiary: {
      main: "#E8E4DC",
      light: "#F3F0EA",
      dark: "#0F6E6A",
    },
    background: {
      default: "#F3F0EA",
      paper: "#FAF8F4",
    },
    text: {
      primary: "#1A1A1A",
      secondary: "#5C5A56",
    },
    divider: "rgba(26, 26, 26, 0.12)",
  },
  typography: {
    fontFamily: fontBody,
    h1: {
      fontFamily: fontLight,
      fontSize: "clamp(2.75rem, 6vw, 4.5rem)",
      fontWeight: 400,
      lineHeight: 1.05,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontFamily: fontLight,
      fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
      fontWeight: 400,
      lineHeight: 1.2,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontFamily: fontBody,
      fontSize: "1.5rem",
      fontWeight: 400,
      lineHeight: 1.3,
    },
    h4: {
      fontFamily: fontBody,
      fontSize: "1.35rem",
      fontWeight: 400,
      lineHeight: 1.35,
    },
    h5: {
      fontFamily: fontBody,
      fontSize: "1.15rem",
      fontWeight: 400,
    },
    h6: {
      fontFamily: fontBody,
      fontSize: "1rem",
      fontWeight: 400,
    },
    body1: {
      fontSize: "1.05rem",
      lineHeight: 1.7,
    },
    body2: {
      fontSize: "0.95rem",
      lineHeight: 1.6,
    },
    button: {
      fontFamily: fontBody,
      textTransform: "none",
      fontWeight: 400,
      letterSpacing: "0.02em",
    },
    overline: {
      fontFamily: fontBody,
      letterSpacing: "0.14em",
      fontSize: "0.75rem",
      textTransform: "uppercase",
    },
  },
  shape: {
    borderRadius: 4,
  },
  grid: {
    fontFamily: fontBody,
  },
  effects: {
    boxShadow: "none",
    textShadow: "none",
    transition: "color 0.25s ease, background-color 0.25s ease, border-color 0.25s ease",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#F3F0EA",
          color: "#1A1A1A",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
        containedSecondary: {
          backgroundColor: "#0F6E6A",
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#0A4F4C",
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#0F6E6A",
        },
      },
    },
  },
});

export default theme;
