# Fase 1 · Núcleo de datos

**Alumno/a:**Luis Alberto Sánchez Ibarra 
**Dominio:** biblioteca de aula 

## Cómo se abre

- `index.html` abre el menú. El programa funciona en la consola del navegador (F12).
- `pruebas.html` muestra el resultado de las pruebas.

Se abren con doble clic o con Live Server. No hay que instalar nada.

## Regla personal

Ranking con desempate

sociosMasLectores() devuelve los 3 socios con más préstamos como pares [nombre, prestamos], de mayor a menor. Si dos empatan, va primero el que está antes en orden alfabético.

Ejemplo: Ana 5, Luis 5, Marta 3, Pablo 1 → [["Ana", 5], ["Luis", 5], ["Marta", 3]].

Válido si: Funciona dentro de tu proyecto, en js/regla.js, y tiene al menos 2 pruebas en js/pruebas.js: una del caso normal y otra del límite o del error.

> ...

## Por qué uso Map y Set

El Map lo he utilizado porque me permite "Asociar"(No se si es la palabra tecnica correcta) las claves unicas a sus valores, para busquedas y agrupaciones  lo que lo hace en mi opinion personal mas eficiente que ir recorriendo un array.
El Set para obtener una lista de valores unicos, para eliminar los duplicados automaticamente sin tener que hacer bucles 

## Diario

Una entrada al final de cada sesión: fecha, qué has hecho y qué te ha costado o qué has preguntado.

- 06/11/2026 · Hecho: Menu, altas, bajas y regla personal
  Me ha costado: Me ha costado muchisimo el control de los errores con el try catch
  He encontrado un fallo con el depurador, el menu "explota" si metia letras en el prompt
  He preguntado: Como "estructurar" el bucle del menu sin darme el codigo solo una explicacion teorica

## Uso de IA

Si no la has usado, escribe «No he usado IA».

- Herramienta: DeepSeek
- Para qué la usé (explicar, depurar, generar código):Para depurar la logica del menu y la validacion de errores 
- Qué le pedí (resumen): Le pedi ayuda  para estructurar el menu 
- Qué cambié yo y por qué: solo cambie el menu para que se solapara con mis funciones de altas y bajas
- Qué he aprendido: Lanzar y capturar errores a crear menus interactivos y hacer ordenaciones complejas con sort 

## Git (opcional)

Si llevas el proyecto en Git, pon aquí el enlace al repositorio: https://github.com/Lasi2001/Proyecto-JS