// Asincronico basico.
alert("Asincronico basico");
var numero = prompt("Ingrese un numero");

result = numero % 2;

if (result === 0) {
    alert("tu numero " +numero+" es par");
}else{ 
    alert("tu numero " +numero+" es impar");
}



// Asincronico parte 1 .
alert("Asincronico parte 1");
var edad = prompt("Indique su edad")
var edadFaltante = 60 - edad;

jubilarmujer = edad >= 60 ? "Estas en edad de jubilarte.":"Aun te faltan "+edadFaltante+" años para jubilar.";

alert(jubilarmujer);



// Asincronico parte 2.
alert("Asincronico parte 2");
var sexo = prompt("M si eres mujer o H si eres hombre");
if(sexo === "M"){
    let edad = prompt("Ud es mujer Ingrese su edad");
    if(Number(edad) >= 60){
        alert("Esta en edad de jubilar.");
    }else if (Number(edad) < 60){
        let edadFaltante = 60 - edad;
        alert("Aun te falta "+edadFaltante+" años para jubilar");
    } else {
        alert("Ingresaste un valor incorrecto")
    }
    
} else {
    let edad = prompt("Ud es hombre Ingrese su edad");
    if(Number(edad) >= 65){
        alert("Esta en edad de jubilar.");
    }else if( Number(edad) < 65) {
        let edadFaltante = 65 - edad;
        alert("Aun te falta "+edadFaltante+" años para jubilar");
    } else {
        alert("Ingresaste un valor incorrecto");
    }
}



// Extra Bonus
alert("Extra Bonus");

var sexoo = prompt("M si eres mujer o H si eres hombre");
var mujerEdad = "";
var hombreEdad = "";

sexoo == "M" ? mujerEdad = prompt("Ud es mujer indique su edad"): hombreEdad = prompt("Ud es hombre indique su edad");
var resultado = mujerEdad < 60 || hombreEdad < 65? alert("No esta en edad de jubilar"):alert("Esta en edad de jubilar");
if( Number(mujerEdad) >= 60 || Number(hombreEdad) >= 65 ){
    alert(resultado); 
}

