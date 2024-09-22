import { Box, Typography } from "@mui/material";
import Lottie from "lottie-react";
import developmentAnimation from "./../assets/animations/development.json";

export default function HomePage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          mt: 10,
        }}
        variant="h3"
      >
        Página em desenvolvimento
      </Typography>
      <Box
        sx={{
          width: "100%",
          maxWidth: 600,
        }}
      >
        <Lottie animationData={developmentAnimation} loop={true} />
      </Box>
    </Box>
  );
}
