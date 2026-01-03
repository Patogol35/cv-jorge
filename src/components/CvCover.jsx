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
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius * 2,
  backgroundColor: theme.palette.grey[50],
  transition: "transform 0.2s, box-shadow 0.2s",
  "&:hover": {
    boxShadow: theme.shadows[6],
  },
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
      fontSize: "0.8rem",
    }}
  />
);

// === Subcomponents (mejorados visualmente) ===
const ContactItem = ({ icon, text }) => (
  <Stack direction="row" spacing={1.5} alignItems="center">
    {icon}
    <Typography variant="body2" color="white" fontWeight={500}>
      {text}
    </Typography>
  </Stack>
);

const Social = ({ icon, url }) => (
  <Tooltip title={url} arrow>
    <IconButton
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        color: "#fff",
        bgcolor: "rgba(255,255,255,0.15)",
        "&:hover": {
          bgcolor: "rgba(255,255,255,0.25)",
          transform: "scale(1.1)",
        },
        transition: "all 0.2s ease",
      }}
    >
      {icon}
    </IconButton>
  </Tooltip>
);

const Section = ({ title, children }) => (
  <Box mb={6}>
    <Typography variant="h5" fontWeight={700} gutterBottom color="text.primary">
      {title}
    </Typography>
    <Divider sx={{ mb: 3, borderColor: "divider" }} />
    <Stack spacing={3}>{children}</Stack>
  </Box>
);

const CardBlock = ({ title, children }) => (
  <StyledPaper elevation={2}>
    <Typography fontWeight={700} variant="subtitle1" mb={1.5}>
      {title}
    </Typography>
    <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
      {children}
    </Stack>
  </StyledPaper>
);

const TimelineItem = ({ title, subtitle, date }) => (
  <Box display="flex" gap={2} mb={2}>
    <SchoolIcon color="primary" sx={{ mt: 0.5 }} />
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

const ExperienceItem = ({ role, company, date, description }) => (
  <Box display="flex" gap={2} mb={3}>
    <WorkIcon color="primary" sx={{ mt: 0.5 }} />
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
        backgroundColor: theme.palette.grey[100],
        p: { xs: 1, md: 2 },
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 1200,
          borderRadius: { xs: 0, md: 4 },
          overflow: "hidden",
          boxShadow: theme.shadows[8],
        }}
      >
        <Grid container sx={{ minHeight: { md: "80vh" } }}>
          {/* === SIDEBAR === */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              background:
                "linear-gradient(150deg, #0d47a1 0%, #1565c0 100%)",
              color: "#fff",
              p: { xs: 3, md: 4 },
            }}
          >
            <Stack spacing={4} alignItems="center" width="100%">
              <Box
                sx={{
                  p: 1,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.25)",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
                }}
              >
                <Avatar
                  src="/foto.jpg"
                  alt="Jorge Patricio Santamaría"
                  sx={{
                    width: { xs: 120, md: 140 },
                    height: { xs: 120, md: 140 },
                    border: "4px solid #fff",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                  }}
                />
              </Box>

              <Box textAlign="center">
                <Typography variant="h5" fontWeight={800} lineHeight={1.2}>
                  Jorge Patricio
                </Typography>
                <Typography variant="h6" fontWeight={700} color="rgba(255,255,255,0.9)">
                  Santamaría Cherrez
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9, mt: 1 }}>
                  Máster en Ingeniería de Software <br />
                  y Sistemas Informáticos
                </Typography>
              </Box>

              <Divider flexItem sx={{ borderColor: "rgba(255,255,255,0.4)", width: "80%" }} />

              <Stack spacing={2} width="100%">
                <ContactItem icon={<EmailIcon fontSize="small" />} text="patricio_jorge@hotmail.es" />
                <ContactItem icon={<WhatsAppIcon fontSize="small" />} text="+593 99 797 9099" />
                <ContactItem icon={<LocationOnIcon fontSize="small" />} text="Ambato, Ecuador" />
              </Stack>

              <Divider flexItem sx={{ borderColor: "rgba(255,255,255,0.4)", width: "80%" }} />

              <Stack direction="row" spacing={1.5} justifyContent="center">
                <Social icon={<LinkedInIcon />} url="https://linkedin.com/in/patogol35" />
                <Social icon={<GitHubIcon />} url="https://github.com/Patogol35" />
                <Social icon={<FacebookIcon />} url="https://facebook.com" />
                <Social icon={<InstagramIcon />} url="https://instagram.com" />
              </Stack>

              <Box
                sx={{
                  mt: 2,
                  bgcolor: "rgba(255,255,255,0.95)",
                  p: 2,
                  borderRadius: 2,
                  textAlign: "center",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                }}
              >
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(cvUrl)}`}
                  alt="QR CV"
                  width={120}
                  height={120}
                />
                <Typography variant="caption" color="text.secondary" display="block" mt={1}>
                  Escanea para ver mi CV online
                </Typography>
              </Box>
            </Stack>
          </Grid>

          {/* === MAIN CONTENT === */}
          <Grid
            item
            xs={12}
            md={8}
            sx={{
              p: { xs: 2.5, md: 5 },
              bgcolor: "#ffffff",
            }}
          >
            <Section title="Áreas de Conocimiento">
              <CardBlock title="Desarrollo Web Full Stack">
                {["PHP", "JavaScript", "React", "Java", "Spring Boot", "MySQL"].map((s) => (
                  <SkillChip key={s} label={s} />
                ))}
              </CardBlock>

              <CardBlock title="Cloud & DevOps">
                {["AWS", "Render", "Vercel", "Git", "Linux"].map((s) => (
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
                description="Desarrollo de aplicaciones web modernas, seguras y escalables con React, Spring Boot y despliegue en Vercel/AWS."
              />
              <ExperienceItem
                role="Desarrollador Web"
                company="Startups / Freelance"
                date="2023 – 2024"
                description="Implementación de interfaces responsivas, APIs REST y optimización de rendimiento."
              />
              <ExperienceItem
                role="Ingeniero de Software"
                company="Proyectos Académicos & Empresariales"
                date="2022 – 2023"
                description="Arquitectura limpia, bases de datos, pruebas y control de versiones con Git."
              />
            </Section>

            <Section title="Formación Académica">
              <TimelineItem
                title="Universidad Internacional de La Rioja (UNIR)"
                subtitle="Máster en Ingeniería de Software y Sistemas Informáticos"
                date="2023 – 2024"
              />
              <TimelineItem
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
