
import pedirCarta from './pedir-carta'
import acumularPuntaje from './acumular-puntaje'
import mostrarCarta from './mostrar-carta'
import determinarGanador from './determinar-ganador'

/**
 * Esta funcion ejecuta el turno de la computadora
 * @param {number} JUGADORES El numero de jugadores, cabe aclarar que por el momento solo esta desarrollado para 1 player vs IA(2 jugadores)
 * @param {array<string>} mazo Mazo barajado, puede contener un maximo de 52 elementos correspondientes a las cartas.
 * @param {array<number>} puntaje Un arreglo con el puntaje de cada jugador, siendo el ultimo indice la puntuacion del jugador IA
 * @param {number} putajeMinimo Entero con el puntaje que realizo el jugador 1.
 */
const turnoJugadorIA = ( JUGADORES, mazo, puntaje, putajeMinimo, marcadorJugador, contenedorCartas ) => {
    
    do {
        const carta = pedirCarta(mazo);
        marcadorJugador[JUGADORES - 1].innerText = acumularPuntaje( puntaje, JUGADORES - 1, carta, marcadorJugador );
        mostrarCarta( JUGADORES - 1, carta, contenedorCartas);
    } while ( ( puntaje[ JUGADORES - 1 ] < putajeMinimo ) && ( putajeMinimo <= 21 ) );

    determinarGanador( JUGADORES - 1, puntaje, putajeMinimo);

};

export default turnoJugadorIA;
