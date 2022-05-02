//Ejercicio asincronico clase 5 js
var num = [90, 3, 3, 5]; // 101

function  sumArray(sumar){

    let suma = 0;

    for (let i = 0; i < sumar.length; i++) {
        suma += sumar[i];
    }
    return suma
}

console.log("La suma total del array es: "+sumArray(num))