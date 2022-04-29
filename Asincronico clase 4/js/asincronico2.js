// fizzBuzz2
var contar = Number(prompt("Hasta qué número tiene que contar fizzBuzz"));
var fizz = prompt(" ingresa que quieres que diga cuando sea multiplo de 3");
var buzz = prompt(" ingresa que quieres que diga cuando sea multiplo de 5");
var num= 1;

while(num < contar && num++){
    if(num % 3 === 0 && num % 5 == 0){
        console.log(num+", "+fizz+" "+buzz);
    } else if (num % 3 === 0){
        console.log(num+", "+fizz);
    } else if (num % 5 === 0){
        console.log(num+", "+buzz)
    }
    
} 