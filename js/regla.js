// Hito 4 · Regla personal y altas/bajas

/**
 * Busca un socio por su ID (necesario para tu regla y para prestar).
 * @param {number} id 
 * @returns {Array|undefined}
 */
function buscarSocio(id) {
    return socios.find(socio => socio[S_ID] === id);
}

/**
 * MI REGLA PERSONAL: Devuelve los 3 socios con más préstamos.
 * Si empatan, se ordenan alfabéticamente.
 * @returns {Array[]} Array de pares [nombre, cantidad]
 */
function sociosMasLectores() {
    const conteo = new Map();
    
    // Bucles para contar prestamos de socios
    for (const prestamo of prestamos) {
        const idSocio = prestamo[P_SOCIO];
        const cantidad = (conteo.get(idSocio) || 0) + 1;
        conteo.set(idSocio, cantidad);
    }

    // 2. Convertir a un array de [nombre, cantidad]
    const ranking = [];
    for (const [idSocio, cantidad] of conteo) {
        const socio = buscarSocio(idSocio);
        if (socio) {
            ranking.push([socio[S_NOMBRE], cantidad]);
        }
    }

    // 3. Ordenar: por cantidad descendente y, si empatan, alfabéticamente
    ranking.sort((a, b) => {
        return b[1] - a[1] || a[0].localeCompare(b[0]);
    });

    // 4. Devolver los 3 primeros
    return ranking.slice(0, 3);
}

/**
 * Da de alta un nuevo préstamo validando los datos.
 * @param {Array[]} listaPrestamos 
 * @param {number} idSocio 
 * @param {number} idLibro 
 * @param {number} dia 
 * @param {Function} generarId 
 * @returns {Array[]} 
 */
function prestar(listaPrestamos, idSocio, idLibro, dia, generarId) {
    if (buscarSocio(idSocio) === undefined) throw new Error("Socio no encontrado");
    if (buscarLibro(idLibro) === undefined) throw new Error("Libro no encontrado");
    if (!Number.isInteger(dia) || dia < 1 || dia > 60) throw new Error("Día no válido (1-60)");
    
    const nuevoPrestamo = [generarId(), idSocio, idLibro, dia, false];
    return [...listaPrestamos, nuevoPrestamo];
}

/**
 * Da de baja un préstamo por su ID.
 * @param {Array[]} listaPrestamos -Este es mi actual array de préstamos
 * @param {number} idPrestamo - Son los ID para borrar los prestamos
 * @returns {Array[]} Una lista nueva
 */
function borrarPrestamo(listaPrestamos, idPrestamo) {
    const existe = listaPrestamos.some(p => p[P_ID] === idPrestamo);
    if (!existe) throw new Error("El préstamo no existe");
    return listaPrestamos.filter(p => p[P_ID] !== idPrestamo);
}