"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSectors = exports.createSector = void 0;
const createSector = (req, res) => {
    // Lógica temporal
    res.status(201).json({ message: 'Sector creado (mock)' });
};
exports.createSector = createSector;
const getSectors = (req, res) => {
    // Lógica temporal
    res.status(200).json({ sectors: [] });
};
exports.getSectors = getSectors;
