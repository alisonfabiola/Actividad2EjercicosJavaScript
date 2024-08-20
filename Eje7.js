/**
 * 
EJERCICIO 7:
Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
• La cantidad de valores negativos ingresados.
• La cantidad de valores positivos ingresados.
• La cantidad de múltiplos de 15.
• El valor acumulado de los números ingresados que son pares.

 */
function ResultNumeros(numeros) {
    let negativos = 0;
    let positivos = 0;
    let multiplosDe15 = 0;
    let sumaPares = 0;

    numeros.forEach(numero => {
        if (numero < 0) negativos++;
        if (numero > 0) positivos++;
        if (numero % 15 === 0) multiplosDe15++;
        if (numero % 2 === 0) sumaPares += numero;
    });

    return ` Los Negativos son: ${negativos}\n Los Positivos son: ${positivos}\n Los Múltiplos de 15 son: ${multiplosDe15}\n La Suma de Pares es: ${sumaPares}`;
}

// 
console.log(ResultNumeros([14, -13, 40, 7, -4, -7, 11, 6, -3, 10]));
