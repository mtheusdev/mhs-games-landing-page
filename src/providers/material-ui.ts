import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import themeOptions from "../themes/default-theme";

let lightTheme = createTheme();

lightTheme = createTheme(themeOptions(lightTheme));
lightTheme = responsiveFontSizes(lightTheme);

export { lightTheme };
