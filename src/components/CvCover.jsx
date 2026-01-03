import {
  Box,
  Paper,
  Typography,
  Grid,
  Divider,
  Stack,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function CvCover() {
  return (
    <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
      <Grid container spacing={4}>
        {/* COLUMNA IZQUIERDA */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              bgcolor: "#e3f2fd",
              p: 3,
              borderRadius: 2,
              height: "100%",
            }}
          >
            <Stack spacing={2} alignItems="center">
              <Box
                component="img"
                src="/foto.jpg"
                alt="Foto de perfil"
                sx={{
                  width: 140,
                  height: 140,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "4px solid #1976d2",
                }}
              />

              <Typography variant="h6" align="center">
                Jorge Patricio
                <br />
                Santamaría Cherrez
              </Typography>

              <Typography
                variant="body2"
                align="center"
                color="text.secondary"
              >
                Máster en Ingeniería de Software
                <br />
                y Sistemas Informáticos
              </Typography>

              <Divider flexItem />

              <Stack spacing={1} width="100%">
                <Stack direction="row" spacing={1} alignItems="center">
                  <EmailIcon fontSize="small" />
                  <Typography variant="body2">
                    patricio_jorge@hotmail.es
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center">
                  <WhatsAppIcon fontSize="small" />
                  <Typography variant="body2">
                    0997979099
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center">
                  <LocationOnIcon fontSize="small" />
                  <Typography variant="body2">
                    Ambato
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Grid>

        {/* COLUMNA DERECHA */}
        <Grid item xs={12} md={8}>
          <Typography variant="h5" gutterBottom>
            Áreas de Conocimiento
          </Typography>

          <Divider sx={{ mb: 2 }} />

          <Stack spacing={2}>
            <Typography>
              <strong>Desarrollo Web Full Stack:</strong> PHP, JavaScript,
              React, Java, MySQL, Postman, Vercel, Spring Boot
            </Typography>

            <Typography>
              <strong>Ciberseguridad Web:</strong> OWASP Top 10, seguridad en
              aplicaciones, protección de datos, OWASP ZAP, Wireshark, Burp
              Suite, Nmap, Fortify
            </Typography>

            <Typography>
              <strong>Metodologías Ágiles:</strong> Scrum
            </Typography>

            <Typography>
              <strong>Bases de Datos:</strong> MySQL, PostgreSQL,
              Elasticsearch, MongoDB
            </Typography>

            <Typography>
              <strong>Inteligencia Artificial:</strong> Python, aprendizaje
              automático, procesamiento de datos
            </Typography>

            <Typography>
              <strong>Linux:</strong> Administración de sistemas
            </Typography>
          </Stack>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h5" gutterBottom>
            Formación Académica
          </Typography>

          <Stack spacing={2}>
            <Box>
              <Typography fontWeight={600}>
                Universidad Internacional de La Rioja (UNIR)
              </Typography>
              <Typography variant="body2">
                Maestría en Ingeniería de Software y Sistemas Informáticos
              </Typography>
              <Typography variant="caption">
                mar. 2023 – abr. 2024
              </Typography>
            </Box>

            <Box>
              <Typography fontWeight={600}>
                Universidad Indoamérica
              </Typography>
              <Typography variant="body2">
                Grado en Ingeniería de Sistemas
              </Typography>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
                }
