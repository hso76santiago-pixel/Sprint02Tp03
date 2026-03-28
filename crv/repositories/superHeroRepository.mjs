import SuperHero from '../models/SuperHero.mjs';
import IRepository from './IRepository.mjs';

class superHeroRepository extends IRepository {
    
    async obtenerPorId(id) {
        return await SuperHero.findById(id);
    }

    async obtenerTodos() {
        return await SuperHero.find({});
    }

    async buscarPorAtributo(atributo, valor) {
        const query = { [atributo]: new RegExp(valor, 'i') }; // 'i' para que no importe mayúsculas/minúsculas
        return await SuperHero.find(query);
    }

    async obtenerMayoresDe30() {
        return await SuperHero.find({ 
            edad: { $gt: 30 }, 
            planetaOrigen: 'Tierra' 
        });
    }
}

// Exportamos una instancia de la clase (Singleton) para usarla en los controladores
export default new superHeroRepository();