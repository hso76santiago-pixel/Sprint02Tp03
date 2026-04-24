// routes/usuarios.js
import express from 'express';
const router = express.Router();

// Obtener todos los usuarios
router.get('/', (req, res) => {
    res.send('Aquí está la lista de todos los usuarios');
});

// Obtener un usuario específico por ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Aquí está la información del usuario con ID: ${id}`);
});

// Crear un nuevo usuario
router.post('/', (req, res) => {
    const nuevoUsuario = req.body;
    res.send(
        `Nuevo usuario creado con los datos: ${JSON.stringify(nuevoUsuario)}`
    );
});

// Actualizar un usuario por ID
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const datosActualizados = req.body;
    res.send(
        `Usuario con ID: ${id} ha sido actualizado con los datos: ${JSON.stringify(datosActualizados)}`
    );
});

// Eliminar un usuario por ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Usuario con ID: ${id} ha sido eliminado`);
});

export default router;