
/**
 * 
 * @param {String} carta se requiere la carta que nos retorno pedirCarta
 * @returns {Number} Retorna el valor de la carta que nos dio pedirCarta
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}