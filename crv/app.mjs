import SuperHero from './models/SuperHero.mjs';

import express from 'express';


import { connectDB } from './config/dbConfig.mjs';

import superHeroRoutes from './routers/superHeroRoutes.mjs';

import blogRouter from './routers/blog.mjs'; // Importamos el módulo de rutas


const app = express();

const PORT = process.env.PORT = 3000;

app.use(express.json());

// Conexión a MongoDB
connectDB();

// LA CLAVE: El nombre debe ser EXACTAMENTE igual al del import de arriba

app.use('/api/heroes', superHeroRoutes);
app.use('/api/blogs', blogRouter);


app.use((req, res) => {
  res.status(404).send({ mensaje: "Ruta no encontrada" });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});



