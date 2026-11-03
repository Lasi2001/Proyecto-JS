const L_ID = 0, L_TITULO = 1, L_AUTOR = 2, L_GENERO = 3, L_ANIO = 4, L_FIANZA = 5;

const libros = [
    [1, "El diario de Noa", "Nicholas Sparks", "Romance", 1996, "5"],
    [2, "El Hobbit", "J.R.R. Tolkien", "Fantasía", 1937, "10"],
    [3, "Cien años de soledad", "Gabriel García Márquez", "Realismo mágico", 1967, "15"],
    [4, "Sangre de campeones", "Carlos Cuauhtémoc Sánchez", "Superación personal", 1999, "15,50"],
    [5, "1984", "George Orwell", "Distopía", 1949, "11,10"],
    [6, "Orgullo y prejuicio", "Jane Austen", "Romance", 1813, "9,80"],
    [7, "El principito", "Antoine de Saint-Exupéry", "Infantil", 1943, "6,5"],
    [8, "Don Quijote de la Mancha", "Miguel de Cervantes", "Novela clásica", 1605, "20"],
    [9, "Crónica de una muerte anunciada", "Gabriel García Márquez", "Novela negra", 1981, "11"],
    [10, "Fahrenheit 451", "Ray Bradbury", "Ciencia ficción", 1953, "13"],
    [11, "Matar a un ruiseñor", "Harper Lee", "Drama", 1960, "14"],
    [12, "La sombra del viento", "Carlos Ruiz Zafón", "Misterio", 2001, "18"],
    [13, "El nombre del viento", "Patrick Rothfuss", "Fantasía", 2007, "22"],
    [14, "Los juegos del hambre", "Suzanne Collins", "Ciencia ficción", 2008, "16"],
    [15, "Harry Potter", "", "Fantasía", 1997, "25"]
];

const S_ID = 0, S_NOMBRE = 1, S_CURSO = 2;

const socios = [
    [1, "Ana Pérez", "2.º DAW"],
    [2, "Luis Gómez", "1.º DAW"],
    [3, "Marta Ruiz", "2.º DAW"],
    [4, "Carlos Slim", ""],
    [5, "Elena Núñez", "1.º DAW"], 
    [6, "Pablo Ortega", "2.º DAW"]
];

const P_ID = 0, P_SOCIO = 1, P_LIBRO = 2, P_DIA = 3, P_DEVUELTO = 4;

const prestamos = [
    [1, 1, 2, 3, false],   
    [2, 2, 5, 5, true],    
    [3, 3, 15, 8, false],
    [4, 1, 1, 10, true],   
    [5, 4, 9, 12, false],
    [6, 1, 3, 15, false],  
    [7, 2, 4, 16, true],
    [8, 5, 7, 18, false],
    [9, 2, 8, 20, true],
    [10, 2, 11, 22, false],
    [11, 3, 12, 24, true],
    [12, 4, 6, 25, false]
];