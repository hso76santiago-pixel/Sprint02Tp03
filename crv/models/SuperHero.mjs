import mongoose from 'mongoose';

// Definición del esquema: el "molde" de tus datos
const superHeroSchema = new mongoose.Schema({
    nombreSuperHeroe: { type: String, required: true },
    nombreReal: { type: String, required: true },
    edad: { type: Number, min: 0 },
    planetaOrigen: { type: String, default: 'Desconocido' },
    debilidad: String,
    poderes: [String],
    aliados: [String],
    enemigos: [String],
    creador: String,
    createdAt: { type: Date, default: Date.now }
});

// Creación del modelo: la herramienta para interactuar con la DB
// Nota: 'Grupo-XX' es el nombre de la colección en MongoDB. 
// Cámbialo por el nombre de tu grupo si es necesario.cl
const superHero = mongoose.model('SuperHero', superHeroSchema, 'Grupo-13');

export default superHero;