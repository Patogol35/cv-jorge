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
import WorkIcon from "@mui/icons-material/Work";

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

            {/* AVATAR */}
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
                src="https://res.cloudinary.com/dqkwc0kf7/image/upload/v1757093856/FB_IMG_1757092624480_hgpu4i.jpg"
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
              <ContactItem
                icon={<EmailIcon />}
                text={
                  <a
                    href="mailto:patogol3535@gmail.com"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    patogol3535@gmail.com
                  </a>
                }
              />
              <ContactItem icon={<WhatsAppIcon />} text="0997979099" />
              <ContactItem icon={<LocationOnIcon />} text="Ambato, Ecuador" />
            </Stack>

            <Divider flexItem sx={{ borderColor: "rgba(255,255,255,.3)" }} />

            {/* REDES */}
            <Stack direction="row" spacing={1}>
              <Social
                icon={<GitHubIcon />}
                url="https://github.com/Patogol35"
              />
              <Social
                icon={<LinkedInIcon />}
                url="https://www.linkedin.com/in/jorge-patricio-santamaría-cherrez-2a73792b2"
              />
              <Social
                icon={<FacebookIcon />}
                url="https://www.facebook.com/share/1CGkkdhgz8/"
              />
              <Social
                icon={<InstagramIcon />}
                url="https://www.instagram.com/jorge_patricio_26"
              />
            </Stack>
          </Stack>
        </Grid>

        {/* ================= CONTENIDO ================= */}
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            px: { xs: 3, md: 4 },
            py: { xs: 4, md: 5 },
            bgcolor: "#f5f7fa",
          }}
        >

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

            <CardBlock title="Cloud">
              {["Vercel", "Render", "AWS"].map((s) => (
                <SkillChip key={s} label={s} />
              ))}
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

          {/* EXPERIENCIA */}
          <Section title="Experiencia Profesional">
            <ExperienceItem
              title="Docente de Tecnologías de la Información"
              description="Docencia en programación y desarrollo de software."
            />
            <ExperienceItem
              title="Desarrollador de Intranet"
              description="Desarrollo de intranet para gestión interna."
            />
            <ExperienceItem
              title="Desarrollador de Aulas Virtuales"
              description="Implementación y personalización de plataformas educativas."
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

const ExperienceItem = ({ title, description }) => (
  <Box display="flex" gap={2}>
    <WorkIcon color="primary" />
    <Box>
      <Typography fontWeight={700}>{title}</Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </Box>
  </Box>
);
