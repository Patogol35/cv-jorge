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

const cvUrl = "https://jorge-santamaria.dev/cv";

const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=${encodeURIComponent(
  cvUrl
)}`;

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
            background:
              "linear-gradient(180deg, #0d47a1 0%, #1565c0 100%)",
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
                boxShadow: "0 8px 24px rgba(0,0,0,.25)",
              }}
            />

            <Box textAlign="center">
              <Typography variant="h5" fontWeight={700}>
                Jorge Patricio
              </Typography>
              <Typography
                variant="h6"
                fontWeight={700}
                sx={{ letterSpacing: 0.4 }}
              >
                Santamaría Cherrez
              </Typography>

              <Typography
                variant="body2"
                sx={{ opacity: 0.9, mt: 1, lineHeight: 1.5 }}
              >
                Máster en Ingeniería de Software <br />
                y Sistemas Informáticos
              </Typography>
            </Box>

            <Divider flexItem sx={{ borderColor: "rgba(255,255,255,.3)" }} />

            {/* CONTACTO */}
            <Stack spacing={1.2} width="100%">
              {[
                { icon: <EmailIcon fontSize="small" />, text: "patricio_jorge@hotmail.es" },
                { icon: <WhatsAppIcon fontSize="small" />, text: "0997979099" },
                { icon: <LocationOnIcon fontSize="small" />, text: "Ambato" },
              ].map((item, i) => (
                <Stack key={i} direction="row" spacing={1.2} alignItems="center">
                  {item.icon}
                  <Typography variant="body2">{item.text}</Typography>
                </Stack>
              ))}
            </Stack>

            {/* REDES SOCIALES */}
            <Divider flexItem sx={{ borderColor: "rgba(255,255,255,.3)" }} />

            <Stack direction="row" spacing={1}>
              {[
                { icon: <LinkedInIcon />, url: "https://linkedin.com/in/jorge-santamaria", label: "LinkedIn" },
                { icon: <FacebookIcon />, url: "https://facebook.com/jorge.santamaria", label: "Facebook" },
                { icon: <InstagramIcon />, url: "https://instagram.com/jorge.dev", label: "Instagram" },
                { icon: <GitHubIcon />, url: "https://github.com/jorge-santamaria", label: "GitHub" },
              ].map((item, i) => (
                <Tooltip key={i} title={item.label}>
                  <IconButton
                    href={item.url}
                    target="_blank"
                    sx={{
                      color: "#fff",
                      transition: "transform .2s, background-color .2s",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        bgcolor: "rgba(255,255,255,.15)",
                      },
                    }}
                  >
                    {item.icon}
                  </IconButton>
                </Tooltip>
              ))}
            </Stack>

            {/* QR */}
            <Box
              sx={{
                mt: 2,
                bgcolor: "#fff",
                p: 1,
                borderRadius: 2,
                boxShadow: "0 6px 20px rgba(0,0,0,.25)",
              }}
            >
              <Box
                component="img"
                src={qrSrc}
                alt="QR CV"
                sx={{ width: 140, height: 140 }}
              />
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
          <Typography variant="h5" fontWeight={700} gutterBottom>
            Áreas de Conocimiento
          </Typography>
          <Divider sx={{ mb: 2 }} />

          <Typography variant="body2" color="text.secondary" lineHeight={1.8}>
            Desarrollo Web Full Stack · Ciberseguridad · Bases de Datos ·
            Inteligencia Artificial · Linux
          </Typography>

          <Divider sx={{ my: 4 }} />

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
        </Grid>
      </Grid>
    </Paper>
  );
}
