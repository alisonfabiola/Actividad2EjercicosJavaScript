/**
 * 
EJERCICIO 8:
Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado
por el usuario.

 */
function TablaMultiplicar(numero) {
    let tabla = '';
    for (let i = 1; i <= 10; i++) {
        tabla += `${numero} x ${i} = ${numero * i}\n`;
    }
    return tabla;
}

console.log(TablaMultiplicar(8));
