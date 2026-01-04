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
SKILL CHIP – CON TRANSICIÓN SUAVE
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
      boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
      transition: "all 0.2s ease",
      "&:hover": {
        bgcolor: "#d0e4ff",
        transform: "translateY(-1px)",
        boxShadow: "0 2px 5px rgba(0,0,0,0.08)",
      },
    }}
  />
);

/* =========================
SEPARATOR – LÍNEA ELEGANTE
========================= */
const SectionSeparator = ({ width = "72%" }) => (
  <Box
    sx={{
      height: "1px",
      width: width,
      background: "linear-gradient(to right, transparent, #a0aec0, transparent)",
      my: 3,
      mx: "auto",
      opacity: 0.65,
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
        py: { xs: 6, md: 8 },
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
          minHeight: "142vh",
          border: "1px solid #e2e8f0",
          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.07)",
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
          <Stack spacing={5.6} alignItems="center">
            <Avatar
              src="https://res.cloudinary.com/dqkwc0kf7/image/upload/v1757093856/FB_IMG_1757092624480_hgpu4i.jpg"
              sx={{
                width: 140,
                height: 140,
                border: "4px solid rgba(255,255,255,0.94)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.28)",
                mb: 1.6,
              }}
            />

            <Box textAlign="center">
              <Typography
                fontWeight={800}
                fontSize={{ xs: 19, md: 21 }}
                lineHeight={1.25}
                sx={{ mb: 0.6, letterSpacing: "0.4px" }}
              >
                Jorge Patricio
              </Typography>
              <Typography
                fontWeight={800}
                fontSize={{ xs: 19, md: 21 }}
                lineHeight={1.25}
                sx={{ mb: 1.9, letterSpacing: "0.4px" }}
              >
                Santamaría Cherrez
              </Typography>
              <Typography
                sx={{
                  fontSize: 14.2,
                  opacity: 0.93,
                  lineHeight: 1.52,
                  fontWeight: 500,
                  letterSpacing: "0.2px",
                }}
              >
                Máster en Ingeniería de Software
                <br />
                y Sistemas Informáticos
              </Typography>
            </Box>

            <Box sx={{ height: "1px", width: "80%", bgcolor: "rgba(255,255,255,0.28)", my: 1.5 }} />

            <Stack spacing={3.4} width="100%" alignItems="center">
              <Contact icon={<EmailIcon />} text="patogol3535@gmail.com" />
              <Contact icon={<WhatsAppIcon />} text="+593 99 797 9099" />
              <Contact icon={<LocationOnIcon />} text="Ambato, Ecuador" />
              <Contact icon={<FacebookIcon />} text="jorge.patricio.12" />
              <Contact icon={<InstagramIcon />} text="@jorge_patricio_26" />
              <Contact icon={<GitHubIcon />} text="Patogol35" />
            </Stack>

            <Box sx={{ height: "1px", width: "80%", bgcolor: "rgba(255,255,255,0.28)", my: 1.5 }} />

            <Typography
              sx={{
                fontWeight: 600,
                textAlign: "center",
                opacity: 0.92,
                fontSize: 14.2,
                mt: 2.6,
                letterSpacing: "0.3px",
              }}
            >
              Portafolio Profesional
            </Typography>
            <Tooltip title="Escanear para acceder a mi portafolio" arrow>
              <Box
                component="a"
                href="https://portafoliojorgepatriciosantamariach.vercel.app/"
                target="_blank"
                sx={{
                  display: "block",
                  mt: 2.2,
                  borderRadius: 2.5,
                  overflow: "hidden",
                  border: "2px solid rgba(255,255,255,0.88)",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.18)",
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

            <Box sx={{ mt: 2.7, textAlign: "center" }}>
              <Tooltip title="Visitar portafolio" arrow>
                <IconButton
                  component="a"
                  href="https://portafoliojorgepatriciosantamariach.vercel.app/"
                  target="_blank"
                  sx={{
                    color: "#e2e8f0",
                    bgcolor: "rgba(255,255,255,0.18)",
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      bgcolor: "rgba(255,255,255,0.32)",
                      transform: "scale(1.06)",
                    },
                  }}
                >
                  <DescriptionIcon sx={{ fontSize: 29 }} />
                </IconButton>
              </Tooltip>
            </Box>
          </Stack>
        </Box>

        {/* ================= CONTENT ================= */}
        <Box
          sx={{
            flex: 1,
            p: { xs: 4.2, md: 6.5 },
            bgcolor: "#ffffff",
            pb: 11,
          }}
        >
          <Stack spacing={8.2} alignItems="center" sx={{ width: "100%" }}>
            {/* ÁREAS DE CONOCIMIENTO */}
            <Box sx={{ width: "100%", maxWidth: 620 }}>
              <Typography
                variant="h4"
                fontWeight={800}
                fontSize={{ xs: 22.5, md: 23.5 }}
                color="#0f4c99"
                align="center"
                sx={{ mb: 2.2, letterSpacing: "0.5px" }}
              >
                Áreas de Conocimiento
              </Typography>
              <SectionSeparator />
              <Stack spacing={5.7} sx={{ width: "100%" }} alignItems="flex-start">
                <Block title="Desarrollo Web">
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
                  {["Microsoft Office", "Postman", "Linux", "Scrum", "Git", "VM", "AnyDesk"].map((s) => (
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
                fontSize={{ xs: 22.5, md: 23.5 }}
                color="#0f4c99"
                align="center"
                sx={{ mb: 2.2, letterSpacing: "0.5px" }}
              >
                Formación Académica
              </Typography>
              <SectionSeparator />
              <Stack spacing={4.7} sx={{ width: "100%" }} alignItems="flex-start">
                <Item
                  icon={<SchoolIcon sx={{ color: "#0f4c99", fontSize: 27 }} />}
                  title="Universidad Internacional de La Rioja (UNIR) – España"
                  desc="Máster en Ingeniería de Software y Sistemas Informáticos"
                />
                <Item
                  icon={<SchoolIcon sx={{ color: "#0f4c99", fontSize: 27 }} />}
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
                fontSize={{ xs: 22.5, md: 23.5 }}
                color="#0f4c99"
                align="center"
                sx={{ mb: 2.2, letterSpacing: "0.5px" }}
              >
                Experiencia Profesional
              </Typography>
              <SectionSeparator />
              <Stack spacing={4.7} sx={{ width: "100%" }} alignItems="flex-start">
                <Item
                  icon={<WorkIcon sx={{ color: "#0f4c99", fontSize: 27 }} />}
                  title="Docente de Informática"
                  desc="Formación técnica en informática y tecnologías digitales."
                />
                <Item
                  icon={<WorkIcon sx={{ color: "#0f4c99", fontSize: 27 }} />}
                  title="Desarrollador de Aplicaciones"
                  desc="Diseño y desarrollo de soluciones digitales eficientes."
                />
                <Item
                  icon={<WorkIcon sx={{ color: "#0f4c99", fontSize: 27 }} />}
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
SUB COMPONENTS – ÚLTIMO PULIDO
========================= */

const Contact = ({ icon, text }) => (
  <Stack
    direction="row"
    spacing={1.9}
    alignItems="center"
    justifyContent="center"
    sx={{ width: "100%", transition: "opacity 0.2s", "&:hover": { opacity: 0.95 } }}
  >
    <Box sx={{ color: "white", opacity: 0.96, display: "flex", fontSize: "1.1rem" }}>
      {icon}
    </Box>
    <Typography
      sx={{
        fontSize: 14.6,
        textAlign: "center",
        lineHeight: 1.52,
        opacity: 0.97,
        fontWeight: 500,
        maxWidth: "85%",
        letterSpacing: "0.2px",
      }}
    >
      {text}
    </Typography>
  </Stack>
);

const Block = ({ title, children }) => (
  <Box sx={{ width: "100%", mb: 2.6 }}>
    <Typography
      fontWeight={700}
      fontSize={16.7}
      color="#0f4c99"
      sx={{ mb: 2.1, letterSpacing: "0.3px" }}
    >
      {title}
    </Typography>
    <Stack direction="row" flexWrap="wrap" gap={1.9}>
      {children}
    </Stack>
  </Box>
);

const Item = ({ icon, title, desc }) => (
  <Stack direction="row" spacing={2.6} alignItems="flex-start" sx={{ maxWidth: 560 }}>
    {icon}
    <Box>
      <Typography
        fontWeight={700}
        fontSize={15.7}
        color="#0f4c99"
        sx={{ lineHeight: 1.36, mb: 0.5, letterSpacing: "0.2px" }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: 14.6,
          color: "#475569",
          lineHeight: 1.62,
          fontWeight: 400,
          letterSpacing: "0.1px",
        }}
      >
        {desc}
      </Typography>
    </Box>
  </Stack>
);
