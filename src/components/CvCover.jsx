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
      bgcolor: "#e3f2fd",
      color: "#0d47a1",
      fontWeight: 600,
      borderRadius: "6px",
      height: 26,
      fontSize: 12,
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
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
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
          flexDirection: "row",
        }}
      >
        {/* ================= SIDEBAR ================= */}
        <Box
          sx={{
            width: { xs: 220, sm: 260, md: 300 },
            minWidth: { xs: 220, sm: 260 },
            bgcolor: "#0d47a1",
            color: "#fff",
            p: { xs: 2.5, md: 4 },
            flexShrink: 0,
          }}
        >
          <Stack spacing={3} alignItems="center">
            <Avatar
              src="https://res.cloudinary.com/dqkwc0kf7/image/upload/v1757093856/FB_IMG_1757092624480_hgpu4i.jpg"
              sx={{
                width: { xs: 110, md: 140 },
                height: { xs: 110, md: 140 },
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
              <Typography sx={{ mt: 1, fontSize: 12, opacity: 0.9 }}>
                Máster en Ingeniería de Software
                <br />
                y Sistemas Informáticos
              </Typography>
            </Box>
            <Divider flexItem sx={{ borderColor: "rgba(255,255,255,.3)" }} />

            {/* ===== CONTACTOS CENTRADOS (solo texto, sin enlaces) – con más separación ===== */}
            <Stack spacing={2.2} width="100%" alignItems="center">
              <Contact icon={<EmailIcon />} text="patogol3535@gmail.com" />
              <Contact icon={<WhatsAppIcon />} text="0997979099" />
              <Contact icon={<LocationOnIcon />} text="Ambato, Ecuador" />
              <Contact icon={<FacebookIcon />} text="https://www.facebook.com/jorge.patricio.12" />
              <Contact icon={<InstagramIcon />} text="https://www.instagram.com/jorge_patricio_26" />
              <Contact icon={<GitHubIcon />} text="https://github.com/Patogol35" />
            </Stack>

            <Divider flexItem sx={{ borderColor: "rgba(255,255,255,.3)" }} />

            {/* ======== QR CODE ======== */}
            <Tooltip title="Escanear para ver Portafolio">
              <Box
                component="a"
                href="https://portafoliojorgepatriciosantamariach.vercel.app/"
                target="_blank"
                sx={{ display: "block", mt: 1 }}
              >
                <Box
                  component="img"
                  src="/qr-cv.png"
                  alt="QR Portafolio"
                  sx={{
                    width: 140,
                    height: 140,
                    borderRadius: 2,
                    bgcolor: "#fff",
                    p: 1,
                  }}
                />
              </Box>
            </Tooltip>

            <Box sx={{ mt: 2, textAlign: "center" }}>
              <Tooltip title="Ver Portafolio Profesional">
                <IconButton
                  href="https://portafoliojorgepatriciosantamariach.vercel.app/"
                  target="_blank"
                  sx={{
                    color: "#fff",
                    width: 42,
                    height: 42,
                    "&:hover": {
                      bgcolor: "#e3f2fd",
                      color: "#0d47a1",
                    },
                  }}
                >
                  <DescriptionIcon sx={{ fontSize: 24 }} />
                </IconButton>
              </Tooltip>
            </Box>
          </Stack>
        </Box>

        {/* ================= CONTENT ================= */}
        <Box
          sx={{
            flex: 1,
            p: { xs: 2.5, md: 3 },
            bgcolor: "#ffffff",
          }}
        >
          <Stack spacing={4} alignItems="center" sx={{ width: "100%" }}>
            {/* ===== ÁREAS DE CONOCIMIENTO - ALINEADO A LA IZQUIERDA ===== */}
            <Box sx={{ width: "100%", maxWidth: 600 }}>
              <Typography fontWeight={800} fontSize={18} color="#0d47a1" align="center">
                Áreas de Conocimiento
              </Typography>
              <Divider sx={{ my: 1.5, width: "60%", mx: "auto" }} />
              <Stack spacing={2.5} sx={{ width: "100%" }} alignItems="flex-start">
                <BlockLeftAligned title="Desarrollo de Software">
                  {["PHP", "React", "Spring Boot", "Python"].map((s) => (
                    <SkillChip key={s} label={s} />
                  ))}
                </BlockLeftAligned>

                <BlockLeftAligned title="Cloud">
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
                  {["Postman", "Microsoft Office", "Máquinas Virtuales", "Scrum", "AnyDesk"].map((s) => (
                    <SkillChip key={s} label={s} />
                  ))}
                </BlockLeftAligned>
              </Stack>
            </Box>

            {/* ===== FORMACIÓN ACADÉMICA - ALINEADO A LA IZQUIERDA ===== */}
            <Box sx={{ width: "100%", maxWidth: 600 }}>
              <Typography fontWeight={800} fontSize={18} color="#0d47a1" align="center">
                Formación Académica
              </Typography>
              <Divider sx={{ my: 1.5, width: "60%", mx: "auto" }} />
              <Stack spacing={2.5} sx={{ width: "100%" }} alignItems="flex-start">
                <ItemLeftAligned
                  icon={<SchoolIcon color="primary" />}
                  title="Universidad Internacional de La Rioja (UNIR)"
                  desc="Maestría en Ingeniería de Software y Sistemas Informáticos"
                />
                <ItemLeftAligned
                  icon={<SchoolIcon color="primary" />}
                  title="Universidad Indoamérica"
                  desc="Ingeniería de Sistemas"
                />
              </Stack>
            </Box>

            {/* ===== EXPERIENCIA PROFESIONAL - YA AJUSTADO ANTERIORMENTE ===== */}
            <Box sx={{ width: "100%", maxWidth: 600 }}>
              <Typography fontWeight={800} fontSize={18} color="#0d47a1" align="center">
                Experiencia Profesional
              </Typography>
              <Divider sx={{ my: 1.5, width: "60%", mx: "auto" }} />
              <Stack spacing={2.5} sx={{ width: "100%" }} alignItems="flex-start">
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

// Componente Contacto SIN enlaces – solo ícono + texto
const Contact = ({ icon, text }) => (
  <Stack
    direction="row"
    spacing={1.2}
    alignItems="center"
    justifyContent="center"
    sx={{ width: "100%" }}
  >
    {icon}
    <Typography sx={{ fontSize: 13, textAlign: "center", wordBreak: "break-all" }}>
      {text}
    </Typography>
  </Stack>
);

// Bloque de habilidades alineado a la izquierda
const BlockLeftAligned = ({ title, children }) => (
  <Box sx={{ width: "100%" }}>
    <Typography fontWeight={700} mb={1}>
      {title}
    </Typography>
    <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: '4px' }}>
      {children}
    </Stack>
  </Box>
);

// Ítem educativo/profesional alineado a la izquierda
const ItemLeftAligned = ({ icon, title, desc }) => (
  <Stack direction="row" spacing={1.5} alignItems="flex-start" sx={{ maxWidth: 500 }}>
    {icon}
    <Box>
      <Typography fontWeight={700}>{title}</Typography>
      <Typography sx={{ fontSize: 13.5, color: "#37474f" }}>
        {desc}
      </Typography>
    </Box>
  </Stack>
);
