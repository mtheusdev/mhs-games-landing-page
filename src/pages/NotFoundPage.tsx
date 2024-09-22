import { ArrowBack } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

export default function NotFoundPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h1">401</Typography>
      <Typography variant="h2">Página não encontrada</Typography>

      <Button
        startIcon={<ArrowBack />}
        variant="outlined"
        href="/"
        sx={{ my: 2 }}
      >
        Voltar para a Home
      </Button>
    </Box>
  );
}
