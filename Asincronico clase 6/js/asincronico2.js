
// Asincronico parte 2

function arregloDeObjetos(palabra,numero){

    let resultado = [];
    
    for(i = 1; i <= numero; i++ && palabra == palabra){
        
        resultado.push({palabra:i});
    }
    console.log(resultado);
}

var palabra = prompt("Ingresa una palabra");
var numero = Number(prompt("Ingresa un número"));


arregloDeObjetos(palabra,numero);

