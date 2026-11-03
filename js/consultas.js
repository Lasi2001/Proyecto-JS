/** Convierte un texto con coma a número. */
function aNumero(texto) {
    const limpio = String(texto).trim().replace(",", ".");
    const numero = Number(limpio);
    if (limpio === "" || Number.isNaN(numero)) throw new Error("Importe no válido");
    return numero;
}

/** Busca un libro por su ID. */
function buscarPorId(listaLibros, id) {
    return listaLibros.find(libro => libro[L_ID] === id);
}

/** Filtra libros por género. */
function filtrarPorGenero(listaLibros, genero) {
    return listaLibros.filter(libro => libro[L_GENERO].toLowerCase() === genero.toLowerCase());
}

/** Ordena por año y, si empatan, por título. */
function librosOrdenados(listaLibros) {
    return [...listaLibros].sort((a, b) => {
        return a[L_ANIO] - b[L_ANIO] || a[L_TITULO].localeCompare(b[L_TITULO]);
    });
}

/** Comprueba si hay algún libro anterior a un año. */
function hayLibrosAntesDe(listaLibros, anio) {
    return listaLibros.some(libro => libro[L_ANIO] < anio);
}

/** Suma las fianzas de los libros prestados (no devueltos). */
function totalFianzasPrestadas(listaLibros, listaPrestamos) {
    let total = 0;
    const prestamosActivos = listaPrestamos.filter(p => p[P_DEVUELTO] === false);
    
    prestamosActivos.forEach(p => {
        const libro = buscarPorId(listaLibros, p[P_LIBRO]);
        if (libro) total += aNumero(libro[L_FIANZA]);
    });
    
    return Math.round(total * 100) / 100;
}

/** Devuelve autores únicos (sin vacíos) ordenados. */
function obtenerAutoresUnicos(listaLibros) {
    const autores = listaLibros.map(libro => libro[L_AUTOR]).filter(autor => autor !== "");
    return [...new Set(autores)].sort();
}