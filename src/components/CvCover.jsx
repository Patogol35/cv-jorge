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

/* =========================
SKILL CHIP
========================= */
const SkillChip = ({ label }) => (
  <Chip
    label={label}
    size="small"
    sx={{
      bgcolor: "rgba(25,118,210,.12)",
      color: "primary.main",
      fontWeight: 600,
      borderRadius: 1.5,
    }}
  />
);

export default function CvCover() {
  return (
    <Paper
      elevation={10}
      sx={{
        borderRadius: 4,
        overflow: "hidden",
        maxWidth: 1200,
        mx: "auto",
      }}
    >
      <Grid container minHeight="100vh">

        {/* ================= SIDEBAR ================= */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            background:
              "linear-gradient(160deg, #0d47a1 0%, #1976d2 50%, #42a5f5 100%)",
            color: "#fff",
            p: 4,
          }}
        >
          <Stack spacing={3} alignItems="center">

            {/* AVATAR CON HALO */}
            <Box
              sx={{
                p: 0.5,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(255,255,255,.9), rgba(255,255,255,.1))",
                boxShadow: "0 0 30px rgba(255,255,255,.5)",
              }}
            >
              <Avatar
                src="/foto.jpg"
                sx={{
                  width: 150,
                  height: 150,
                  border: "4px solid #fff",
                }}
              />
            </Box>

            {/* NOMBRE */}
            <Box textAlign="center">
              <Typography variant="h5" fontWeight={800}>
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
              <ContactItem icon={<EmailIcon />} text="patricio_jorge@hotmail.es" />
              <ContactItem icon={<WhatsAppIcon />} text="0997979099" />
              <ContactItem icon={<LocationOnIcon />} text="Ambato, Ecuador" />
            </Stack>

            <Divider flexItem sx={{ borderColor: "rgba(255,255,255,.3)" }} />

            {/* REDES */}
            <Stack direction="row" spacing={1}>
              <Social icon={<LinkedInIcon />} url="https://linkedin.com/in/jorge-santamaria" />
              <Social icon={<FacebookIcon />} url="https://facebook.com/jorge.santamaria" />
              <Social icon={<InstagramIcon />} url="https://instagram.com/jorge.dev" />
              <Social icon={<GitHubIcon />} url="https://github.com/jorge-santamaria" />
            </Stack>

            {/* QR SIN LIBRERÍA */}
            <Box
              sx={{
                mt: 2,
                bgcolor: "#fff",
                p: 1.5,
                borderRadius: 2,
              }}
            >
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(
                  cvUrl
                )}`}
                alt="QR CV"
                width={120}
                height={120}
              />
              <Typography
                variant="caption"
                color="text.secondary"
                display="block"
                align="center"
                mt={1}
              >
                CV Online
              </Typography>
            </Box>
          </Stack>
        </Grid>

        {/* ================= CONTENIDO ================= */}
        <Grid item xs={12} md={8} sx={{ p: 5, bgcolor: "#f5f7fa" }}>

          {/* ÁREAS */}
          <Section title="Áreas de Conocimiento">
            <CardBlock title="Desarrollo Web Full Stack">
              {[
                "PHP",
                "JavaScript",
                "React",
                "Java",
                "Spring Boot",
                "MySQL",
                "Postman",
                "Vercel",
              ].map((s) => (
                <SkillChip key={s} label={s} />
              ))}
            </CardBlock>

            <CardBlock title="Ciberseguridad Web">
              <Typography variant="body2" color="text.secondary">
                OWASP Top 10 · ZAP · Wireshark · Burp Suite · Nmap · Fortify
              </Typography>
            </CardBlock>

            <CardBlock title="Bases de Datos">
              {["MySQL", "PostgreSQL", "MongoDB", "Elasticsearch"].map((s) => (
                <SkillChip key={s} label={s} />
              ))}
            </CardBlock>
          </Section>

          {/* FORMACIÓN */}
          <Section title="Formación Académica">
            <TimelineItem
              title="Universidad Internacional de La Rioja (UNIR)"
              subtitle="Maestría en Ingeniería de Software y Sistemas Informáticos"
              date="mar. 2023 – abr. 2024"
            />
            <TimelineItem
              title="Universidad Indoamérica"
              subtitle="Ingeniería de Sistemas"
            />
          </Section>
        </Grid>
      </Grid>
    </Paper>
  );
}

/* =========================
SUB COMPONENTS
========================= */

const ContactItem = ({ icon, text }) => (
  <Stack direction="row" spacing={1} alignItems="center">
    {icon}
    <Typography variant="body2">{text}</Typography>
  </Stack>
);

const Social = ({ icon, url }) => (
  <Tooltip title={url}>
    <IconButton href={url} target="_blank" sx={{ color: "#fff" }}>
      {icon}
    </IconButton>
  </Tooltip>
);

const Section = ({ title, children }) => (
  <Box mb={5}>
    <Typography variant="h5" fontWeight={800} gutterBottom>
      {title}
    </Typography>
    <Divider sx={{ mb: 3 }} />
    <Stack spacing={3}>{children}</Stack>
  </Box>
);

const CardBlock = ({ title, children }) => (
  <Paper
    elevation={3}
    sx={{
      p: 3,
      borderRadius: 3,
      bgcolor: "#fff",
    }}
  >
    <Typography fontWeight={700} mb={1}>
      {title}
    </Typography>
    <Stack direction="row" spacing={1} flexWrap="wrap">
      {children}
    </Stack>
  </Paper>
);

const TimelineItem = ({ title, subtitle, date }) => (
  <Box display="flex" gap={2}>
    <SchoolIcon color="primary" />
    <Box>
      <Typography fontWeight={700}>{title}</Typography>
      <Typography variant="body2">{subtitle}</Typography>
      {date && (
        <Typography variant="caption" color="text.secondary">
          {date}
        </Typography>
      )}
    </Box>
  </Box>
);
