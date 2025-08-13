import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const palos = ["♦", "♥", "♠", "♣"]
const manos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"]
const palo1 = document.querySelector("#palo1")
const palo2 = document.querySelector("#palo2")
const mano = document.querySelector("#mano")
const reset = document.querySelector("#reset")
const contadorDiv = document.getElementById("contador");
let contador = 10;



/////////////////////////////////////////////////////////////////////////////////////////////////////


//funcion numero ramdon apartir de los palos
const numRdPalo = () => {
    return Math.floor(Math.random() * palos.length)
}


//funcion numero ramdon apartir de las manos
const numRdMano = () => {
    return Math.floor(Math.random() * manos.length)
}

//funcion que hace que tanto palo1 como palo2 sean iguales apartir de un numero random, el cual le da su contenido

const displayTextOfPalo = (numRd, palo1, palo2) => {
    palo1.innerText = numRd
    palo2.innerText = numRd

}

//funcion que le otorgara su contenido a la mano
const displayTextOfMano = (numRd, mano) => {
    mano.innerText = numRd
}

//funcion que hace cosas muchas cosas(realmente solo compara para cambiar el color de mano y palo, ademas de formar la carta)
function generarcolores() {
    displayTextOfPalo(palos[numRdPalo()], palo1, palo2)
    displayTextOfMano(manos[numRdMano()], mano)
    const color = palo1.textContent == "♥" ? "red" :
        palo1.textContent == "♦" ? "blue" :
            palo1.textContent == "♣" ? "green" :
                palo1.textContent == "♠" ? "black" :
                    "black";

    palo1.style.color = color;
    palo2.style.color = color;
    mano.style.color = color;
}




//////////////////////////////////////////////////////////////////////////////////////////////////////



window.onload = generarcolores() 
    
    /*
    intento 1 para acomodar los colores


       if (palo1.textContent == "♥") {
        return (palo1.style.color = "red", palo2.style.color = "red",mano.style.color = "red")
        }
        if (palo1.textContent == "♦") {
        return (palo1.style.color = "blue", palo2.style.color = "blue",mano.style.color = "blue")
        }
        if (palo1.textContent == "♣") {
        return (palo1.style.color = "green", palo2.style.color = "green",mano.style.color = "green")
        }
        if (palo1.textContent == "♠") {
        return (palo1.style.color = "green", palo2.style.color = "green",mano.style.color = "green")
        }
    }
    */

//boton de reset para una nueva carta
reset.addEventListener("click", generarcolores)



//contador para una nueva carta
setInterval(() => {
    contadorDiv.textContent = contador;
    contador--;
    if (contador < 0) {
        contador = 10;
        generarcolores()
    }
}, 1000);
//son las 2am despues de la clase no entiendo ni que estoy comentando