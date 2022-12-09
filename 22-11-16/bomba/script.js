let i = 10;

function cuentaRegresiva(tiempo, pFunction) {

    let intervaloPrueba = setInterval( ()=>{
        if(tiempo === 0){
            let divExplosion = document.createElement("div");
            let imgExplosion = document.createElement("img");
            body.appendChild(divExplosion);
            divExplosion.appendChild(imgExplosion);
            //falta una etiqueta img para metamos la img con el src
            divExplosion.classList.add("divBomba");
            imgExplosion.src = "./img/explosion.png";
            seccionCards.classList.add("ocultar");
            clearInterval(intervaloPrueba);
        } else {
            pFunction(tiempo);
            tiempo--;
        }
    }, 1000);
    
}

let body = document.querySelector("body");
let btnComenzar = document.querySelector("div button");
let seccionCards = document.querySelector("div button");

function crearCard(pTiempo) {
    //crear componentes Cards
    let divCard = document.createElement("div");
    divCard.classList.add("detallesCard");
    let textCard = document.createElement("p");
    textCard.classList.add("textCard");
    textCard.innerText = pTiempo;
    //armar Card y añadirla al body
    seccionCards.appendChild(divCard);
    divCard.appendChild(textCard);
}

btnComenzar.addEventListener("click", ()=> {
    btnComenzar.classList.add("ocultar");
    cuentaRegresiva(i, crearCard)
})