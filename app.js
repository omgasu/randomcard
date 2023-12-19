//corazon, trebor, diamante, pica
document.addEventListener ("DOMContentLoaded", function () {

const palos = ["♥", "♦", "♠", "♣"];
const valores   = ['A', '2', '3', '4', '5', '6', '7' , '8', '9', '10', 'J', 'K', 'K'];

let boton = document.getElementById ("boton")

boton.addEventListener ("click", function () {
    

let randomNumbers   = Math.floor(Math.random() * valores.length )
let randomSuits     = Math.floor(Math.random() * palos.length   )

let simboloArriba   = document.getElementById("simboloArriba")
let numero          = document.getElementById("numero")
let simboloAbajo    = document.getElementById("simboloAbajo")

numero.textContent          = valores[randomNumbers]
simboloArriba.textContent   = palos[randomSuits]
simboloAbajo.textContent    = palos[randomSuits]

if (palos[randomSuits] == "♦" || palos[randomSuits] == "♣") {

    simboloArriba.style.color = "black"
    simboloAbajo.style.color = "black"
    numero.style.color = "black"
    
} else {
    simboloArriba.style.color = "red"
    simboloAbajo.style.color = "red"
    numero.style.color = "red"
}

})

})






