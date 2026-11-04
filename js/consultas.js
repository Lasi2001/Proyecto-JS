/**
 * Convierte un texto con coma decimal en número.
 * @param {string} texto - El importe en formato texto (ej. "12,50").
 * @returns {number} El importe convertido a número.
 */
function aNumero(texto) {
    const limpio = String(texto).trim().replace(",", ".");
    const numero = Number(limpio);
    if (limpio === "" || Number.isNaN(numero)) throw new Error("Importe no válido");
    return numero;
}

/**
 * Busca un libro por su ID.
 * @param {Array[]} listaLibros - La lista de libros.
 * @param {number} id - El ID del libro a buscar.
 * @returns {Array|undefined} El libro encontrado o undefined si no existe.
 */
function buscarPorId(listaLibros, id) {
    return listaLibros.find(libro => libro[L_ID] === id);
}

/**
 * Filtra los libros por un género específico.
 * @param {Array[]} listaLibros - La lista de libros.
 * @param {string} genero - El género a filtrar.
 * @returns {Array[]} Un array con los libros de ese género.
 */
function filtrarPorGenero(listaLibros, genero) {
    return listaLibros.filter(libro => libro[L_GENERO].toLowerCase() === genero.toLowerCase());
}

/**
 * Ordena los libros por año y, si empatan, por título.
 * @param {Array[]} listaLibros - La lista de libros.
 * @returns {Array[]} Una copia ordenada de la lista de libros.
 */
function librosOrdenados(listaLibros) {
    return [...listaLibros].sort((a, b) => {
        return a[L_ANIO] - b[L_ANIO] || a[L_TITULO].localeCompare(b[L_TITULO]);
    });
}

/**
 * Comprueba si hay algún libro publicado antes de un año determinado.
 * @param {Array[]} listaLibros - La lista de libros.
 * @param {number} anio - El año límite.
 * @returns {boolean} true si hay alguno, false si no.
 */
function hayLibrosAntesDe(listaLibros, anio) {
    return listaLibros.some(libro => libro[L_ANIO] < anio);
}

/**
 * Suma las fianzas de los libros prestados (no devueltos).
 * @param {Array[]} listaLibros - La lista de libros.
 * @param {Array[]} listaPrestamos - La lista de préstamos.
 * @returns {number} El total de las fianzas redondeado a 2 decimales.
 */
function totalFianzasPrestadas(listaLibros, listaPrestamos) {
    let total = 0;
    const prestamosActivos = listaPrestamos.filter(p => p[P_DEVUELTO] === false);
    
    prestamosActivos.forEach(p => {
        const libro = buscarPorId(listaLibros, p[P_LIBRO]);
        if (libro) total += aNumero(libro[L_FIANZA]);
    });
    
    return Math.round(total * 100) / 100;
}

/**
 * Devuelve una lista de autores únicos (sin vacíos) ordenados alfabéticamente.
 * @param {Array[]} listaLibros - La lista de libros.
 * @returns {Array<string>} Un array de nombres de autores sin repetir.
 */
function obtenerAutoresUnicos(listaLibros) {
    const autores = listaLibros.map(libro => libro[L_AUTOR]).filter(autor => autor !== "");
    return [...new Set(autores)].sort();
}

// --- HITO 3 ---
function crearIndice(lista, posId) {
    return new Map(lista.map(fila => [fila[posId], fila]));
}

const indiceLibros = crearIndice(libros, L_ID);

function buscarLibro(id) {
    return indiceLibros.get(id);
}

function agruparPorGenero(listaLibros) {
    const agrupacion = new Map();
    for (const libro of listaLibros) {
        const genero = libro[L_GENERO];
        const titulo = libro[L_TITULO];
        if (!agrupacion.has(genero)) {
            agrupacion.set(genero, []);
        }
        agrupacion.get(genero).push(titulo);
    }
    return agrupacion;
}

function generosUnicos(listaLibros) {
    return new Set(listaLibros.map(libro => libro[L_GENERO]));
}

function crearGeneradorId(ultimo) {
    let actual = ultimo;
    return () => {
        actual++;
        return actual;
    };
}

function filtrarPor(lista, condicion) {
    return lista.filter(condicion);
}