/*

EJERCICIO 3:
CATEGORIA AUMENTO

A 15%
B 30%
C 10%
D 20%

Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento.
Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y
aumento. Deberá demostrar los datos del empleado y el aumento salarial.


*/

function TotalAumento(nombre, salario, categoria) {
    let aumentoSu;
    switch(categoria.toUpperCase()) {
        case 'A':
            aumentoSu = salario * 0.15;
            break;
        case 'B':
            aumentoSu = salario * 0.30;
            break;
        case 'C':
            aumentoSu = salario * 0.10;
            break;
        case 'D':
            aumentoSu = salario * 0.20;
            break;
        default:
            aumentoSu = 0;
            break;
    }
    let SalarioActualizado = salario + aumentoSu;
    return `Nombre: ${nombre}\nSalario Inicial: $${salario}\nCategoría: ${categoria}\nAumento: $${aumentoSu}\nSalario Actualizado: $${SalarioActualizado}`;
}

console.log(TotalAumento("Fabiola Torres", 3000, 'D'));

