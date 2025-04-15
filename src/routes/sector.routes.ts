import { Router } from 'express';
import { createSector, getSectors } from '../controllers/sector.controller';

const router = Router();

router.post('/', createSector); // para crear un nuevo sector
router.get('/', getSectors);    // para obtener todos los sectores

export default router;
