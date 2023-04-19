let container = document.getElementsByClassName("container");
let carousel = document.getElementsByClassName("carousel");
let immagine = document.getElementsByTagName("img");
let buttonNext = document.getElementById("next");
let buttonPrevious = document.getElementById("previous");

let nuovaImmagine = document.createElement(`img`);
nuovaImmagine.className = "dBlock";
nuovaImmagine.src = "../img/01.webp"
carousel.append("nuovaImmagine")
