"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sector_controller_1 = require("../controllers/sector.controller");
const router = (0, express_1.Router)();
router.post('/', sector_controller_1.createSector); // para crear un nuevo sector
router.get('/', sector_controller_1.getSectors); // para obtener todos los sectores
exports.default = router;
