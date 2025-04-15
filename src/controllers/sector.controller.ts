import { Request, Response } from 'express';
import { createSectorService, getSectorsService } from '../services/sector.service';

export const createSector = async (req: Request, res: Response) => {
  try {
   
    const newSector = req.body;
    
 
    const result = await createSectorService(newSector);
    
    const sectors = await getSectorsService(); 


    res.status(201).json({
      message: 'Sector creado',
      id: result.id,
      sectors, 
    });
  } catch (error) {
    console.error('Error creando sector:', error);
    res.status(500).json({ error: 'Error al crear el sector' });
  }
};

export const getSectors = async (_req: Request, res: Response) => {
  try {
    // Obtener todos los sectores de la base de datos
    const sectors = await getSectorsService();
    
    // Retornar los sectores en la respuesta
    res.status(200).json({ sectors });
  } catch (error) {
    console.error('Error obteniendo sectores:', error);
    res.status(500).json({ error: 'Error al obtener los sectores' });
  }
};
