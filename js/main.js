console.table(libros);
console.table(socios);
console.table(prestamos);

// Menú del programa.

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
                    let idSocio = prompt("ID del socio:");
                    let idLibro = prompt("ID del libro:");
                    let dia = prompt("Día del préstamo (1-60):");
                    
                    if (idSocio === null || idLibro === null || dia === null) break;
                    
                    prestamosActuales = prestar(
                        prestamosActuales, 
                        Number(idSocio), 
                        Number(idLibro), 
                        Number(dia), 
                        siguienteId
                    );
                    alert("Préstamo realizado con éxito.");
                    break;

                case "4":
                    let idPrestamo = prompt("ID del préstamo a borrar:");
                    if (idPrestamo === null) break;
                    
                    if (confirm(`¿Seguro que quieres borrar el préstamo ${idPrestamo}?`)) {
                        prestamosActuales = borrarPrestamo(prestamosActuales, Number(idPrestamo));
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

menu(); // Arrancamos el menú al cargar la página