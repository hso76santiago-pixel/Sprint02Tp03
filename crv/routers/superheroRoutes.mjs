import express from 'express';
import {
  obtenerSuperheroePorIdController,
  obtenerTodosLosSuperheroesController,
  buscarSuperheroesPorAtributoController,
  obtenerSuperheroesMayoresDe30Controller
} from  '../controllers/superheroController.mjs';

const router = express.Router();

// Ruta para obtener todos los héroes
router.get('/heroes', obtenerTodosLosSuperheroesController);

// Ruta para obtener un héroe específico por su ID
router.get('/heroes/:id', obtenerSuperheroePorIdController);

// Ruta para buscar héroes por un atributo y valor específico
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);

// Ruta para obtener héroes con edad mayor a 30
router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller);

export default router;