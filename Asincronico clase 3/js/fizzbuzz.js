// Fizz Buzz
var num =1;
while( num < 100 && num++){
    if ( num % 3 === 0 && num % 5 === 0){
        console.log(num+" FizzBuzz")
    } else if(num % 3 === 0) {
        console.log(num+" Fizz")
    } else if ( num % 5 === 0){
        console.log(num+" Buzz")
    }
}
