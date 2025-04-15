import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sectorRoutes from './routes/sector.routes';

// Cargar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar CORS con orígenes permitidos
app.use(cors({
  origin: ['http://localhost:5173', 'https://sistema-domicilios-frontend.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api/sectors', sectorRoutes);

// Ruta base
app.get('/', (_req, res) => {
  res.send('API de domicilios por sector funcionando 🏍️');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
