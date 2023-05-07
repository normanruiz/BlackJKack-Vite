
import crearDeck from './mod/crear-deck'
import pedirCarta from './mod/pedir-carta'
import acumularPuntaje from './mod/acumular-puntaje'
import mostrarCarta from './mod/mostrar-carta'
import turnoJugadorIA from './mod/turno-jugador-IA'

  let mazo = [];

  const palo = ['C', 'D', 'H', 'S'],
        numero = ['2', '3', '4', '5', '6', '7', '8', '9', '10', "A", "J", "Q", "K"],
        puntaje = [],
        JUGADORES = 2;

  const btnNuevoJuego = document.querySelector('#btnNuevoJuego'),
        btnPedirCarta = document.querySelector('#btnPedirCarta'),
        btnTerminarMano = document.querySelector('#btnTerminarMano'),

        contenedorCartas = document.querySelectorAll('.contenedorCartas'),

        marcadorJugador = document.querySelectorAll('small');

  const InicializarJuego = ( JUGADORES ) => {
      mazo = crearDeck(numero, palo);
      for (let i = 0; i < JUGADORES; i++) {
          puntaje[i] = 0;
          marcadorJugador[i].innerText = 0;
          contenedorCartas[i].innerText = "";
      };

  }; 

  btnPedirCarta.addEventListener( 'click', () => {

      const carta = pedirCarta(mazo);

      marcadorJugador[0].innerText = acumularPuntaje( puntaje, 0, carta, marcadorJugador );
      mostrarCarta( 0, carta, contenedorCartas);

      if ( puntaje[0] > 21 ) {
          btnPedirCarta.disabled = true;
          btnTerminarMano.disabled = true;
          turnoJugadorIA( JUGADORES, mazo, puntaje, puntaje[0], marcadorJugador, contenedorCartas );
      } else if ( puntaje[0] === 21 ) {
          btnPedirCarta.disabled = true;
          btnTerminarMano.disabled = true;
          turnoJugadorIA( JUGADORES, mazo, puntaje, puntaje[0], marcadorJugador, contenedorCartas );
      };

  } );

  btnTerminarMano.addEventListener( 'click', () => {
      btnPedirCarta.disabled = true;
      btnTerminarMano.disabled = true;
      turnoJugadorIA( JUGADORES, mazo, puntaje, puntaje[0], marcadorJugador, contenedorCartas );
  } );

  btnNuevoJuego.addEventListener( 'click', () => {
      InicializarJuego( JUGADORES );
      console.clear();
      btnPedirCarta.disabled = false;
      btnTerminarMano.disabled = false;
  } );


