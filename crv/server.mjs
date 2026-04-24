// server.mjs
import express from 'express';
import blogRouter from './routers/blog.mjs'; // Importamos el módulo de rutas

const app = express();

// Asignamos las rutas al prefijo '/blogs'
// Esto significa que si en blog.js definiste '/', aquí será '/blogs'
app.use('/blogs', blogRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});