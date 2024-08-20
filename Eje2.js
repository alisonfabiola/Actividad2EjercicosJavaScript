/**
EJERCICIO 2: Crear una función que determine la nota final de un alumno, la cual depende
de lo siguiente:

Examen =20%
tareas = 40%
asistencia = 10%
investigación = 30%

Al final deberá mostrar los datos del alumno, nombre, carnet y nota final.
 */

function NotaFinal(nombre, carnet, examen, tareas, asistencia, investigacion) {
    let notaFinal = (examen * 0.2) + (tareas * 0.4) + (asistencia * 0.1) + (investigacion * 0.3);
    return `Nombre: ${nombre}\nCarnet: ${carnet}\nNota Final: ${notaFinal.toFixed(2)}`;
}


console.log(NotaFinal("Alison Batres", "25-5128-2022", 90, 90, 95, 100));
