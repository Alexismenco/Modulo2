// 1. Creá un documento HTML con un <div> dentro.
// 2. Usando la Propiedad style del elemento en JavaScript, dale a ese <div>
// altura, ancho y un color de fondo.

var div = document.querySelector("div");
// Ancho.
// div.style.width="600px";
// Altura.
// div.style.height="300px"
// Color de fondo.
// div.style.backgroundColor="blue"



// 3. Creá la clase .square en tu stylesheet, y dale las mismas Propiedades.

// 4. Ahora en vez de agregársela con la Propiedad style, hacelo con la Propiedad classList.

div.classList="square";



// 5. Desde tu consola, sacá la clase .square al <div>.

// En consola le sacamos la clase dejandolo vacio
// div.classList="";



// 6. Hacé una Función que cada un segundo (setInterval()) se fije si tiene la
// clase .square. Si la tiene, que se la quite; si no la tiene, que se la agregue.



setInterval(function(){
    
    if (div.classList=="square") {
        div.classList="";
        console.log("Se quita la clase");

    } else  {
        div.classList="square";
        console.log("Se agrega la clase");
    }

},1000)


