import valorCarta from './valor-carta'

/**
 * Esta funncion suma el nuevo puntaje de la carat ylo acumula en el marcador.
 * @param {array<number>} puntaje Un arreglo de numeros con el puntaje de los jugadores
 * @param {number} jugador El indice de jugador para usar en los arreglos
 * @param {string} carta La carta en juego.
 * @param {array<HTMLElement>} marcadorJugador UIn arreglo con los elementos gtml spam que contienen el marcador de cada jugador
 * @returns {number} el marcador actual del jugador especificado
 */
const acumularPuntaje = ( puntaje, jugador, carta ) => {
    puntaje[jugador] = puntaje[jugador] + valorCarta(carta);
    return puntaje[jugador]
} ;

export default acumularPuntaje;