/*Variables*/

let voiture1 = document.querySelector(".voiture1");
let voiture2 = document.querySelector(".voiture2");
let container = document.querySelector(".course-container");
let compteRebour = document.querySelector(".compteRebourd");
let chrono1 = document.querySelector(".chrono1");
let chrono2 = document.querySelector(".chrono2");

let translationX1 = 0;
let translationX2 = 0;

let maxTranslationX1;
let maxTranslationX2;

let containerWidth;
let voiture1Width;
let voiture2Width;

let tempsDepart;
let tempsFinal1;
let tempsFinal2;

/*Fonctions*/

function compteARebour() {
  let tempsRestant = 10;

  let intervalleTemps = setInterval(function () {
    tempsRestant = tempsRestant - 1;
    compteRebour.textContent = tempsRestant;
    if (tempsRestant == 0) {
      clearInterval(intervalleTemps);
      demarrerCourse();
    }
  }, 1000);
  return tempsRestant;
}

function chronometre() {
  if (!tempsFinal1) {
      tempsFinal1 = (Date.now() - tempsDepart) / 1000;
      chrono1.textContent = tempsFinal1;
    }
  if (!tempsFinal2) {
      tempsFinal2 = (Date.now() - tempsDepart) / 1000;
      chrono1.textContent = tempsFinal2;
    }
}

function aleatoireTranslationX1() {
  maxTranslationX1 = containerWidth - voiture1Width;
  return Math.floor(Math.random() * (maxTranslationX1 + 1));
}

function aleatoireTranslationX2() {
  maxTranslationX2 = containerWidth - voiture2Width;
  return Math.floor(Math.random() * (maxTranslationX2 + 1));
}

function deplacerVoiture() {
  translationX1 = translationX1 + aleatoireTranslationX1();
  translationX2 = translationX2 + aleatoireTranslationX2();

  if (translationX1 >= maxTranslationX1) {
    translationX1 = maxTranslationX1;
    
    
  }

  if (translationX2 >= maxTranslationX2) {
    translationX2 = maxTranslationX2;
    
  }

  voiture1.style.left = translationX1 + "px";
  voiture2.style.left = translationX2 + "px";

  return voiture1 + voiture2
}

function demarrerCourse() {
  translationX1 = 0;
  translationX2 = 0;
  tempsDepart = 0;

  containerWidth = container.offsetWidth;
  voiture1Width = voiture1.offsetWidth;
  voiture2Width = voiture2.offsetWidth;

  let intervalleCourse = setInterval(deplacerVoiture, 50);
  if (tempsFinal1 && tempsFinal2) {
    clearInterval(intervalleCourse);
  }
  
  deplacerVoiture();
  chronometre();

  console.log("Vroum");
  /* Pour vérifier si la fonction marche dans la console*/
}

/*
<script>
  let countdown; // To store the interval ID
 
  document.getElementById("startBtn").addEventListener("click", function () {
    let timeLeft = 10; // seconds
    const timerDisplay = document.getElementById("timer");
 
    // Clear any existing timer
    clearInterval(countdown);
 
    // Immediately show starting time
    timerDisplay.textContent = timeLeft;
 
    // Start countdown
    countdown = setInterval(() => {
      timeLeft--;
      timerDisplay.textContent = timeLeft;
 
      if (timeLeft <= 0) {
        clearInterval(countdown);
        alert("Time's up!");
      }
    }, 1000); // 1000 ms = 1 second
  });
</script>
 
*/
