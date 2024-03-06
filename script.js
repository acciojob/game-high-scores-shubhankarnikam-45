const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const scores = document.getElementById("scores");

// Save score to Local Storage
function saveScore() {
  const name = nameInput.value;
  const score = scoreInput.value;
  
  if (name && score) {
    let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    highScores.push({ name: name, score: score });
    localStorage.setItem("highScores", JSON.stringify(highScores));
    showScores();
  }
}

// Show scores in div
function showScores() {
  scores.innerHTML = ""; // Clear previous scores
  
  let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  
  if (highScores.length === 0) {
    scores.textContent = "No scores yet";
    return;
  }
  
  // Create table
  const table = document.createElement("table");
  
  // Create header row
  const headerRow = table.insertRow();
  const nameHeader = headerRow.insertCell(0);
  const scoreHeader = headerRow.insertCell(1);
  nameHeader.textContent = "Name";
  scoreHeader.textContent = "Score";
  
  // Create rows for each score
  highScores.forEach(score => {
    const row = table.insertRow();
    const nameCell = row.insertCell(0);
    const scoreCell = row.insertCell(1);
    nameCell.textContent = score.name;
    scoreCell.textContent = score.score;
  });
  
  scores.appendChild(table);
}

// Load scores when page loads
window.addEventListener("load", showScores);
