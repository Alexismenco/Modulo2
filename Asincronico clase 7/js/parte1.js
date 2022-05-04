
// 1.- Creá un archivo HTML que, dentro de su <body> solo tenga un título <h1>
// 2.- Por consola, cambiá el texto del título

// En consola escribir.
// var titulo = document.querySelector("h1");

// Cambiamos el titulo.
// titulo.textContent="Titulo cambiado";



// 3.- Por consola, cambiá el título por un párrafo con un texto a elección

// Para cambiar el título por un párrafo, usá la Propiedad innerHTML.

// Escribimos en console para tomar el body
// var body = document.querySelector("body");

// Escribimos en console para tomar el h1
// var h1 = document.querySelector("h1");

// En consola borramos el titulo
// body.removeChild(h1);

// Y en console insertamo el parrafo al body
// body.innerHTML="<p>Cambiado por un parrafo</p>"



// 4.- Por consola, agregá otro párrafo al <body> con un texto a elección.

// Para agregar otro párrafo al <body>, usá appendChild

// Creamos el parrafo en console
// var nuevoParrafo = document.createElement("p");

// Le agregamos el contenido al parrafo en console
// nuevoParrafo.textContent="Este es un nuevo parrafo que se agrega al body...";

// // si no tenemos el tomado el body tomarlo como en la linea 18
// y insertamos el parrafo en console
// body.appendChild(nuevoParrafo); 