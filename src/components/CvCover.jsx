import {
  Box,
  Paper,
  Typography,
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
import DescriptionIcon from "@mui/icons-material/Description";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

/* =========================
SKILL CHIP – REFINADO
========================= */
const SkillChip = ({ label }) => (
  <Chip
    label={label}
    size="small"
    sx={{
      bgcolor: "#e6f0ff",
      color: "#0f4c99",
      fontWeight: 600,
      borderRadius: "10px",
      height: 30,
      fontSize: 13.5,
      px: 1.2,
      boxShadow: "0 1px 2px rgba(0,0,0,0.03)",
    }}
  />
);

/* =========================
SEPARATOR – LÍNEA SUAVE Y MODERNA
========================= */
const SectionSeparator = ({ width = "70%" }) => (
  <Box
    sx={{
      height: "1px",
      width: width,
      background: "linear-gradient(to right, transparent, #cbd5e1, transparent)",
      my: 3,
      mx: "auto",
    }}
  />
);

export default function CvCover() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f9fbfd",
        display: "flex",
        justifyContent: "center",
        py: 8,
        px: 2,
        fontFamily: '"Inter", sans-serif',
        color: "#1e293b",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 940,
          borderRadius: 4,
          overflow: "hidden",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          minHeight: "140vh",
          border: "1px solid #e2e8f0",
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
        }}
      >
        {/* ================= SIDEBAR ================= */}
        <Box
          sx={{
            width: { xs: "100%", md: 280 },
            bgcolor: "#0f4c99",
            color: "#f1f5f9",
            p: { xs: 3, md: 5 },
            flexShrink: 0,
          }}
        >
          <Stack spacing={5.5} alignItems="center">
            <Avatar
              src="https://res.cloudinary.com/dqkwc0kf7/image/upload/v1757093856/FB_IMG_1757092624480_hgpu4i.jpg"
              sx={{
                width: 140,
                height: 140,
                border: "4px solid rgba(255,255,255,0.92)",
                boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
                mb: 1.5,
              }}
            />

            <Box textAlign="center">
              <Typography
                fontWeight={800}
                fontSize={{ xs: 19, md: 21 }}
                lineHeight={1.2}
                sx={{ mb: 0.5, letterSpacing: "0.3px" }}
              >
                Jorge Patricio
              </Typography>
              <Typography
                fontWeight={800}
                fontSize={{ xs: 19, md: 21 }}
                lineHeight={1.2}
                sx={{ mb: 1.8, letterSpacing: "0.3px" }}
              >
                Santamaría Cherrez
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  opacity: 0.92,
                  lineHeight: 1.5,
                  fontWeight: 500,
                }}
              >
                Máster en Ingeniería de Software
                <br />
                y Sistemas Informáticos
              </Typography>
            </Box>

            {/* Separador suave */}
            <Box sx={{ height: "1px", width: "80%", bgcolor: "rgba(255,255,255,0.25)", my: 1.4 }} />

            {/* Contactos */}
            <Stack spacing={3.2} width="100%" alignItems="center">
              <Contact icon={<EmailIcon />} text="patogol3535@gmail.com" />
              <Contact icon={<WhatsAppIcon />} text="+593 99 797 9099" />
              <Contact icon={<LocationOnIcon />} text="Ambato, Ecuador" />
              <Contact icon={<FacebookIcon />} text="jorge.patricio.12" />
              <Contact icon={<InstagramIcon />} text="@jorge_patricio_26" />
              <Contact icon={<GitHubIcon />} text="Patogol35" />
            </Stack>

            <Box sx={{ height: "1px", width: "80%", bgcolor: "rgba(255,255,255,0.25)", my: 1.4 }} />

            {/* QR + Portafolio */}
            <Typography
              sx={{
                fontWeight: 600,
                textAlign: "center",
                opacity: 0.9,
                fontSize: 14,
                mt: 2.5,
              }}
            >
              Portafolio Profesional
            </Typography>
            <Tooltip title="Escanear para acceder a mi portafolio">
              <Box
                component="a"
                href="https://portafoliojorgepatriciosantamariach.vercel.app/"
                target="_blank"
                sx={{
                  display: "block",
                  mt: 2,
                  borderRadius: 2,
                  overflow: "hidden",
                  border: "2px solid rgba(255,255,255,0.85)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                }}
              >
                <Box
                  component="img"
                  src="/qr-cv.png"
                  alt="QR – Portafolio"
                  sx={{
                    width: 110,
                    height: 110,
                    display: "block",
                  }}
                />
              </Box>
            </Tooltip>

            <Box sx={{ mt: 2.5, textAlign: "center" }}>
              <Tooltip title="Visitar portafolio">
                <IconButton
                  component="a"
                  href="https://portafoliojorgepatriciosantamariach.vercel.app/"
                  target="_blank"
                  sx={{
                    color: "#e2e8f0",
                    bgcolor: "rgba(255,255,255,0.15)",
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    "&:hover": {
                      bgcolor: "rgba(255,255,255,0.25)",
                    },
                  }}
                >
                  <DescriptionIcon sx={{ fontSize: 28 }} />
                </IconButton>
              </Tooltip>
            </Box>
          </Stack>
        </Box>

        {/* ================= CONTENT (DERECHA) ================= */}
        <Box
          sx={{
            flex: 1,
            p: { xs: 4, md: 6 },
            bgcolor: "#ffffff",
            pb: 10,
          }}
        >
          <Stack spacing={8} alignItems="center" sx={{ width: "100%" }}>
            {/* ÁREAS DE CONOCIMIENTO */}
            <Box sx={{ width: "100%", maxWidth: 620 }}>
              <Typography
                variant="h4"
                fontWeight={800}
                fontSize={{ xs: 22, md: 23 }}
                color="#0f4c99"
                align="center"
                sx={{ mb: 2 }}
              >
                Áreas de Conocimiento
              </Typography>
              <SectionSeparator width="72%" />
              <Stack spacing={5.5} sx={{ width: "100%" }} alignItems="flex-start">
                <Block title="Desarrollo Web & Mobile">
                  {["React", "Spring Boot", "Python", "PHP"].map((s) => (
                    <SkillChip key={s} label={s} />
                  ))}
                </Block>

                <Block title="Infraestructura en la Nube">
                  {["AWS", "Vercel", "Render"].map((s) => (
                    <SkillChip key={s} label={s} />
                  ))}
                </Block>

                <Block title="Bases de Datos">
                  {["PostgreSQL", "MySQL", "MongoDB", "Elasticsearch"].map((s) => (
                    <SkillChip key={s} label={s} />
                  ))}
                </Block>

                <Block title="Herramientas & Metodologías">
                  {["Postman", "Linux", "Scrum", "Git", "VM", "AnyDesk"].map((s) => (
                    <SkillChip key={s} label={s} />
                  ))}
                </Block>
              </Stack>
            </Box>

            {/* FORMACIÓN ACADÉMICA */}
            <Box sx={{ width: "100%", maxWidth: 620 }}>
              <Typography
                variant="h4"
                fontWeight={800}
                fontSize={{ xs: 22, md: 23 }}
                color="#0f4c99"
                align="center"
                sx={{ mb: 2 }}
              >
                Formación Académica
              </Typography>
              <SectionSeparator width="72%" />
              <Stack spacing={4.5} sx={{ width: "100%" }} alignItems="flex-start">
                <Item
                  icon={<SchoolIcon sx={{ color: "#0f4c99", fontSize: 26 }} />}
                  title="Universidad Internacional de La Rioja (UNIR) – España"
                  desc="Máster en Ingeniería de Software y Sistemas Informáticos"
                />
                <Item
                  icon={<SchoolIcon sx={{ color: "#0f4c99", fontSize: 26 }} />}
                  title="Universidad Indoamérica – Ecuador"
                  desc="Ingeniería de Sistemas"
                />
              </Stack>
            </Box>

            {/* EXPERIENCIA PROFESIONAL */}
            <Box sx={{ width: "100%", maxWidth: 620 }}>
              <Typography
                variant="h4"
                fontWeight={800}
                fontSize={{ xs: 22, md: 23 }}
                color="#0f4c99"
                align="center"
                sx={{ mb: 2 }}
              >
                Experiencia Profesional
              </Typography>
              <SectionSeparator width="72%" />
              <Stack spacing={4.5} sx={{ width: "100%" }} alignItems="flex-start">
                <Item
                  icon={<WorkIcon sx={{ color: "#0f4c99", fontSize: 26 }} />}
                  title="Docente de Informática"
                  desc="Formación técnica en informática y tecnologías digitales."
                />
                <Item
                  icon={<WorkIcon sx={{ color: "#0f4c99", fontSize: 26 }} />}
                  title="Desarrollador de Aplicaciones"
                  desc="Diseño y desarrollo de soluciones digitales eficientes."
                />
                <Item
                  icon={<WorkIcon sx={{ color: "#0f4c99", fontSize: 26 }} />}
                  title="Desarrollador de Aulas Virtuales"
                  desc="Desarrollo e implementación de plataformas educativas virtuales."
                />
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
}

/* =========================
SUB COMPONENTS REFINED
========================= */

const Contact = ({ icon, text }) => (
  <Stack
    direction="row"
    spacing={1.8}
    alignItems="center"
    justifyContent="center"
    sx={{ width: "100%" }}
  >
    <Box sx={{ color: "white", opacity: 0.95, display: "flex" }}>{icon}</Box>
    <Typography
      sx={{
        fontSize: 14.5,
        textAlign: "center",
        lineHeight: 1.5,
        opacity: 0.96,
        fontWeight: 500,
        maxWidth: "85%",
      }}
    >
      {text}
    </Typography>
  </Stack>
);

const Block = ({ title, children }) => (
  <Box sx={{ width: "100%", mb: 2.5 }}>
    <Typography
      fontWeight={700}
      fontSize={16.5}
      color="#0f4c99"
      sx={{ mb: 2, letterSpacing: "0.2px" }}
    >
      {title}
    </Typography>
    <Stack direction="row" flexWrap="wrap" gap={1.8}>
      {children}
    </Stack>
  </Box>
);

const Item = ({ icon, title, desc }) => (
  <Stack direction="row" spacing={2.5} alignItems="flex-start" sx={{ maxWidth: 560 }}>
    {icon}
    <Box>
      <Typography
        fontWeight={700}
        fontSize={15.5}
        color="#0f4c99"
        sx={{ lineHeight: 1.35, mb: 0.4 }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: 14.5,
          color: "#475569",
          lineHeight: 1.6,
          fontWeight: 400,
        }}
      >
        {desc}
      </Typography>
    </Box>
  </Stack>
);
