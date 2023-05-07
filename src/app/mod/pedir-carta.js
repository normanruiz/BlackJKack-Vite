
/**
 * Esta funcion devuelve la ultima carta del mazo, esto incluye la eliminacion de la mioisma del mazo
 * @param {array<string>} mazo Mazo barajado, puede contener un maximo de 52 elementos correspondientes a las cartas.
 * @returns {string} La carta solicitada.
 */
const pedirCarta = (mazo) => {

    if( !mazo ) {throw new error("El parametro mazo es obligatorio.")};
    if( mazo.length === 0 ) {throw new error("El parametro mazo no puede estar vacion.")};

    return mazo.pop();

};

export default pedirCarta;