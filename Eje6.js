/**
 * 
EJERCICIO 6: Crear una Función para calcular el descuento en viajes turísticos tomando
en cuenta lo siguiente:
Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el
descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino
es Puerto el Triunfo el descuento será del 15%.

 */
function Descuento(origen, destino) {
    
    origen = origen.toLowerCase();
    destino = destino.toLowerCase();
    let descuento = 0;

    if (origen === "palma") {
        if (destino === "la costa del sol") {
            descuento = 5;
        } else if (destino === "panchimalco") {
            descuento = 10;
        } else if (destino === "puerto el triunfo") {
            descuento = 15;
        }
    }

    
    if (descuento > 0) {
        console.log(`Su viaje de ${origen} a ${destino} cuenta con un descuento del ${descuento}%.`);
    } else {
        console.log("No se aplica ningún descuento para su viaje Seleccionado.");
    }
}


Descuento("Palma", "La costa del Sol"); 
Descuento("Palma", "Panchimalco"); 
Descuento("Palma", "Puerto el Triunfo"); 
Descuento("Otra Ciudad", "La costa del Sol"); 
