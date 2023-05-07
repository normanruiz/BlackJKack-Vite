
/**
 * Esta funcio devuelve el valor de la carta recibida por parametro
 * @param {string} carta Carta recibida por parametro
 * @returns {number} Valor de la carta
 */
const valorCarta  = ( carta ) => {

    if( !carta ) {throw new error("El parametro carta es obligatorio.")};

    let valor = carta.substring(0, carta.length -1);
    if ( isNaN( valor ) ) {
        return ( valor === 'A' ) ? 11 : 10 ;
    } else {
        return valor * 1;
    };
};

export default valorCarta;