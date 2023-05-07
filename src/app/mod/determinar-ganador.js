
/**
 * Esta funcion evalua los puntajes para determinar el ganador e informarlo con una alerta
 * @param {number} jugador El indice de jugador para usar en los arreglos
 * @param {array<number>} puntaje Un arreglo con el puntaje de cada jugador, siendo el ultimo indice la puntuacion del jugador IA
 * @param {number} putajeMinimo Entero con el puntaje que realizo el jugador 1.
 */
const determinarGanador = (jugador, puntaje, putajeMinimo) => {
    setTimeout( () => {
      if ( puntaje[ jugador ] === putajeMinimo) {
          alert( 'Mejor suerte la proxima, empataron!!!' );  
      } else if ( putajeMinimo > 21 ) {
          alert( 'Mala suerte, la computadora te gano!!!' );
      } else if ( puntaje[ jugador ] > 21 ) {
          alert( 'Genial, le ganaste a la computadora!!!' );
      } else {
          alert( 'Mala suerte, la computadora te gano!!!' );
      };
    }, 1000 );

  };

  export default determinarGanador;
