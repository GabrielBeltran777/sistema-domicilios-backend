"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const sector_routes_1 = __importDefault(require("./routes/sector.routes"));
// Cargar variables de entorno desde el archivo .env
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Rutas
app.use('/api/sectors', sector_routes_1.default);
// Ruta base
app.get('/', (_req, res) => {
    res.send('API de domicilios por sector funcionando 🏍️');
});
// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
