/**

 *EJERCICIO 1: Crear una función que en base a la edad que ingreso el usuario devolver un
mensaje si la persona es mayor de edad o no. Utilizar para la condición el operador ternario.

 */

function MayorDeEdad(edad) {
    return edad >= 18 ? "Usted es mayor de edad." : "Usted no es mayor de edad.";
}

console.log(MayorDeEdad(5)); 
