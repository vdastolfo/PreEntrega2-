let CostoNoche = 0;

function calcularTotal(cantidad, costo, adicional) {
    return (costo * cantidad) + adicional;
}

// Listado de habitaciones como objetos.
const habitaciones = [
    {
        id: 1,
        nombre: "Woodland Nook",
        tipo: "doble",
        capacidad: 2,
        precio: 300,
        disponible: true,
    },
    {
        id: 2,
        nombre: "Canopy Suite",
        tipo: "suite",
        capacidad: 2,
        precio: 200,
        disponible: false,
    },
    {
        id: 3,
        nombre: "Serenity Suite",
        tipo: "suite",
        capacidad: 1,
        precio: 100,
        disponible: false,
    },
    {
        id: 4,
        nombre: "Forest Haven",
        tipo: "single",
        capacidad: 2,
        precio: 300,
        disponible: true,
    },
];

alert("Bienvenido a Gamta Hotel");

let CantNoche = parseInt(prompt("¿Cuántas noches le gustaría hospedarse?"));
while (CantNoche == null || CantNoche <= 0) {
    alert("Por favor, ingrese un número válido.");
    CantNoche = parseInt(prompt("¿Cuántas noches le gustaría hospedarse?"));
}

alert("A continuación, puede encontrar un listado de nuestras habitaciones y sus respectivos precios:\nHabitación Single: $100\nHabitación Doble: $200\nSuite: $300");

// Función con método de búsqueda y filtro sobre la lista. 
function buscarHabitacionesDisponibles(tipo) {
    let habitacionesDisponibles = habitaciones.filter(function(habitacion) {
        return habitacion.tipo.toLowerCase() === tipo.toLowerCase() && habitacion.disponible === true;
    });
    
    return habitacionesDisponibles;
}


while (CostoNoche == 0) {
    let Room = prompt("¿En qué tipo de habitación le gustaría hospedarse?\nTipos disponibles: Single, Doble, Suite");
    
    if (Room === "Single" || Room === "single" || Room === "SINGLE") {
        CostoNoche = 100;

        const habitacionesDisponibles = buscarHabitacionesDisponibles("single");
        if (habitacionesDisponibles.length > 0) {
            console.log("Las siguientes habitaciones Single están disponibles:");
            
            for (let i = 0; i < habitacionesDisponibles.length; i++) {
                console.log("- " + habitacionesDisponibles[i].nombre);
            }

        } else {
            console.log("No hay habitaciones Single disponibles en este momento.");
        }

    } else if (Room === "Doble" || Room === "doble" || Room === "DOBLE") {
        CostoNoche = 200;
        
        const habitacionesDisponibles = buscarHabitacionesDisponibles("doble");
        if (habitacionesDisponibles.length > 0) {
            console.log("Las siguientes habitaciones Doble están disponibles:");
            
            for (let i = 0; i < habitacionesDisponibles.length; i++) {
                console.log("- " + habitacionesDisponibles[i].nombre);
            }

        } else {
            console.log("No hay habitaciones Single disponibles en este momento.");
        }

    } else if (Room === "Suite" || Room === "suite" || Room === "SUITE") {
        CostoNoche = 300;

        const habitacionesDisponibles = buscarHabitacionesDisponibles("doble");
        if (habitacionesDisponibles.length > 0) {
            console.log("Las siguientes habitaciones Doble están disponibles:");
            
            for (let i = 0; i < habitacionesDisponibles.length; i++) {
                console.log("- " + habitacionesDisponibles[i].nombre);
            }

        } else {
            console.log("No hay habitaciones Single disponibles en este momento.");
        }

    } else {
        alert("Por favor, ingrese un tipo de habitación válido.");
    }
}

// Selección de servicios adicionales
/*let CostoAdicional = parseInt(prompt("¿Le gustaría agregar algún servicio adicional?\nMarque 1 si quiere agregar desayuno por $50.\n\nMarque 2 si quiere agregar spa por $80.\n\nMarque 0 si no desea agregar ningún otro servicio a su estadía."));
while (CostoAdicional != 1 && CostoAdicional != 2 && CostoAdicional != 0) {
    CostoAdicional = parseInt(prompt("Por favor, ingrese 1 si desea agregar Desayuno, 2 si desea agregar Spa o 0 si NO desea ningún servicio adicional."));
}

switch (CostoAdicional) {
    case 1:
        CostoAdicional = 50;
        break;
    case 2:
        CostoAdicional = 80;
        break;
    case 0:
        CostoAdicional = 0;
        break;
}

let CostoTotal = calcularTotal(CantNoche, CostoNoche, CostoAdicional);

alert("El costo por su estadía será de " + CostoTotal + ".");*/

alert("¡Muchas gracias por elegirnos!")
