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
        py: 7,
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
          minHeight: "135vh",
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
          <Stack spacing={5.5} alignItems="center">
            <Avatar
              src="https://res.cloudinary.com/dqkwc0kf7/image/upload/v1757093856/FB_IMG_1757092624480_hgpu4i.jpg"
              sx={{
                width: { xs: 110, md: 140 },
                height: { xs: 110, md: 140 },
                border: "3px solid #fff",
              }}
            />

            {/* ===== NOMBRE Y TÍTULO CON MÁS ESPACIO ===== */}
            <Box textAlign="center" sx={{ lineHeight: 1.3 }}>
              <Typography fontWeight={800} fontSize={19} sx={{ mb: 0.4 }}>
                Jorge Patricio
              </Typography>
              <Typography fontWeight={800} fontSize={19} sx={{ mb: 1.4 }}>
                Santamaría Cherrez
              </Typography>
              <Typography sx={{ fontSize: 13.5, opacity: 0.95, lineHeight: 1.5 }}>
                Máster en Ingeniería de Software
                <br />
                y Sistemas Informáticos
              </Typography>
            </Box>

            <Divider flexItem sx={{ borderColor: "rgba(255,255,255,.45)", width: "85%", my: 1.2 }} />

            {/* ===== CONTACTOS – MÁS SEPARADOS ===== */}
            <Stack spacing={3.4} width="100%" alignItems="center">
              <Contact icon={<EmailIcon />} text="patogol3535@gmail.com" />
              <Contact icon={<WhatsAppIcon />} text="0997979099" />
              <Contact icon={<LocationOnIcon />} text="Ambato, Ecuador" />
              <Contact icon={<FacebookIcon />} text="https://www.facebook.com/jorge.patricio.12" />
              <Contact icon={<InstagramIcon />} text="https://www.instagram.com/jorge_patricio_26" />
              <Contact icon={<GitHubIcon />} text="https://github.com/Patogol35" />
            </Stack>

            <Divider flexItem sx={{ borderColor: "rgba(255,255,255,.45)", width: "85%", my: 1.2 }} />

            <Typography
              variant="body2"
              sx={{
                fontWeight: 600,
                textAlign: "center",
                color: "#fff",
                opacity: 0.95,
                mt: 2.6,
                px: 1,
                fontSize: 13.5,
              }}
            >
              Portafolio Profesional Virtual
            </Typography>
            <Tooltip title="Escanear para ver Portafolio">
              <Box
                component="a"
                href="https://portafoliojorgepatriciosantamariach.vercel.app/"
                target="_blank"
                sx={{ display: "block", mt: 2.2 }}
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
                  }}
                />
              </Box>
            </Tooltip>

            <Box sx={{ mt: 2.6, textAlign: "center" }}>
              <Tooltip title="Ver Portafolio Profesional">
                <IconButton
                  href="https://portafoliojorgepatriciosantamariach.vercel.app/"
                  target="_blank"
                  sx={{
                    color: "#fff",
                    width: 46,
                    height: 46,
                  }}
                >
                  <DescriptionIcon sx={{ fontSize: 27 }} />
                </IconButton>
              </Tooltip>
            </Box>
          </Stack>
        </Box>

        {/* ================= CONTENT ================= */}
        <Box
          sx={{
            flex: 1,
            p: { xs: 4.2, md: 6 },
            bgcolor: "#ffffff",
            pb: 8.5,
          }}
        >
          <Stack spacing={7.2} alignItems="center" sx={{ width: "100%" }}>
            {/* ===== ÁREAS DE CONOCIMIENTO ===== */}
            <Box sx={{ width: "100%", maxWidth: 600 }}>
              <Typography fontWeight={800} fontSize={20} color="#0d47a1" align="center" sx={{ mb: 2.6 }}>
                Áreas de Conocimiento
              </Typography>
              <Divider sx={{ my: 2.6, width: "60%", mx: "auto" }} />
              <Stack spacing={4.7} sx={{ width: "100%" }} alignItems="flex-start">
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

            {/* ===== FORMACIÓN ACADÉMICA ===== */}
            <Box sx={{ width: "100%", maxWidth: 600 }}>
              <Typography fontWeight={800} fontSize={20} color="#0d47a1" align="center" sx={{ mb: 2.6 }}>
                Formación Académica
              </Typography>
              <Divider sx={{ my: 2.6, width: "60%", mx: "auto" }} />
              <Stack spacing={4} sx={{ width: "100%" }} alignItems="flex-start">
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

            {/* ===== EXPERIENCIA PROFESIONAL ===== */}
            <Box sx={{ width: "100%", maxWidth: 600 }}>
              <Typography fontWeight={800} fontSize={20} color="#0d47a1" align="center" sx={{ mb: 2.6 }}>
                Experiencia Profesional
              </Typography>
              <Divider sx={{ my: 2.6, width: "60%", mx: "auto" }} />
              <Stack spacing={4} sx={{ width: "100%" }} alignItems="flex-start">
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
    spacing={1.7}
    alignItems="center"
    justifyContent="center"
    sx={{ width: "100%" }}
  >
    {icon}
    <Typography sx={{ fontSize: 14, textAlign: "center", wordBreak: "break-word", lineHeight: 1.55 }}>
      {text}
    </Typography>
  </Stack>
);

const BlockLeftAligned = ({ title, children }) => (
  <Box sx={{ width: "100%", mb: 2.1 }}>
    <Typography fontWeight={700} mb={1.9} fontSize={15.5}>
      {title}
    </Typography>
    <Stack direction="row" flexWrap="wrap" gap={1.5}>
      {children}
    </Stack>
  </Box>
);

const ItemLeftAligned = ({ icon, title, desc }) => (
  <Stack direction="row" spacing={2.2} alignItems="flex-start" sx={{ maxWidth: 530 }}>
    {icon}
    <Box>
      <Typography fontWeight={700} fontSize={15}>
        {title}
      </Typography>
      <Typography sx={{ fontSize: 14, color: "#37474f", mt: 0.6, lineHeight: 1.62 }}>
        {desc}
      </Typography>
    </Box>
  </Stack>
);
