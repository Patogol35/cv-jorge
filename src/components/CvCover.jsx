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
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// === Icons ===
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

// === Config ===
const cvUrl = "https://jorge-santamaria.dev/cv";

// === Styled Components ===
const ContentCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2.5),
  borderRadius: theme.shape.borderRadius * 2,
  backgroundColor: "#ffffff",
  border: `1px solid ${theme.palette.divider}`,
}));

const SkillChip = ({ label }) => (
  <Chip
    label={label}
    size="small"
    sx={{
      bgcolor: "primary.light",
      color: "primary.dark",
      fontWeight: 600,
      borderRadius: "8px",
      height: "28px",
      fontSize: "0.8125rem",
    }}
  />
);

// === Subcomponents ===
const ContactItem = ({ icon, text }) => (
  <Stack direction="row" spacing={1.5} alignItems="center">
    {icon}
    <Typography variant="body2" color="white" fontWeight={500}>
      {text}
    </Typography>
  </Stack>
);

const SocialButton = ({ icon, url }) => (
  <Tooltip title={url} arrow>
    <IconButton
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        color: "#fff",
        bgcolor: "rgba(255,255,255,0.18)",
        "&:hover": {
          bgcolor: "rgba(255,255,255,0.3)",
          transform: "scale(1.08)",
        },
        transition: "all 0.2s ease",
        width: 36,
        height: 36,
      }}
    >
      {icon}
    </IconButton>
  </Tooltip>
);

const Section = ({ title, children }) => (
  <Box mb={5}>
    <Typography variant="h5" fontWeight={700} gutterBottom>
      {title}
    </Typography>
    <Divider sx={{ mb: 2.5 }} />
    <Stack spacing={3}>{children}</Stack>
  </Box>
);

const CardBlock = ({ title, children }) => (
  <ContentCard elevation={1}>
    <Typography fontWeight={700} variant="subtitle1" mb={1.5}>
      {title}
    </Typography>
    <Stack direction="row" spacing={1.2} flexWrap="wrap" useFlexGap>
      {children}
    </Stack>
  </ContentCard>
);

const ExperienceItem = ({ role, company, date, description }) => (
  <Box display="flex" gap={2}>
    <WorkIcon color="primary" sx={{ mt: 0.75, flexShrink: 0 }} />
    <Box>
      <Typography fontWeight={700} variant="body1">
        {role}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {company}
      </Typography>
      <Typography variant="caption" color="text.disabled">
        {date}
      </Typography>
      <Typography variant="body2" mt={1} color="text.primary">
        {description}
      </Typography>
    </Box>
  </Box>
);

const EducationItem = ({ title, subtitle, date }) => (
  <Box display="flex" gap={2}>
    <SchoolIcon color="primary" sx={{ mt: 0.75, flexShrink: 0 }} />
    <Box>
      <Typography fontWeight={700} variant="body1">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {subtitle}
      </Typography>
      {date && (
        <Typography variant="caption" color="text.disabled">
          {date}
        </Typography>
      )}
    </Box>
  </Box>
);

// === Main Component ===
export default function CvCover() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.palette.grey[100],
        p: { xs: 1, sm: 2 },
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: "100%",
          maxWidth: 1150,
          borderRadius: { xs: 0, md: 3 },
          overflow: "hidden",
        }}
      >
        <Grid container sx={{ minHeight: { md: "85vh" } }}>
          {/* === SIDEBAR IZQUIERDA (AZUL) === */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              background: "linear-gradient(150deg, #0d47a1 0%, #1976d2 100%)",
              color: "#fff",
              p: { xs: 3, md: 4 },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Avatar con decoración */}
            <Box
              sx={{
                p: 1.2,
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.35)",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.25)",
                mb: 2.5,
              }}
            >
              <Avatar
                src="/foto.jpg"
                alt="Jorge Patricio Santamaría Cherrez"
                sx={{
                  width: 130,
                  height: 130,
                  border: "4px solid #fff",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                }}
              />
            </Box>

            {/* Nombre y título */}
            <Box textAlign="center" mb={2.5}>
              <Typography variant="h5" fontWeight={800} lineHeight={1.2}>
                Jorge Patricio
              </Typography>
              <Typography variant="h6" fontWeight={600} color="rgba(255,255,255,0.92)">
                Santamaría Cherrez
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.95, mt: 1 }}>
                Máster en Ingeniería de Software <br />
                y Sistemas Informáticos
              </Typography>
            </Box>

            <Divider flexItem sx={{ borderColor: "rgba(255,255,255,0.4)", width: "80%", mb: 2.5 }} />

            {/* Contacto */}
            <Stack spacing={1.8} width="100%" mb={2.5}>
              <ContactItem icon={<EmailIcon fontSize="small" />} text="patricio_jorge@hotmail.es" />
              <ContactItem icon={<WhatsAppIcon fontSize="small" />} text="+593 99 797 9099" />
              <ContactItem icon={<LocationOnIcon fontSize="small" />} text="Ambato, Ecuador" />
            </Stack>

            <Divider flexItem sx={{ borderColor: "rgba(255,255,255,0.4)", width: "80%", mb: 2.5 }} />

            {/* Redes sociales */}
            <Stack direction="row" spacing={1.5} justifyContent="center" mb={3}>
              <SocialButton icon={<LinkedInIcon />} url="https://linkedin.com/in/patogol35" />
              <SocialButton icon={<GitHubIcon />} url="https://github.com/Patogol35" />
              <SocialButton icon={<FacebookIcon />} url="https://facebook.com" />
              <SocialButton icon={<InstagramIcon />} url="https://instagram.com" />
            </Stack>

            {/* QR Code */}
            <Box
              sx={{
                bgcolor: "rgba(255,255,255,0.97)",
                p: 2,
                borderRadius: 2,
                textAlign: "center",
                width: "100%",
                maxWidth: 180,
                boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
              }}
            >
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(cvUrl)}`}
                alt="QR CV"
                width={120}
                height={120}
              />
              <Typography variant="caption" color="text.secondary" display="block" mt={1}>
                CV Online
              </Typography>
            </Box>
          </Grid>

          {/* === CONTENIDO PRINCIPAL (DERECHA) === */}
          <Grid
            item
            xs={12}
            md={8}
            sx={{
              p: { xs: 2.5, md: 4.5 },
              bgcolor: "#ffffff",
            }}
          >
            <Section title="Áreas de Conocimiento">
              <CardBlock title="Desarrollo Web Full Stack">
                {["React", "JavaScript", "Spring Boot", "Java", "PHP", "MySQL"].map((s) => (
                  <SkillChip key={s} label={s} />
                ))}
              </CardBlock>

              <CardBlock title="Cloud & DevOps">
                {["AWS", "Vercel", "Render", "Git", "Linux"].map((s) => (
                  <SkillChip key={s} label={s} />
                ))}
              </CardBlock>

              <CardBlock title="Bases de Datos">
                {["MySQL", "PostgreSQL", "MongoDB", "Elasticsearch"].map((s) => (
                  <SkillChip key={s} label={s} />
                ))}
              </CardBlock>
            </Section>

            <Section title="Experiencia Profesional">
              <ExperienceItem
                role="Desarrollador Full Stack"
                company="Proyectos Independientes"
                date="2024 – Actualidad"
                description="Desarrollo de aplicaciones web modernas, seguras y escalables con React, Spring Boot y despliegue en Vercel y AWS."
              />
              <ExperienceItem
                role="Desarrollador Web"
                company="Startups / Freelance"
                date="2023 – 2024"
                description="Implementación de interfaces responsivas y APIs REST con enfoque en rendimiento y experiencia de usuario."
              />
              <ExperienceItem
                role="Ingeniero de Software"
                company="Proyectos Académicos y Empresariales"
                date="2022 – 2023"
                description="Diseño de arquitecturas limpias, integración de bases de datos y control de versiones con Git."
              />
            </Section>

            <Section title="Formación Académica">
              <EducationItem
                title="Universidad Internacional de La Rioja (UNIR)"
                subtitle="Máster en Ingeniería de Software y Sistemas Informáticos"
                date="2023 – 2024"
              />
              <EducationItem
                title="Universidad Indoamérica"
                subtitle="Ingeniería de Sistemas"
                date="2017 – 2022"
              />
            </Section>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
      }
