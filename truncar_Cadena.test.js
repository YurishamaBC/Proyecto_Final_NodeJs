//Instrucciones: crea una prueba para cada una de estas validaciones, nota estas validaciones pasan.
// Además aggrega el codigo que hace falta en el script truncar_Cadena.js para que las pruebas pasen

const truncar = require('./truncar_Cadena');

let cadena = 'Siempre codifica como si la persona que finalmente mantendrá tu código fuera un psicópata violento que sabe dónde vives'

test('Test: pon un nombre correcto para esta prueba', () => {
    console.log(truncar(cadena, 60))
    expect(truncar(cadena, 8)).toBe('Siempre ...');
    expect(truncar(cadena, 10)).toBe('Siempre co...');
    expect(truncar(cadena, 20)).toBe('Siempre codifica com...');
    expect(truncar(cadena, 50)).toBe('Siempre codifica como si la persona que finalmente...');
    expect(truncar(cadena, 50)).toBe('Siempre codifica como si la persona que finalmente mantendrá...');

});