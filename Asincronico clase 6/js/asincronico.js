// Asincronico parte 1
var peliculas = [
    {loHasVisto: "Viste ",titulo: "Harry potter", rating: " - 4.5 Estrellas"},
    {loHasVisto: "No viste ",titulo: "Dragon Ball Z", rating: " - 5 Estrellas"},
    {loHasVisto: "Viste ",titulo: "Avatar", rating: " - 4 Estrellas "},
    {loHasVisto: "Viste ",titulo: "Terminator", rating: " - 3 Estrellas "},
    {loHasVisto: "No viste ",titulo: "Planeta de los simios", rating: " - 3.5 Estrellas "}
];

for (let p in peliculas){
    console.log(peliculas[p].loHasVisto+peliculas[p].titulo+peliculas[p].rating);
};


