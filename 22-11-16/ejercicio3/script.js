let soundBomb=document.getElementById("bombSound");
let bombExplosion=document.getElementById("explosion");
let box=document.querySelector(".container");
let btnBomb=document.getElementById("btnBomb");
btnBomb.addEventListener('click',() => {
    soundBomb.play();
    countDown(10);
    document.querySelector("#btnBomb").classList.add("hide");
});

function createEnviroment(){
    let containerEnviroment=document.createElement("div");
    containerEnviroment.setAttribute("class","containerEnviroment");
    let divCounter=document.createElement("div");
    divCounter.setAttribute("class","divCounter");
    let counter=document.createElement("h5");
    counter.setAttribute("class","counter");
    containerEnviroment.appendChild(counter);
    containerEnviroment.appendChild(divCounter);
    box.prepend(containerEnviroment);
    return containerEnviroment;
}
function createBomb() {
    let div=document.createElement("div");
    div.classList.add("dimension");
    div.classList.add("red");
    return div;
}
function createImg(){
    let explosion=document.createElement("img");
    //explosion.setAttribute("src","...");
    explosion.classList.add("img");
    return explosion;
}
function countDown(time){
    let i=time;
    let enviroment=createEnviroment()
    let interval=setInterval(function(){
        if(i===0) {
            clearInterval(interval);
            enviroment.classList.add("hide");
            document.querySelector(".counter").classList.add("hide");
            box.appendChild(createImg()).src="https://thumbs.dreamstime.com/b/caricatura-explosi%C3%B3n-de-auge-burbuja-del-discurso-c%C3%B3mico-p%C3%A1gina-libro-historietas-168523573.jpg";
        } else {
            document.querySelector(".divCounter").appendChild(createBomb());
                if(i>=7) {
                    document.querySelector(".red").classList.replace("red","yellow");
                } else if(i<=6 && i>=3){
                    document.querySelector(".red").classList.replace("red","orange");
                    switch(i){
                        case 3:
                        bombExplosion.play();
                        break;
                    }
                }
                document.querySelector(".counter").innerHTML=i;
            i--;
        }
    }, 1000);
}