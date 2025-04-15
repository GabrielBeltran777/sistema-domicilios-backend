import { Router } from 'express';
import { createSector, getSectors } from '../controllers/sector.controller';

const router = Router();

router.post('/', createSector); 
router.get('/', getSectors);   

export default router;
