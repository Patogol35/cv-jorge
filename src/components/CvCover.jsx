import {
  Box,
  Paper,
  Typography,
  Grid,
  Divider,
  Stack,
  Avatar,
  Chip,
  IconButton,
  Tooltip,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SchoolIcon from "@mui/icons-material/School";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import QRCode from "qrcode.react";

const cvUrl = "https://jorge-santamaria.dev/cv";

const SkillChip = ({ label }) => (
  <Chip
    label={label}
    size="small"
    sx={{
      bgcolor: "primary.main",
      color: "#fff",
      fontWeight: 500,
    }}
  />
);

export default function CvCover() {
  return (
    <Paper elevation={6} sx={{ borderRadius: 4, overflow: "hidden" }}>
      <Grid container minHeight="100vh">
        {/* SIDEBAR */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            background: "linear-gradient(180deg, #0d47a1, #1976d2)",
            color: "#fff",
            p: 4,
          }}
        >
          <Stack spacing={3} alignItems="center">
            <Avatar
              src="/foto.jpg"
              sx={{
                width: 150,
                height: 150,
                border: "4px solid #fff",
              }}
            />

            <Box textAlign="center">
              <Typography variant="h5" fontWeight={700}>
                Jorge Patricio
              </Typography>
              <Typography variant="h6" fontWeight={700}>
                Santamaría Cherrez
              </Typography>

              <Typography variant="body2" sx={{ opacity: 0.9, mt: 1 }}>
                Máster en Ingeniería de Software <br />
                y Sistemas Informáticos
              </Typography>
            </Box>

            <Divider flexItem sx={{ borderColor: "rgba(255,255,255,.3)" }} />

            {/* CONTACTO */}
            <Stack spacing={1} width="100%">
              <Stack direction="row" spacing={1} alignItems="center">
                <EmailIcon fontSize="small" />
                <Typography variant="body2">
                  patricio_jorge@hotmail.es
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1} alignItems="center">
                <WhatsAppIcon fontSize="small" />
                <Typography variant="body2">0997979099</Typography>
              </Stack>

              <Stack direction="row" spacing={1} alignItems="center">
                <LocationOnIcon fontSize="small" />
                <Typography variant="body2">Ambato</Typography>
              </Stack>
            </Stack>

            {/* REDES SOCIALES */}
            <Divider flexItem sx={{ borderColor: "rgba(255,255,255,.3)" }} />

            <Stack direction="row" spacing={1}>
              <Tooltip title="LinkedIn">
                <IconButton
                  href="https://linkedin.com/in/jorge-santamaria"
                  target="_blank"
                  sx={{ color: "#fff" }}
                >
                  <LinkedInIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Facebook">
                <IconButton
                  href="https://facebook.com/jorge.santamaria"
                  target="_blank"
                  sx={{ color: "#fff" }}
                >
                  <FacebookIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Instagram">
                <IconButton
                  href="https://instagram.com/jorge.dev"
                  target="_blank"
                  sx={{ color: "#fff" }}
                >
                  <InstagramIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="GitHub">
                <IconButton
                  href="https://github.com/jorge-santamaria"
                  target="_blank"
                  sx={{ color: "#fff" }}
                >
                  <GitHubIcon />
                </IconButton>
              </Tooltip>
            </Stack>

            {/* QR */}
            <Box
              sx={{
                mt: 2,
                bgcolor: "#fff",
                p: 1,
                borderRadius: 2,
              }}
            >
              <QRCode value={cvUrl} size={120} />
              <Typography
                variant="caption"
                color="text.secondary"
                display="block"
                align="center"
                mt={1}
              >
                Escanea para ver CV online
              </Typography>
            </Box>
          </Stack>
        </Grid>

        {/* CONTENIDO */}
        <Grid item xs={12} md={8} sx={{ p: 5, bgcolor: "#f9fafb" }}>
          {/* ÁREAS */}
          <Box mb={4}>
            <Typography variant="h5" fontWeight={700} gutterBottom>
              Áreas de Conocimiento
            </Typography>
            <Divider sx={{ mb: 2 }} />

            <Stack spacing={3}>
              <Box>
                <Typography fontWeight={600}>
                  Desarrollo Web Full Stack
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" mt={1}>
                  {[
                    "PHP",
                    "JavaScript",
                    "React",
                    "Java",
                    "MySQL",
                    "Postman",
                    "Vercel",
                    "Spring Boot",
                  ].map((s) => (
                    <SkillChip key={s} label={s} />
                  ))}
                </Stack>
              </Box>

              <Box>
                <Typography fontWeight={600}>
                  Ciberseguridad Web
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  OWASP Top 10, OWASP ZAP, Wireshark, Burp Suite, Nmap, Fortify
                </Typography>
              </Box>

              <Box>
                <Typography fontWeight={600}>Bases de Datos</Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" mt={1}>
                  {["MySQL", "PostgreSQL", "MongoDB", "Elasticsearch"].map(
                    (s) => (
                      <SkillChip key={s} label={s} />
                    )
                  )}
                </Stack>
              </Box>
            </Stack>
          </Box>

          {/* FORMACIÓN */}
          <Box>
            <Typography variant="h5" fontWeight={700} gutterBottom>
              Formación Académica
            </Typography>
            <Divider sx={{ mb: 2 }} />

            <Stack spacing={3}>
              <Box display="flex" gap={2}>
                <SchoolIcon color="primary" />
                <Box>
                  <Typography fontWeight={600}>
                    Universidad Internacional de La Rioja (UNIR)
                  </Typography>
                  <Typography variant="body2">
                    Maestría en Ingeniería de Software y Sistemas Informáticos
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    mar. 2023 – abr. 2024
                  </Typography>
                </Box>
              </Box>

              <Box display="flex" gap={2}>
                <SchoolIcon color="primary" />
                <Box>
                  <Typography fontWeight={600}>
                    Universidad Indoamérica
                  </Typography>
                  <Typography variant="body2">
                    Ingeniería de Sistemas
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
