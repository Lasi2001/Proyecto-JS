/**
 * Muestra un menú interactivo por consola para gestionar la biblioteca.
 */
function menu() {
    let prestamosActuales = [...prestamos];
    const siguienteId = crearGeneradorId(prestamos.length);
    let seguir = true;

    while (seguir) {
        const opcion = prompt(
            "1. Ver tablas\n" +
            "2. Ver Top 3 socios lectores (Mi regla)\n" +
            "3. Hacer un préstamo\n" +
            "4. Borrar un préstamo\n" +
            "0. Salir"
        );

        if (opcion === null || opcion.trim() === "0") {
            seguir = false;
            continue;
        }

        try {
            switch (opcion.trim()) {
                case "1":
                    console.table(libros);
                    console.table(socios);
                    console.table(prestamosActuales);
                    break;
                
                case "2":
                    console.table(sociosMasLectores());
                    break;

                case "3":
                    const idSocio = pedirNumero("ID del socio:");
                    if (idSocio === null) break;
                    
                    const idLibro = pedirNumero("ID del libro:");
                    if (idLibro === null) break;
                    
                    const dia = pedirNumero("Día del préstamo (1-60):");
                    if (dia === null) break;
                    
                    prestamosActuales = prestar(prestamosActuales, idSocio, idLibro, dia, siguienteId);
                    alert("Préstamo realizado con éxito.");
                    break;

                case "4":
                    const idPrestamo = pedirNumero("ID del préstamo a borrar:");
                    if (idPrestamo === null) break;
                    
                    if (confirm(`¿Seguro que quieres borrar el préstamo ${idPrestamo}?`)) {
                        prestamosActuales = borrarPrestamo(prestamosActuales, idPrestamo);
                        alert("Préstamo borrado.");
                    }
                    break;

                default:
                    alert("Opción no válida. Elige un número del 0 al 4.");
            }
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    }
}

// Función auxiliar para pedir números (Paso 6 del PDF)
function pedirNumero(mensaje) {
    const input = prompt(mensaje);
    if (input === null) return null;
    
    if (input.trim() === "" || !Number.isInteger(Number(input))) {
        throw new Error("Debes introducir un número entero válido.");
    }
    return Number(input);
}

menu();