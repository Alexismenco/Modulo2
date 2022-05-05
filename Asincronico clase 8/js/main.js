var texto = document.querySelector("input");

texto.addEventListener("keydown", function(info){
    

    if(info.key == "Enter"){
        if (texto.value == "red" || texto.value == "rojo") {
             texto.style.backgroundColor="red"
        } else if (texto.value == "green" || texto.value == "verde"){
            texto.style.backgroundColor="green"
        } else if (texto.value == "yellow" || texto.value == "amarillo"){
            texto.style.backgroundColor="yellow"
        } else if (texto.value == "blue" || texto.value == "azul"){
            texto.style.backgroundColor="blue"
        } 
    } else if ( info.key == "Backspace") {
        texto.style.backgroundColor="white"
    }

})


