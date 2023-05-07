
/**
 * Agrega el elemento html img de la carta especificada.
 * @param {number} jugador El indice de jugador para usar en los arreglos
 * @param {string} carta La carta en juego.
 */
const mostrarCarta = ( jugador, carta, contenedorCartas) => {
    const cartaImagen = document.createElement('img');
    cartaImagen.src = `/assets/img/${ carta }.png`;
    cartaImagen.classList.add( 'cartas' );
    contenedorCartas[jugador].append( cartaImagen );
};

export default mostrarCarta;