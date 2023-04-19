let container = document.getElementById("container");
let carousel = document.getElementById("carousel");

let buttonNext = document.getElementById("next");
let buttonPrevious = document.getElementById("previous");
let n = 1;
let immagineVisualizzata = 0;
let nuovaImmagine;

for (let i = 0; i < 5; i++) {
    
    nuovaImmagine = document.createElement(`img`);

    if ( i > 0) {
        nuovaImmagine.className = "dNone";
    }

     nuovaImmagine.src = `./img/0${n}.webp`;
    carousel.append(nuovaImmagine);

    n++

}

let immagini = document.querySelectorAll("img");

buttonNext.addEventListener("click", function () {
    
    if (immagineVisualizzata < 4) {

        for (let c = 0; c < 5; c++) {
        
            if (c == immagineVisualizzata+1) {
                immagini[c].classList.remove("dNone");
                console.log("sei qui")
            } else {
                console.log("sei qui sotto")
                immagini[c].classList.add("dNone");
            }
            
        }
    
        immagineVisualizzata++
    }

    
})

buttonPrevious.addEventListener("click", function () {
    
    if (immagineVisualizzata > 0) {
        
        for (let c = 0; c < 5; c++) {
        
            if (c == immagineVisualizzata-1) {
                immagini[c].classList.remove("dNone");
            } else {
                immagini[c].classList.add("dNone");
            }
            
        }
    
        immagineVisualizzata--
    }

    
})


