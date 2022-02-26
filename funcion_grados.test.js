//Instrucciones: Revisar que las pruebas pasen, corregir las pruebas y hacer ajustes en esta función para que haga las validaciones que eestan en las pruebas
const convertir = require('./funcion_grados');

test('Test: convertir 30 grados celsius a fahrenheit y validar que da 86', () => {
    expect(convertir(30)).toBe(86);
});

test('Test: convertir -80 grados celsius a fahrenheit y validar que da -112', () => {
    expect(convertir(-80)).closeTo(80);
});

test('Test: revisar que la funcion regresa un numero', () => {
    expect(esNumero == convertir(90));
});

test('Test: revisar que la funcion no puede esperar strings, resultado esperado "No podemos usar strings', () => {
    expect(convertir('edw')).toBe(86);
});

test('Test: revisar que la funcion no puede esperar valores Booleanos, resultado esperado "No podemos procesar valores Boleanos', () => {
    expect(convertir(false)).toBe(78);
});