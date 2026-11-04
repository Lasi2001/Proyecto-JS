// Usamos buscarPorId como en el ejemplo, pero con TUS datos (el libro 3 es Cien años...)
prueba("buscarPorId devuelve el libro 3", () => {
    igual(buscarPorId(libros, 3)[L_TITULO], "Cien años de soledad");
});

// Usamos librosOrdenados como en el ejemplo
prueba("librosOrdenados no modifica la lista original", () => {
    librosOrdenados(libros);
    igual(libros[0][L_ID], 1); 
});

prueba("filtrarPorGenero devuelve los de Fantasía", () => {
    igual(filtrarPorGenero(libros, "Fantasía").length, 3);
});

prueba("hayLibrosAntesDe detecta libros antiguos", () => {
    igual(hayLibrosAntesDe(libros, 1800), true);
    igual(hayLibrosAntesDe(libros, 1500), false);
});

prueba("totalFianzasPrestadas suma correctamente", () => {
    igual(totalFianzasPrestadas(libros, prestamos), 91.3);
});

prueba("obtenerAutoresUnicos quita vacíos y duplicados", () => {
    const autores = obtenerAutoresUnicos(libros);
    igual(autores.includes("Gabriel García Márquez"), true); 
    igual(autores.includes(""), false); 
});


// PRUEBAS DEL HITO 3 


prueba("buscarLibro usa el Map y devuelve el libro 2", () => {
    igual(buscarLibro(2)[L_TITULO], "El Hobbit");
});

prueba("agruparPorGenero crea un Map correctamente", () => {
    const mapa = agruparPorGenero(libros);
    igual(mapa.get("Romance").length, 2); 
});

prueba("generosUnicos devuelve un Set sin repetidos", () => {
    const setGeneros = generosUnicos(libros);
    igual(setGeneros.size, 11); 
});

prueba("crearGeneradorId genera IDs consecutivos", () => {
    const siguienteId = crearGeneradorId(15); 
    igual(siguienteId(), 16);
    igual(siguienteId(), 17);
});

prueba("filtrarPor recibe una función como parámetro", () => {
    const resultado = filtrarPor(libros, libro => libro[L_ANIO] === 1937);
    igual(resultado[0][L_TITULO], "El Hobbit");
});
