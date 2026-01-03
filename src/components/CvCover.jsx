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
import DescriptionIcon from "@mui/icons-material/Description";

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
      {/* Ajuste 2: Reducir maxWidth para eliminar espacio a la derecha */}
      <Paper
        elevation={8}
        sx={{
          width: "100%",
          maxWidth: 900, // Cambiado de 980 a 900 para ajustar el ancho total
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
              src="https://res.cloudinary.com/dqkwc0kf7/image/upload/v1757093856/FB_IMG_1757092624480_hgpu4i.jpg "
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

            <Stack spacing={1} width="100%">
              <Contact icon={<EmailIcon />} text="patogol3535@gmail.com" />
              <Contact icon={<WhatsAppIcon />} text="0997979099" />
              <Contact icon={<LocationOnIcon />} text="Ambato, Ecuador" />
            </Stack>

            <Divider flexItem sx={{ borderColor: "rgba(255,255,255,.3)" }} />

            {/* ================= REDES 2 x 3 ================= */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 1.5,
                width: "100%",
                maxWidth: 160,
                mx: "auto",
              }}
            >
              <Social icon={<EmailIcon />} url="mailto:patogol3535@gmail.com" />
              <Social icon={<WhatsAppIcon />} url="https://wa.me/593997979099 " />
              <Social icon={<LinkedInIcon />} url="https://www.linkedin.com/in/jorge-patricio-santama ría-cherrez-2a73792b2" />
              <Social icon={<GitHubIcon />} url="https://github.com/Patogol35 " />
              <Social icon={<FacebookIcon />} url="https://www.facebook.com/share/1C9RgHAPvL/ " />
              <Social icon={<InstagramIcon />} url="https://www.instagram.com/jorge_patricio_26 " />
            </Box>

            {/* ================= PORTAFOLIO ================= */}
            <Box
              sx={{
                mt: 2,
                textAlign: "center",
              }}
            >
              <Tooltip title="Ver Portafolio Profesional">
                {/* Ajuste 1: Icono de Portafolio con mismo estilo y sin texto */}
                <IconButton
                  href="https://portafoliojorgepatriciosantamariach.vercel.app/ "
                  target="_blank"
                  sx={{
                    color: "#fff", // Mismo color que los otros íconos sociales
                    width: 42, // Mismo tamaño
                    height: 42, // Mismo tamaño
                    "&:hover": {
                      bgcolor: "#e3f2fd", // Efecto hover similar
                      color: "#0d47a1", // Color al hacer hover
                    },
                  }}
                >
                  <DescriptionIcon sx={{ fontSize: 24 }} /> {/* Tamaño del ícono ajustado */}
                </IconButton>
              </Tooltip>
              {/* Texto eliminado */}
            </Box>
          </Stack>
        </Box>

        {/* ================= CONTENT ================= */}
        <Box
          sx={{
            flex: 1,
            /* Ajuste 2: Reducir padding derecho para evitar espacio extra */
            p: { xs: 2.5, md: 3 }, // Cambiado de 4 a 3 en md para reducir el margen derecho
            bgcolor: "#ffffff",
          }}
        >
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
    <Typography sx={{ fontSize: 12.5 }}>{text}</Typography>
  </Stack>
);

const Social = ({ icon, url }) => (
  <Tooltip title={url}>
    <IconButton
      href={url}
      target="_blank"
      sx={{
        color: "#fff",
        width: 42,
        height: 42,
        mx: "auto",
      }}
    >
      {icon}
    </IconButton>
  </Tooltip>
);

const Section = ({ title, children }) => (
  <Box mb={4}>
    <Typography fontWeight={800} fontSize={18} color="#0d47a1">
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
  <Stack direction="row" spacing={1.5}>
    {icon}
    <Box>
      <Typography fontWeight={700}>{title}</Typography>
      <Typography sx={{ fontSize: 13.5, color: "#37474f" }}>
        {desc}
      </Typography>
    </Box>
  </Stack>
);
