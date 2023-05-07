
import _ from 'underscore'

/**
 * Esta funcion arma el mazo de cartas y lo devuelve mesclado
 * @param {array<string>} numero Posibles opciones [2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "J", "Q", "K"]
 * @param {array<string>} palo Posibles opciones ['C', 'D', 'H', 'S']
 * @returns {array<string>} Mazo de cartas ya mesclado
 */
const crearDeck = (numero, palo) => {

    if( !numero ) {throw new error("El parametro numero es obligatorio.")};
    if( numero.length === 0 ) {throw new error("El parametro numero no puede estar vacion.")};
    if( !palo ) {throw new error("El parametro palo es obligatorio.")};
    if( palo.length === 0 ) {throw new error("El parametro palo no puede estar vacion.")};

    const mazoaux = [];
    
    for (let n of numero) {
        for (let p of palo) {
            mazoaux.push(n+p);
        };
    };
    
    return _.shuffle(mazoaux);
};

export default crearDeck;