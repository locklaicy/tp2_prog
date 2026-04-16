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

