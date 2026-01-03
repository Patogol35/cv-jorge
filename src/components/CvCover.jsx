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
        fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
      }}
    >
      <Paper
        elevation={8}
        sx={{
          width: "100%",
          maxWidth: 980,
          borderRadius: 3,
          overflow: "hidden",
          display: "flex",
        }}
      >
        {/* ================= SIDEBAR ================= */}
        <Box
          sx={{
            width: 300,
            bgcolor: "#0d47a1",
            color: "#fff",
            p: 4,
            flexShrink: 0,
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
              <Typography fontWeight={800} fontSize={20} letterSpacing={0.5}>
                Jorge Patricio
              </Typography>
              <Typography fontWeight={800} fontSize={20} letterSpacing={0.5}>
                Santamaría Cherrez
              </Typography>
              <Typography
                sx={{
                  mt: 1,
                  fontSize: 13,
                  opacity: 0.9,
                  lineHeight: 1.4,
                }}
              >
                Máster en Ingeniería de Software
                <br />
                y Sistemas Informáticos
              </Typography>
            </Box>

            <Divider flexItem sx={{ borderColor: "rgba(255,255,255,.3)" }} />

            <Stack spacing={1} width="100%">
              <Contact icon={<EmailIcon />} text="patogol3535@gmail.com" />
              <Contact icon={<WhatsAppIcon />} text="0997979099" />
              <Contact icon={<LocationOnIcon />} text="Ambato, Ecuador" />
            </Stack>

            <Divider flexItem sx={{ borderColor: "rgba(255,255,255,.3)" }} />

            {/* REDES */}
            <Stack direction="row" spacing={1}>
              <Social icon={<EmailIcon />} url="mailto:patogol3535@gmail.com" />
              <Social
                icon={<WhatsAppIcon />}
                url="https://wa.me/593997979099"
              />
              <Social
                icon={<LinkedInIcon />}
                url="https://www.linkedin.com/in/jorge-patricio-santamaría-cherrez-2a73792b2"
              />
              <Social icon={<GitHubIcon />} url="https://github.com/Patogol35" />
              <Social
                icon={<FacebookIcon />}
                url="https://www.facebook.com/share/1C9RgHAPvL/"
              />
              <Social
                icon={<InstagramIcon />}
                url="https://www.instagram.com/jorge_patricio_26"
              />
            </Stack>

            {/* QR */}
            <Box
              sx={{
                mt: 2,
                bgcolor: "#fff",
                p: 1.5,
                borderRadius: 2,
                textAlign: "center",
              }}
            >
              <Box
                component="img"
                src="/qr-cv.png"
                alt="QR CV"
                sx={{
                  width: 120,
                  height: 120,
                  display: "block",
                  mx: "auto",
                }}
              />
              <Typography
                sx={{
                  mt: 1,
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#0d47a1",
                  letterSpacing: 0.6,
                  textTransform: "uppercase",
                }}
              >
                Portafolio Virtual
              </Typography>
            </Box>
          </Stack>
        </Box>

        {/* ================= CONTENT ================= */}
        <Box sx={{ flex: 1, p: 4, bgcolor: "#ffffff" }}>
          <Section title="Áreas de Conocimiento">
            <Block title="Desarrollo de Software">
              {["PHP", "React", "Spring Boot", "Python"].map((s) => (
                <SkillChip key={s} label={s} />
              ))}
            </Block>

            <Block title="Cloud">
              {["Vercel", "Render", "AWS"].map((s) => (
                <SkillChip key={s} label={s} />
              ))}
            </Block>

            <Block title="Bases de Datos">
              {["MySQL", "PostgreSQL", "MongoDB", "Elasticsearch"].map((s) => (
                <SkillChip key={s} label={s} />
              ))}
            </Block>

            <Block title="Otras Tecnologías">
              {[
                "Postman",
                "Microsoft Office",
                "Máquinas Virtuales",
                "Scrum",
                "AnyDesk",
              ].map((s) => (
                <SkillChip key={s} label={s} />
              ))}
            </Block>
          </Section>

          <Section title="Formación Académica">
            <Item
              icon={<SchoolIcon color="primary" />}
              title="Universidad Internacional de La Rioja (UNIR)"
              desc="Maestría en Ingeniería de Software y Sistemas Informáticos"
            />
            <Item
              icon={<SchoolIcon color="primary" />}
              title="Universidad Indoamérica"
              desc="Ingeniería de Sistemas"
            />
          </Section>

          <Section title="Experiencia Profesional">
            <Item
              icon={<WorkIcon color="primary" />}
              title="Docente de Informática"
              desc="Formación técnica en informática y tecnologías digitales."
            />
            <Item
              icon={<WorkIcon color="primary" />}
              title="Desarrollador de Aplicaciones"
              desc="Diseño y desarrollo de soluciones digitales eficientes."
            />
            <Item
              icon={<WorkIcon color="primary" />}
              title="Desarrollador de Aulas Virtuales"
              desc="Desarrollo e implementación de plataformas educativas virtuales."
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

const Contact = ({ icon, text }) => (
  <Stack direction="row" spacing={1.5} alignItems="center">
    {icon}
    <Typography
      sx={{
        fontSize: 13,
        fontWeight: 500,
        opacity: 0.95,
      }}
    >
      {text}
    </Typography>
  </Stack>
);

const Social = ({ icon, url }) => (
  <Tooltip title={url}>
    <IconButton href={url} target="_blank" sx={{ color: "#fff" }}>
      {icon}
    </IconButton>
  </Tooltip>
);

const Section = ({ title, children }) => (
  <Box mb={4}>
    <Typography
      sx={{
        fontWeight: 800,
        fontSize: 18,
        letterSpacing: 0.8,
        color: "#0d47a1",
      }}
    >
      {title}
    </Typography>
    <Divider sx={{ my: 1.5 }} />
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

const Item = ({ icon, title, desc }) => (
  <Stack direction="row" spacing={1.5} alignItems="flex-start">
    {icon}
    <Box>
      <Typography fontWeight={700}>{title}</Typography>
      <Typography
        sx={{
          fontSize: 13.5,
          color: "#37474f",
          lineHeight: 1.5,
        }}
      >
        {desc}
      </Typography>
    </Box>
  </Stack>
);
