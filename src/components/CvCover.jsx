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
import WorkIcon from "@mui/icons-material/Work";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

/* =========================
SKILL CHIP
========================= */
const SkillChip = ({ label }) => (
  <Chip
    label={label}
    size="small"
    sx={{
      bgcolor: "#e3f2fd",
      color: "primary.main",
      fontWeight: 600,
      borderRadius: 1,
    }}
  />
);

export default function CvCover() {
  return (
    <Paper
      elevation={0}
      sx={{
        width: "100%",
        minHeight: "100vh",
        borderRadius: 0,
      }}
    >
      <Grid container>

        {/* ================= SIDEBAR ================= */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            bgcolor: "#0d47a1",
            color: "#fff",
            p: 4,
          }}
        >
          <Stack spacing={3} alignItems="center">
            <Avatar
              src="https://res.cloudinary.com/dqkwc0kf7/image/upload/v1757093856/FB_IMG_1757092624480_hgpu4i.jpg"
              sx={{
                width: 140,
                height: 140,
                border: "3px solid #fff",
              }}
            />

            <Box textAlign="center">
              <Typography variant="h6" fontWeight={800}>
                Jorge Patricio
              </Typography>
              <Typography variant="h6" fontWeight={800}>
                Santamaría Cherrez
              </Typography>

              <Typography variant="body2" sx={{ mt: 1, opacity: 0.9 }}>
                Ingeniero de Software <br />
                Desarrollador Full Stack
              </Typography>
            </Box>

            <Divider flexItem sx={{ borderColor: "rgba(255,255,255,.3)" }} />

            <Stack spacing={1} width="100%">
              <ContactItem icon={<EmailIcon />} text="patogol3535@gmail.com" />
              <ContactItem icon={<WhatsAppIcon />} text="0997979099" />
              <ContactItem icon={<LocationOnIcon />} text="Ambato, Ecuador" />
            </Stack>

            <Divider flexItem sx={{ borderColor: "rgba(255,255,255,.3)" }} />

            <Stack direction="row" spacing={1}>
              <Social icon={<LinkedInIcon />} />
              <Social icon={<GitHubIcon />} />
              <Social icon={<FacebookIcon />} />
              <Social icon={<InstagramIcon />} />
            </Stack>

            <Box sx={{ mt: 2, bgcolor: "#fff", p: 1.5, borderRadius: 2 }}>
              <img src="/qr-cv.png" alt="QR CV" width={120} />
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
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            px: 4,
            py: 4,
            bgcolor: "#fafafa",
          }}
        >
          <Section title="Áreas de Conocimiento">
            <Block title="Desarrollo Web Full Stack">
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
            </Block>
          </Section>

          <Section title="Experiencia Profesional">
            <ExperienceItem
              title="Docente de Tecnologías de la Información"
              description="Docencia en programación y desarrollo de software."
            />
          </Section>

          <Section title="Formación Académica">
            <EducationItem
              title="Universidad Internacional de La Rioja (UNIR)"
              subtitle="Maestría en Ingeniería de Software y Sistemas Informáticos"
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
  <Stack direction="row" spacing={1.5} alignItems="center">
    {icon}
    <Typography variant="body2">{text}</Typography>
  </Stack>
);

const Social = ({ icon }) => (
  <IconButton sx={{ color: "#fff" }}>{icon}</IconButton>
);

const Section = ({ title, children }) => (
  <Box mb={4}>
    <Typography variant="h6" fontWeight={800}>
      {title}
    </Typography>
    <Divider sx={{ my: 2 }} />
    <Stack spacing={2}>{children}</Stack>
  </Box>
);

const Block = ({ title, children }) => (
  <Box>
    <Typography fontWeight={700} mb={1}>
      {title}
    </Typography>
    <Stack direction="row" spacing={1} flexWrap="wrap">
      {children}
    </Stack>
  </Box>
);

const EducationItem = ({ title, subtitle }) => (
  <Box display="flex" gap={2}>
    <SchoolIcon color="primary" />
    <Box>
      <Typography fontWeight={700}>{title}</Typography>
      <Typography variant="body2">{subtitle}</Typography>
    </Box>
  </Box>
);

const ExperienceItem = ({ title, description }) => (
  <Box display="flex" gap={2}>
    <WorkIcon color="primary" />
    <Box>
      <Typography fontWeight={700}>{title}</Typography>
      <Typography variant="body2">{description}</Typography>
    </Box>
  </Box>
);
