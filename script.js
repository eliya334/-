let bagrut = document.getElementById("bagrut");
let magen = document.getElementById("magen");
let yud = document.getElementById("yud");
let sum = document.getElementById("sum");

sum.addEventListener('click', sumOnClick);

function sumOnClick() {
  let bagrutScore = parseFloat(bagrut.value) || 0;
  let magenScore = parseFloat(magen.value) || 0;
  let yudScore = parseFloat(yud.value) || 0;

  let finalScore = (bagrutScore * 0.49) + (magenScore * 0.21) + (yudScore * 0.30);
  let roundedScore = Math.round(finalScore);

  let resultBox = document.getElementById("result-box");
  let finalScoreElement = document.getElementById("final-score");
  finalScoreElement.textContent = roundedScore;

  
  resultBox.style.backgroundColor = "#e1f5fe";
  resultBox.style.color = "#0d47a1";

  if (roundedScore >= 85) {
    resultBox.style.backgroundColor = "#c8e6c9"; 
    resultBox.style.color = "#2e7d32";
  } else if (roundedScore >= 65) {
    resultBox.style.backgroundColor = "#fff9c4"; 
    resultBox.style.color = "#f9a825"; 
  } else {
    resultBox.style.backgroundColor = "#ffcdd2";
    resultBox.style.color = "#c62828";
    resultBox.innerHTML = " just put the fries in the bag lil bro" 
  }
}
