let container = document.getElementById("container");
let carousel = document.getElementById("carousel");
const listaImmagini = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"]
let buttonNext = document.getElementById("next");
let buttonPrevious = document.getElementById("previous");
let n = 1;
let immagineVisualizzata = 0;
let nuovaImmagine;


for (let i = 0; i < listaImmagini.length; i++) {
    
    nuovaImmagine = document.createElement(`img`);

    if ( i > 0) {
        nuovaImmagine.className = "dNone";
    }

    nuovaImmagine.src = listaImmagini[i];
    console.log(listaImmagini[i])
    carousel.append(nuovaImmagine);

    n++

}

let immagini = document.querySelectorAll("img");

buttonNext.addEventListener("click", function () {
    
    if (immagineVisualizzata < listaImmagini.length-1) {

        for (let c = 0; c < listaImmagini.length; c++) {
        
            if (c == immagineVisualizzata+1) {
                immagini[c].classList.remove("dNone");
                console.log("sei qui")
            } else {
                console.log("sei qui sotto")
                immagini[c].classList.add("dNone");
            }
            
        }
    
        immagineVisualizzata++
    } else {
        immagineVisualizzata = -1;

        for (let c = 0; c < listaImmagini.length; c++) {
        
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
        
        for (let c = 0; c < listaImmagini.length; c++) {
        
            if (c == immagineVisualizzata-1) {
                immagini[c].classList.remove("dNone");
            } else {
                immagini[c].classList.add("dNone");
            }
            
        }
    
        immagineVisualizzata--

    } else {
        immagineVisualizzata = 5

        for (let c = 0; c < listaImmagini.length; c++) {
        
            if (c == immagineVisualizzata-1) {
                immagini[c].classList.remove("dNone");
            } else {
                immagini[c].classList.add("dNone");
            }
            
        }
    
        immagineVisualizzata--
    }

    
})


