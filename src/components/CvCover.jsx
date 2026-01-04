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
        py: 6,
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
          minHeight: "125vh",
        }}
      >
        {/* ================= SIDEBAR ================= */}
        <Box
          sx={{
            width: { xs: 220, sm: 260, md: 300 },
            minWidth: { xs: 220, sm: 260 },
            bgcolor: "#0d47a1",
            color: "#fff",
            p: { xs: 3.2, md: 4.8 },
            flexShrink: 0,
          }}
        >
          <Stack spacing={4.2} alignItems="center">
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
              <Typography sx={{ mt: 1.6, fontSize: 12.5, opacity: 0.95, lineHeight: 1.4 }}>
                Máster en Ingeniería de Software
                <br />
                y Sistemas Informáticos
              </Typography>
            </Box>
            <Divider flexItem sx={{ borderColor: "rgba(255,255,255,.4)", width: "80%", my: 0.8 }} />

            <Stack spacing={2.9} width="100%" alignItems="center">
              <Contact icon={<EmailIcon />} text="patogol3535@gmail.com" />
              <Contact icon={<WhatsAppIcon />} text="0997979099" />
              <Contact icon={<LocationOnIcon />} text="Ambato, Ecuador" />
              <Contact icon={<FacebookIcon />} text="https://www.facebook.com/jorge.patricio.12" />
              <Contact icon={<InstagramIcon />} text="https://www.instagram.com/jorge_patricio_26" />
              <Contact icon={<GitHubIcon />} text="https://github.com/Patogol35" />
            </Stack>

            <Divider flexItem sx={{ borderColor: "rgba(255,255,255,.4)", width: "80%", my: 0.8 }} />

            <Typography
              variant="body2"
              sx={{
                fontWeight: 600,
                textAlign: "center",
                color: "#fff",
                opacity: 0.95,
                mt: 2.2,
                px: 1,
                fontSize: 13,
              }}
            >
              Portafolio Profesional Virtual
            </Typography>
            <Tooltip title="Escanear para ver Portafolio">
              <Box
                component="a"
                href="https://portafoliojorgepatriciosantamariach.vercel.app/"
                target="_blank"
                sx={{ display: "block", mt: 1.6 }}
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

            <Box sx={{ mt: 2.2, textAlign: "center" }}>
              <Tooltip title="Ver Portafolio Profesional">
                <IconButton
                  href="https://portafoliojorgepatriciosantamariach.vercel.app/"
                  target="_blank"
                  sx={{
                    color: "#fff",
                    width: 44,
                    height: 44,
                  }}
                >
                  <DescriptionIcon sx={{ fontSize: 26 }} />
                </IconButton>
              </Tooltip>
            </Box>
          </Stack>
        </Box>

        {/* ================= CONTENT ================= */}
        <Box
          sx={{
            flex: 1,
            p: { xs: 3.7, md: 5.2 },
            bgcolor: "#ffffff",
            pb: 6.5,
          }}
        >
          <Stack spacing={6.2} alignItems="center" sx={{ width: "100%" }}>
            <Box sx={{ width: "100%", maxWidth: 600 }}>
              <Typography fontWeight={800} fontSize={19} color="#0d47a1" align="center" sx={{ mb: 2.2 }}>
                Áreas de Conocimiento
              </Typography>
              <Divider sx={{ my: 2.2, width: "60%", mx: "auto" }} />
              <Stack spacing={3.8} sx={{ width: "100%" }} alignItems="flex-start">
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

            <Box sx={{ width: "100%", maxWidth: 600 }}>
              <Typography fontWeight={800} fontSize={19} color="#0d47a1" align="center" sx={{ mb: 2.2 }}>
                Formación Académica
              </Typography>
              <Divider sx={{ my: 2.2, width: "60%", mx: "auto" }} />
              <Stack spacing={3.2} sx={{ width: "100%" }} alignItems="flex-start">
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

            <Box sx={{ width: "100%", maxWidth: 600 }}>
              <Typography fontWeight={800} fontSize={19} color="#0d47a1" align="center" sx={{ mb: 2.2 }}>
                Experiencia Profesional
              </Typography>
              <Divider sx={{ my: 2.2, width: "60%", mx: "auto" }} />
              <Stack spacing={3.2} sx={{ width: "100%" }} alignItems="flex-start">
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
    spacing={1.4}
    alignItems="center"
    justifyContent="center"
    sx={{ width: "100%" }}
  >
    {icon}
    <Typography sx={{ fontSize: 13.5, textAlign: "center", wordBreak: "break-word", lineHeight: 1.45 }}>
      {text}
    </Typography>
  </Stack>
);

const BlockLeftAligned = ({ title, children }) => (
  <Box sx={{ width: "100%", mb: 1.6 }}>
    <Typography fontWeight={700} mb={1.6} fontSize={15}>
      {title}
    </Typography>
    <Stack direction="row" flexWrap="wrap" gap={1.2}>
      {children}
    </Stack>
  </Box>
);

const ItemLeftAligned = ({ icon, title, desc }) => (
  <Stack direction="row" spacing={1.9} alignItems="flex-start" sx={{ maxWidth: 520 }}>
    {icon}
    <Box>
      <Typography fontWeight={700} fontSize={14.5}>
        {title}
      </Typography>
      <Typography sx={{ fontSize: 13.5, color: "#37474f", mt: 0.4, lineHeight: 1.55 }}>
        {desc}
      </Typography>
    </Box>
  </Stack>
);
