let voiture1 = document.getElementsByClassName(voiture1);
let voiture2 = document.getElementsByClassName(voiture2);

let translationX1;
let translationX2;

<<<<<<< HEAD
let maxTranslationX1;
let maxTranslationX2;

let containerWidth = container.offsetWidth;
=======
let containerWidth = course-container.offsetWidth;
>>>>>>> 6f73ccd0581aba433233b16ed09077bcd410f54e

let voiture1Width = voiture1.offsetWidth;
let voiture2Width = voiture2.offsetWidth;


function compteARebour() {
  
}

function chronometre() {

}

<<<<<<< HEAD
function aleatoireTranslationX1() {
    maxTranslationX1 = containerWidth - voiture1Width;
    return Math.floor(Math.random() * (maxTranslationX1 + 1));
}

function aleatoireTranslationX2() {
    maxTranslationX2 = containerWidth - voiture2Width;
    return Math.floor(Math.random() * (maxTranslationX2 + 1));
}
=======
function aleatoireTranslationX() {
    let maxTranslationX1 = containerWidth - voiture1Width;
    let maxTranslationX2 = containerWidth - voiture2Width;
>>>>>>> 6f73ccd0581aba433233b16ed09077bcd410f54e

    return Math.floor(Math.random() * (maxTranslationX1 + 1)) + Math.floor(Math.random() * (maxTranslationX2 + 1));

}

function deplacerVoiture() {
<<<<<<< HEAD
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
=======
    
>>>>>>> 6f73ccd0581aba433233b16ed09077bcd410f54e
}

function demarrerCourse() {
    translationX1 = 0;
    translationX2 = 0;

    let intervalleCourse = setInterval(deplacerVoiture, 50);

    console.log("Vroum")
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

