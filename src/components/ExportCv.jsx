import { useRef } from "react";
import { Button, Box } from "@mui/material";
import { useReactToPrint } from "react-to-print";
import CvCover from "./CvCover";

export default function ExportCv() {
  const cvRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => cvRef.current,
    documentTitle: "CV_Jorge_Patricio_Santamaria",
  });

  return (
    <Box sx={{ textAlign: "center", mt: 2 }}>
      <Button variant="contained" onClick={handlePrint} sx={{ mb: 2 }}>
        Exportar a PDF
      </Button>

      <div ref={cvRef}>
        <CvCover />
      </div>
    </Box>
  );
      }
