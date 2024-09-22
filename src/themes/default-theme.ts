import { Theme, ThemeOptions } from "@mui/material/styles";

const themeOptions: (theme: Theme) => ThemeOptions = () => {
  return {
    shape: {
      // borderRadius: 10,
    },
    palette: {
      primary: {
        main: "#F4F3F9",
      },
      secondary: {
        main: "#FFC107",
      },
      error: {
        main: "#F44336",
      },
      warning: {
        main: "#FF9800",
      },
      info: {
        main: "#2196F3",
      },
      success: {
        main: "#4CAF50",
      },
      text: {
        primary: "#333",
        secondary: "#666",
        disabled: "#999",
      },
      background: {
        default: "#fff",
        paper: "#fff",
      },
      divider: "#eee",
    },
    typography: {
      fontFamily: "Poppins",
    },
  };
};
export default themeOptions;
