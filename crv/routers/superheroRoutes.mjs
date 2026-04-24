
// Al principio de superHeroRoutes.mjs
import express from 'express';
const router = express.Router();



import {
  obtenerTodosLosSuperheroesController,
  obtenerSuperheroesMayoresDe30Controller,
  obtenerSuperheroePorIdController,
  buscarSuperheroesPorAtributoController,
  insertSuperHeroController,
  updateSuperHeroController,
  deleteSuperHeroController,
 
  
} from '../controllers/superHeroController.mjs';
  

// Ruta para obtener todos los héroes
router.get('/', obtenerTodosLosSuperheroesController);

// Ruta para obtener héroes con edad mayor a 30
router.get('/MayoresDe30', obtenerSuperheroesMayoresDe30Controller);

// Ruta para buscar héroes por un atributo y valor específico
router.get('/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);

// Ruta para obtener un héroe específico por su ID
router.get('/heroes/:id', obtenerSuperheroePorIdController);

//rutas para desarrollar punto 1 sprint3//
// GET /api/heroes - Obtener todos los superhéroes

router.get('/', obtenerTodosLosSuperheroesController);

// POST /api/heroes - Insertar un nuevo superhéroe
router.post('/', insertSuperHeroController);
router.put('/id/:id', updateSuperHeroController);
router.delete('/id/:id', deleteSuperHeroController);
router.delete('/nombre/:nombre', deleteSuperHeroController);


// Esta es la parte que te falta: la ruta para crear un nuevo héroe.

// Asegúrate de tener importado tu Modelo al principio del archivo
// import SuperHero from '../models/superHeroModel.mjs'; 

router.post('/', async (req, res) => {
    try {
        const nuevoHeroeData = req.body;
        
        // 1. Creamos una instancia del modelo con los datos recibidos
        // OJO: Asegúrate que los nombres (nombreSuperHeroe, etc) coincidan con Compass
        const nuevoHeroe = new SuperHero(nuevoHeroeData); 
        
        // 2. ESTA es la línea que falta para que aparezca en Compass y en el GET
        await nuevoHeroe.save(); 
        
        console.log('Guardado en BD:', nuevoHeroe.nombreSuperHeroe);

        res.status(201).json({
            mensaje: "Héroe guardado en la base de datos",
            data: nuevoHeroe
        });
    } catch (error) {
        console.error("Error al guardar:", error);
        res.status(400).json({ mensaje: "No se pudo guardar", error: error.message });
    }
});    


export default router;