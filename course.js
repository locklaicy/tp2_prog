let voiture1 = document.getElementsByClassName(voiture1);
let voiture2 = document.getElementsByClassName(voiture2);

let translationX1;
let translationX2;

let containerWidth = course-container.offsetWidth;

let voiture1Width = voiture1.offsetWidth;
let voiture2Width = voiture2.offsetWidth;


function compteARebour() {

}

function chronometre() {

}

function aleatoireTranslationX() {
    let maxTranslationX1 = containerWidth - voiture1Width;
    let maxTranslationX2 = containerWidth - voiture2Width;

    return Math.floor(Math.random() * (maxTranslationX1 + 1)) + Math.floor(Math.random() * (maxTranslationX2 + 1));

}

function deplacerVoiture() {
    
}

function demarrerCourse() {

}
