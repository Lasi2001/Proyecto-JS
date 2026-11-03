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
