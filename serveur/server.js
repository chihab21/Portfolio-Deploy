import express from "express";
import path from "path";
import cors from 'cors';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());

// Serve CV download endpoint
app.get('/api/download-cv', (req, res) => {
  const filePath = path.join(__dirname, 'files', 'Chihab-Ghlala-CV.pdf');
  
  res.download(filePath, 'Chihab-Ghlala-CV.pdf', (err) => {
    if (err) {
      console.error("Error sending file:", err);
      res.status(500).send("Error downloading file");
    }
  });
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
