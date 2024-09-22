import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Layout() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Container
        maxWidth="xl"
        sx={{
          flexGrow: 1,
        }}
      >
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
}

export default Layout;
