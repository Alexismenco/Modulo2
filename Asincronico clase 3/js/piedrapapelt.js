// Opciones.
var piedra = "piedra";
var papel = "papel";
var tijera = "tijera";

// jugadores
var jugador;
var maquina;

// Ciclo
while(jugador != "piedra" || jugador != "papel" || jugador != "tijera" ){
    maquina = Math.random();
    jugador = prompt("¿piedra, papel o tijera?");
    
    if (maquina < 0.24){

        maquina = "piedra";
        if(jugador == piedra){
            
            alert("Empate  la maquina escogio piedra");
        } else if (jugador == papel){
            alert("Ganaste felicidades la maquina escogio piedra");
        } else if (jugador == tijera){
            alert("Perdiste la maquina escogio piedra");
        }
    } else if (maquina < 0.67){
        
        maquina = "papel";
        if(jugador == papel){
            alert("Empate la maquina escogio papel");
        } else if (jugador == piedra){
            alert("Perdiste la maquina escogio papel");
        } else if (jugador == tijera){
            alert("Ganaste la maquina escogio papel");
        }
    } else if (maquina < 1){
        
        maquina = "tijeras";
        if(jugador == tijera){
            alert("Empate la maquina escogio tijeras");
        } else if(jugador == piedra){
            alert("Ganaste la maquina escogio tijeras");
        } else if(jugador == papel) {
            alert("Perdiste la maquina escogio tijeras");
        }   
    } 
}
