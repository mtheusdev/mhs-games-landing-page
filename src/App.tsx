import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { lightTheme } from "./providers/material-ui";
import AppRoutes from "./routes/app.routes";

function App() {
  const { router } = AppRoutes();

  return (
    <ThemeProvider theme={lightTheme}>
      <RouterProvider router={router} />
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
