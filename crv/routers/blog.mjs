// routes/blog.mjs
import express from 'express';

const router = express.Router();

// Definición de las rutas del blog
router.get('/', (req, res) => res.send('Lista de blogs'));

router.get('/:id', (req, res) => res.send(`Blog con ID: ${req.params.id}`));

router.post('/', (req, res) => res.send('Nuevo blog creado'));

export default router;