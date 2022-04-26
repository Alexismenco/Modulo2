//Ejercicio asincronico parte 2.


// Edad.
var edad = prompt("¿Cual es tu edad?")

// Edad maxima de vida.
var edadMaxima = prompt("¿Tu edad maxima de vida?");

// Snack favorito.
var snack = prompt("¿Cual es tu snack favorito?");

// Comere 2 papas lays sabor oregano por dia.
var comer = prompt("¿Cuanto comerias por día?");

// Lo que queda de vida.
var restodevida = edadMaxima - edad;

// Calculo de cuántos snacks quedan por comer el resto de vida.
var snackparalavida = (restodevida * 365) * comer;

// Precio por unidad.
var precio;

// Gasto total en snack.
var gastototal;



// Alerta a usuario de snack que se necesitaran.
alert("Necesitaras "+ snackparalavida +" "+ snack + " para que te alcancen hasta los "+edadMaxima+ " años.");

// Pregunta por el precio.
precio = prompt("¿Cual es el precio por unidad?");

// Calculo de gasto total.
gastototal = snackparalavida * precio;

// Alerta al usuario del gasto total.
alert("Gastaras $"+gastototal+" en snacks el resto de tu vida.");

