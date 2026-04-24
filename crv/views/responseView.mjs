
export function renderizarSuperheroe(superhero) {
    return {

        
        id: superhero._id, // <--- ESTO SE AGREGO EL ID QUE FALTA
        nombreSuperheroe: superhero.nombreSuperheroe,
                     
        "Nombre Real": superhero.nombreReal,
        edad: superhero.edad,
        "Planeta de Origen": superhero.planetaOrigen,
        debilidad: superhero.debilidad,
        poder: superhero.poder, // <--- CORREGIDO (sin "podeser")
        aliado: superhero.aliado,
        enemigo: superhero.enemigo
    };
}

export function renderizarListaSuperheroes(superheroes) {
return superheroes.map(superheroe => renderizarSuperheroe(superheroe));
}