import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sectorRoutes from './routes/sector.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors({
  origin: ['http://localhost:5173', 'https://sistema-domicilios-frontend.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.json());

app.use('/api/sectors', sectorRoutes);

app.get('/', (_req, res) => {
  res.send('API de domicilios por sector funcionando 🏍️');
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
