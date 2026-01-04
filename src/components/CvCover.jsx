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
SKILL CHIP
========================= */
const SkillChip = ({ label }) => (
  <Chip
    label={label}
    size="small"
    sx={{
      bgcolor: "#eef6ff",
      color: "#0d47a1",
      fontWeight: 600,
      borderRadius: "8px",
      height: 28,
      fontSize: 13,
      px: 1,
    }}
  />
);

/* =========================
HORIZONTAL LINE COMPONENT
========================= */
const SectionDivider = ({ width = "70%" }) => (
  <Box
    sx={{
      height: "1px",
      width: width,
      bgcolor: "#cbdff0",
      my: 2.8,
      mx: "auto",
      borderRadius: "1px",
    }}
  />
);

export default function CvCover() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f8fafc",
        display: "flex",
        justifyContent: "center",
        py: 7,
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: "100%",
          maxWidth: 920,
          borderRadius: 3,
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          minHeight: "135vh",
          boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
        }}
      >
        {/* ================= SIDEBAR ================= */}
        <Box
          sx={{
            width: { xs: 220, sm: 260, md: 300 },
            minWidth: { xs: 220, sm: 260 },
            bgcolor: "#0d47a1",
            color: "#fff",
            p: { xs: 3.8, md: 5.5 },
            flexShrink: 0,
          }}
        >
          <Stack spacing={5.6} alignItems="center">
            <Avatar
              src="https://res.cloudinary.com/dqkwc0kf7/image/upload/v1757093856/FB_IMG_1757092624480_hgpu4i.jpg"
              sx={{
                width: { xs: 110, md: 140 },
                height: { xs: 110, md: 140 },
                border: "3px solid #fff",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              }}
            />

            <Box textAlign="center" sx={{ lineHeight: 1.35 }}>
              <Typography fontWeight={800} fontSize={20.5} sx={{ mb: 0.6 }}>
                Jorge Patricio
              </Typography>
              <Typography fontWeight={800} fontSize={20.5} sx={{ mb: 1.6 }}>
                Santamaría Cherrez
              </Typography>
              <Typography sx={{ fontSize: 14, opacity: 0.94, lineHeight: 1.55 }}>
                Máster en Ingeniería de Software
                <br />
                y Sistemas Informáticos
              </Typography>
            </Box>

            {/* Línea sutil en sidebar */}
            <Box sx={{ height: "1px", width: "85%", bgcolor: "rgba(255,255,255,0.35)", my: 1.3 }} />

            <Stack spacing={3.6} width="100%" alignItems="center">
              <Contact icon={<EmailIcon />} text="patogol3535@gmail.com" />
              <Contact icon={<WhatsAppIcon />} text="0997979099" />
              <Contact icon={<LocationOnIcon />} text="Ambato, Ecuador" />
              <Contact icon={<FacebookIcon />} text="facebook.com/jorge.patricio.12" />
              <Contact icon={<InstagramIcon />} text="instagram.com/jorge_patricio_26" />
              <Contact icon={<GitHubIcon />} text="github.com/Patogol35" />
            </Stack>

            <Box sx={{ height: "1px", width: "85%", bgcolor: "rgba(255,255,255,0.35)", my: 1.3 }} />

            <Typography
              variant="body2"
              sx={{
                fontWeight: 600,
                textAlign: "center",
                color: "#fff",
                opacity: 0.93,
                mt: 2.8,
                px: 1,
                fontSize: 14,
              }}
            >
              Portafolio Profesional
            </Typography>
            <Tooltip title="Escanear para ver Portafolio">
              <Box
                component="a"
                href="https://portafoliojorgepatriciosantamariach.vercel.app/"
                target="_blank"
                sx={{ display: "block", mt: 2.4 }}
              >
                <Box
                  component="img"
                  src="/qr-cv.png"
                  alt="QR Portafolio"
                  sx={{
                    width: 120,
                    height: 120,
                    borderRadius: 2,
                    bgcolor: "#fff",
                    p: 1,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  }}
                />
              </Box>
            </Tooltip>

            <Box sx={{ mt: 2.8, textAlign: "center" }}>
              <Tooltip title="Ver Portafolio">
                <IconButton
                  href="https://portafoliojorgepatriciosantamariach.vercel.app/"
                  target="_blank"
                  sx={{
                    color: "#fff",
                    width: 48,
                    height: 48,
                    "&:hover": {
                      bgcolor: "rgba(255,255,255,0.15)",
                    },
                  }}
                >
                  <DescriptionIcon sx={{ fontSize: 28 }} />
                </IconButton>
              </Tooltip>
            </Box>
          </Stack>
        </Box>

        {/* ================= CONTENT ================= */}
        <Box
          sx={{
            flex: 1,
            p: { xs: 4.5, md: 6.4 },
            bgcolor: "#ffffff",
            pb: 9.5,
          }}
        >
          <Stack spacing={7.8} alignItems="center" sx={{ width: "100%" }}>
            {/* ===== ÁREAS DE CONOCIMIENTO ===== */}
            <Box sx={{ width: "100%", maxWidth: 600 }}>
              <Typography fontWeight={800} fontSize={21.5} color="#0d47a1" align="center" sx={{ mb: 1.8 }}>
                Áreas de Conocimiento
              </Typography>
              <SectionDivider width="70%" />
              <Stack spacing={5.2} sx={{ width: "100%" }} alignItems="flex-start">
                <BlockLeftAligned title="Desarrollo de Software">
                  {["PHP", "React", "Spring Boot", "Python"].map((s) => (
                    <SkillChip key={s} label={s} />
                  ))}
                </BlockLeftAligned>

                <BlockLeftAligned title="Cloud & Hosting">
                  {["Vercel", "Render", "AWS"].map((s) => (
                    <SkillChip key={s} label={s} />
                  ))}
                </BlockLeftAligned>

                <BlockLeftAligned title="Bases de Datos">
                  {["MySQL", "PostgreSQL", "MongoDB", "Elasticsearch"].map((s) => (
                    <SkillChip key={s} label={s} />
                  ))}
                </BlockLeftAligned>

                <BlockLeftAligned title="Otras Tecnologías">
                  {["Postman", "Linux", "Scrum", "AnyDesk", "VM"].map((s) => (
                    <SkillChip key={s} label={s} />
                  ))}
                </BlockLeftAligned>
              </Stack>
            </Box>

            {/* ===== FORMACIÓN ACADÉMICA ===== */}
            <Box sx={{ width: "100%", maxWidth: 600 }}>
              <Typography fontWeight={800} fontSize={21.5} color="#0d47a1" align="center" sx={{ mb: 1.8 }}>
                Formación Académica
              </Typography>
              <SectionDivider width="70%" />
              <Stack spacing={4.4} sx={{ width: "100%" }} alignItems="flex-start">
                <ItemLeftAligned
                  icon={<SchoolIcon color="primary" />}
                  title="Universidad Internacional de La Rioja (UNIR)"
                  desc="Máster en Ingeniería de Software y Sistemas Informáticos"
                />
                <ItemLeftAligned
                  icon={<SchoolIcon color="primary" />}
                  title="Universidad Indoamérica"
                  desc="Ingeniería de Sistemas"
                />
              </Stack>
            </Box>

            {/* ===== EXPERIENCIA PROFESIONAL ===== */}
            <Box sx={{ width: "100%", maxWidth: 600 }}>
              <Typography fontWeight={800} fontSize={21.5} color="#0d47a1" align="center" sx={{ mb: 1.8 }}>
                Experiencia Profesional
              </Typography>
              <SectionDivider width="70%" />
              <Stack spacing={4.4} sx={{ width: "100%" }} alignItems="flex-start">
                <ItemLeftAligned
                  icon={<WorkIcon color="primary" />}
                  title="Docente de Informática"
                  desc="Formación técnica en informática y tecnologías digitales."
                />
                <ItemLeftAligned
                  icon={<WorkIcon color="primary" />}
                  title="Desarrollador de Aplicaciones"
                  desc="Diseño y desarrollo de soluciones digitales eficientes."
                />
                <ItemLeftAligned
                  icon={<WorkIcon color="primary" />}
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
SUB COMPONENTS
========================= */

const Contact = ({ icon, text }) => (
  <Stack
    direction="row"
    spacing={1.9}
    alignItems="center"
    justifyContent="center"
    sx={{ width: "100%" }}
  >
    {icon}
    <Typography sx={{ fontSize: 14.5, textAlign: "center", wordBreak: "break-word", lineHeight: 1.6, opacity: 0.95 }}>
      {text}
    </Typography>
  </Stack>
);

const BlockLeftAligned = ({ title, children }) => (
  <Box sx={{ width: "100%", mb: 2.3 }}>
    <Typography fontWeight={700} mb={2} fontSize={16} color="#1e3a8a">
      {title}
    </Typography>
    <Stack direction="row" flexWrap="wrap" gap={1.7}>
      {children}
    </Stack>
  </Box>
);

const ItemLeftAligned = ({ icon, title, desc }) => (
  <Stack direction="row" spacing={2.4} alignItems="flex-start" sx={{ maxWidth: 540 }}>
    {icon}
    <Box>
      <Typography fontWeight={700} fontSize={15.5} color="#1e3a8a">
        {title}
      </Typography>
      <Typography sx={{ fontSize: 14.5, color: "#475569", mt: 0.6, lineHeight: 1.65 }}>
        {desc}
      </Typography>
    </Box>
  </Stack>
);
