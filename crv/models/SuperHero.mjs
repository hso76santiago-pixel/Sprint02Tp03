
import mongoose from 'mongoose';


// Definición del esquema: el "molde" de tus datos
const SuperHeroSchema = new mongoose.Schema({
    nombreSuperheroe: { type: String, required: true },
    nombreReal: { type: String, required: true },
    edad: { type: Number, min: 0 },
    planetaOrigen: { type: String, default: 'Desconocido' },
    debilidad: String,
    poder: [String],
    aliado: [String],
    enemigo: [String],
    creador: String,
    createdAt: { type: Date, default: Date.now }
});

// Creación del modelo
// Cambiamos 'superHero' por 'SuperHero' (con S mayúscula) para seguir el estándar
const SuperHero = mongoose.model('SuperHero', SuperHeroSchema, 'Grupo-13');

// Exportamos el modelo
export default SuperHero;