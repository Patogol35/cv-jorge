                                    import {
  Box,
  Paper,
  Typography,
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

/* =========================
SKILL CHIP
========================= */
const Skill = ({ label }) => (
  <Chip
    label={label}
    size="small"
    sx={{
      bgcolor: "#eef4ff",
      color: "#1e3a8a",
      fontWeight: 600,
      borderRadius: "6px",
      height: 26,
    }}
  />
);

export default function CvCover() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f1f5f9",
        display: "flex",
        justifyContent: "center",
        py: 4,
      }}
    >
      <Paper
        elevation={8}
        sx={{
          width: "100%",
          maxWidth: 900,
          borderRadius: 3,
          overflow: "hidden",
          display: "flex",
        }}
      >
        {/* ================= SIDEBAR ================= */}
        <Box
          sx={{
            width: 280,
            bgcolor: "#0f172a",
            color: "#fff",
            p: 3,
            flexShrink: 0,
          }}
        >
          <Stack spacing={3} alignItems="center">
            <Avatar
              src="https://res.cloudinary.com/dqkwc0kf7/image/upload/v1757093856/FB_IMG_1757092624480_hgpu4i.jpg"
              sx={{
                width: 130,
                height: 130,
                border: "3px solid #fff",
              }}
            />

            <Box textAlign="center">
              <Typography fontWeight={800} fontSize={18}>
                Jorge Patricio
              </Typography>
              <Typography fontWeight={800} fontSize={18}>
                Santamaría Cherrez
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.85, mt: 1 }}>
                Ingeniero de Software <br />
                Full Stack Developer
              </Typography>
            </Box>

            <Divider flexItem sx={{ borderColor: "rgba(255,255,255,.2)" }} />

            <Stack spacing={1} width="100%">
              <Info icon={<EmailIcon />} text="patogol3535@gmail.com" />
              <Info icon={<WhatsAppIcon />} text="0997979099" />
              <Info icon={<LocationOnIcon />} text="Ambato, Ecuador" />
            </Stack>

            <Divider flexItem sx={{ borderColor: "rgba(255,255,255,.2)" }} />

            <Stack direction="row" spacing={1}>
              <Social icon={<LinkedInIcon />} />
              <Social icon={<GitHubIcon />} />
            </Stack>
          </Stack>
        </Box>

        {/* ================= CONTENT ================= */}
        <Box sx={{ flex: 1, p: 4, bgcolor: "#ffffff" }}>
          <Section title="Áreas de Conocimiento">
            <Sub title="Desarrollo Full Stack">
              {[
                "JavaScript",
                "React",
                "Java",
                "Spring Boot",
                "PHP",
                "MySQL",
                "PostgreSQL",
              ].map((s) => (
                <Skill key={s} label={s} />
              ))}
            </Sub>

            <Sub title="Cloud & Tools">
              {["AWS", "Vercel", "Render", "Postman"].map((s) => (
                <Skill key={s} label={s} />
              ))}
            </Sub>
          </Section>

          <Section title="Experiencia Profesional">
            <Item
              icon={<WorkIcon />}
              title="Docente de Tecnologías de la Información"
              desc="Formación en programación, desarrollo web y software."
            />
            <Item
              icon={<WorkIcon />}
              title="Desarrollador de Intranet"
              desc="Sistemas internos para gestión académica y administrativa."
            />
            <Item
              icon={<WorkIcon />}
              title="Desarrollador de Aulas Virtuales"
              desc="Implementación de plataformas educativas virtuales."
            />
          </Section>

          <Section title="Formación Académica">
            <Item
              icon={<SchoolIcon />}
              title="Universidad Internacional de La Rioja (UNIR)"
              desc="Maestría en Ingeniería de Software · 2023 – 2024"
            />
            <Item
              icon={<SchoolIcon />}
              title="Universidad Indoamérica"
              desc="Ingeniería de Sistemas"
            />
          </Section>
        </Box>
      </Paper>
    </Box>
  );
}

/* =========================
SUB COMPONENTS
========================= */

const Info = ({ icon, text }) => (
  <Stack direction="row" spacing={1} alignItems="center">
    {icon}
    <Typography variant="body2">{text}</Typography>
  </Stack>
);

const Social = ({ icon }) => (
  <Tooltip title="Perfil">
    <IconButton sx={{ color: "#fff" }}>{icon}</IconButton>
  </Tooltip>
);

const Section = ({ title, children }) => (
  <Box mb={4}>
    <Typography fontWeight={800} fontSize={18}>
      {title}
    </Typography>
    <Divider sx={{ my: 1.5 }} />
    <Stack spacing={2}>{children}</Stack>
  </Box>
);

const Sub = ({ title, children }) => (
  <Box>
    <Typography fontWeight={700} mb={1}>
      {title}
    </Typography>
    <Stack direction="row" spacing={1} flexWrap="wrap">
      {children}
    </Stack>
  </Box>
);

const Item = ({ icon, title, desc }) => (
  <Stack direction="row" spacing={1.5} alignItems="flex-start">
    {icon}
    <Box>
      <Typography fontWeight={700}>{title}</Typography>
      <Typography variant="body2" color="text.secondary">
        {desc}
      </Typography>
    </Box>
  </Stack>
);
