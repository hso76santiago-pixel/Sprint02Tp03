
import SuperHero from '../models/SuperHero.mjs';

import { 
    obtenerSuperheroePorId,
    obtenerTodosLosSuperheroes,
    buscarSuperheroesPorAtributo,
    obtenerSuperheroesMayoresDe30,
     
} from  '../services/superheroesService.mjs';

// aqui estoy renderizando
import { 
    renderizarSuperheroe, 
    renderizarListaSuperheroes 
} from '../views/responseView.mjs';

export async function buscarSuperheroesPorAtributoController(req, res) {
    try {
        let { atributo, valor } = req.params;

        // Si el atributo es 'Edad', convertimos el valor de texto a número
        if (atributo === 'edad') {
            valor = Number(valor);
        }

      
        // Llamamos al servicio para buscar en la DB
        console.log("Iniciando búsqueda...");
        const heroes = await buscarSuperheroesPorAtributo(atributo, valor);
        console.log("Búsqueda finalizada, héroes encontrados:", heroes.length);
        
        if (heroes.length === 0) {
            return res.status(404).send({ mensaje: "No se encontraron heroes con ese atributo" });
        }

        // Formateamos la lista para la vista
        const heroesFormateados = renderizarListaSuperheroes(heroes);
        res.status(200).json(heroesFormateados);
    } catch (error) {
        res.status(500).send({ mensaje: "Error en la búsqueda", error: error.message });
    }
}


export async function obtenerSuperheroePorIdController(req, res) {
    try {
        const { id } = req.params;
        const superheroe = await obtenerSuperheroePorId(id);
        if (!superheroe) {
            return res.status(404).send({ mensaje: 'Superhéroe no encontrado' });
        }
        const superheroeFormateado = renderizarSuperheroe(superheroe);
        res.status(200).json(superheroeFormateado);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al obtener el superhéroe', error: error.message });
    }
}


export async function obtenerTodosLosSuperheroesController(req, res) {
    try {
        const superheroes = await obtenerTodosLosSuperheroes();
        
// hasta aqui funciona la edad//
        console.log(superheroes);

        const superheroesFormateados = renderizarListaSuperheroes(superheroes);

        //aqui no renderiza la edad 
        
        console.log(superheroesFormateados);

        res.status(200).json(superheroesFormateados);
    } catch (error) {
        res.status(500).send({ 
            mensaje: 'Error al obtener los superheroes', 
            error: error.message 
        });
    }
}

export async function obtenerSuperheroesMayoresDe30Controller(req, res) {
    try {
        const superheroes = await obtenerSuperheroesMayoresDe30();
        if (superheroes.length === 0) {
            return res.status(404).send({ mensaje: 'No se encontraron superheroes mayores de 30 años' });
        }
        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al obtener superheroes mayores de 30', error: error.message });
    }
}

// este codigo se Agrego para agrear un post esto en superHeroController.mjs si no está
export async function insertSuperHeroController(req, res) {
    try {
        const nuevoHeroe = new SuperHero(req.body);
        await nuevoHeroe.save();
        res.status(201).send({ mensaje: "Guardado con éxito", datos: nuevoHeroe });
    } catch (error) {
        res.status(400).send({ mensaje: "Error al guardar", error: error.message });
    }
}

// este codigo se Agrego para actualizar un put esto en superHeroController.mjs si no está

export async function updateSuperHeroController(req, res) {
    const { id } = req.params;
    const datosActualizados = req.body;

    try {
        // El tercer parámetro { new: true } es vital para ver los cambios
        const heroe = await SuperHero.findByIdAndUpdate(id, datosActualizados, { new: true });

        if (!heroe) {
            // SIEMPRE hay que enviar una respuesta, incluso si falla
            return res.status(404).send({ mensaje: "Héroe no encontrado" });
        }

        // Si sale bien, enviamos el 200 y el objeto
        return res.status(200).send({ mensaje: "Actualizado con éxito", datos: heroe });

    } catch (error) {
        // Si hay error de servidor, enviamos el 500
        return res.status(500).send({ mensaje: "Error interno", error: error.message });
    }
}


// Función para eliminar un superhéroe por ID
export async function deleteSuperHeroController(req, res) {
    const { id } = req.params; // Capturamos el ID que viene en la URL
    try {
        const heroeEliminado = await SuperHero.findByIdAndDelete(id);

        if (!heroeEliminado) {
            return res.status(404).send({ mensaje: "No se encontró el héroe para eliminar" });
        }

        res.status(200).send({ mensaje: "Héroe eliminado correctamente", datos: heroeEliminado });
    } catch (error) {
        res.status(500).send({ mensaje: "Error al eliminar el héroe", error: error.message });
    }
}
// funcion para eliminar por nombre

export async function deleteSuperHeroControllernombre(req, res) {
    const { nombre } = req.params; 
    try {
        // CORRECCIÓN: Usamos findOneAndDelete y especificamos el campo 'nombreSuperheroe'
        const heroeEliminado = await SuperHero.findOneAndDelete({ nombreSuperheroe: nombre });

        if (!heroeEliminado) {
            return res.status(404).send({ mensaje: "No se encontró el héroe para eliminar" });
        }

        res.status(200).send({ mensaje: "Héroe eliminado correctamente por nombre", datos: heroeEliminado });
    } catch (error) {
        res.status(500).send({ mensaje: "Error al eliminar el héroe", error: error.message });
    }
}