let container = document.getElementById("container");
let carousel = document.getElementById("carousel");
let immagine = document.querySelector("img");
let buttonNext = document.getElementById("next");
let buttonPrevious = document.getElementById("previous");
let n = 1;

for (let i = 0; i < 5; i++) {
    
    let nuovaImmagine = document.createElement(`img`);

    if ( i < 1) {
        nuovaImmagine.className = "dBlock";
    } else {
        nuovaImmagine.className = "dNone";
    }

     nuovaImmagine.src = `./img/0${n}.webp`;
    carousel.prepend(nuovaImmagine);

    n++

}


