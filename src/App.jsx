import { Container } from "@mui/material";
import CvCover from "./components/CvCover";

export default function App() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <CvCover />
    </Container>
  );
}
