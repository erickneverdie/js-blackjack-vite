
/**
 * 
 * @param {Array<String>} deck se requiere el deck generado por crearDeck
 * @returns {String} Retorna una carta al azar
 */
// Esta función me permite tomar una carta
export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}