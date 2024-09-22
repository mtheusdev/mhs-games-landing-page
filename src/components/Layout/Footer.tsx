import { Box, Container, Link, Typography } from "@mui/material";
import PlayStoreSvg from "../../assets/googleplay.png";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "200px",
        backgroundColor: "primary.main",
        boxShadow: 2,
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography>
            © 2023 MHS Tecnologia. Todos os direitos reservados.
          </Typography>
          <Link
            target="_blank"
            href="https://play.google.com/store/apps/dev?id=7748561045371711792"
            sx={{
              ":hover": {
                transform: "scale(1.05)",
                transition: "all 0.2s",
              },
            }}
          >
            <img
              src={PlayStoreSvg}
              style={{
                width: "180px",
                height: "auto",
              }}
            />
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
