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
      main: "#161F2A",
    },
    secondary: {
      main: "#3D155F",
    },
    tertiary: {
      main: "#CCF381",
      light: "#f3fbdb",
    },
  },
  typography: {
    h1: {
      fontSize: "2.5rem",
    },
    fontFamily: ["Interval Pro Regular", "sans-serif"].join(","),
  },
  grid: {
    fontFamily: ["Interval Pro Regular", "sans-serif"].join(","),
  },
  effects: {
    boxShadow: "0 1px 4px #0000001f !important",
    textShadow: "0 1px 1px #0000001f",
    transition: "all .25s cubic-bezier(0.4, 0, 0.2, 1) !important",
  },
});

export default theme;
