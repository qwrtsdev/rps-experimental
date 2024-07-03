// loading previous scores & check if missing
let scores = JSON.parse(localStorage.getItem("scores"));
if (!scores) {
  scores = {
    win: 0,
    lose: 0,
    tie: 0,
  };
}

// display scores on screen
function loadScores() {
  let infoScores = document.querySelector(".scores-info");
  infoScores.innerHTML = `wins: ${scores.win} / loses: ${scores.lose} / ties: ${scores.tie}`;
}
loadScores();

// set the results
function playRPS(playerMove) {
  const compMove = PickMove();
  let result = "";

  if (playerMove === "scissor") {
    if (compMove === "rock") {
      result = "lose";
    } else if (compMove === "paper") {
      result = "win";
    } else if (compMove === "scissor") {
      result = "tie";
    }
  } else if (playerMove === "paper") {
    if (compMove === "rock") {
      result = "win";
    } else if (compMove === "paper") {
      result = "tie";
    } else if (compMove === "scissor") {
      result = "lose";
    }
  } else if (playerMove === "rock") {
    if (compMove === "rock") {
      result = "tie";
    } else if (compMove === "paper") {
      result = "lose";
    } else if (compMove === "scissor") {
      result = "win";
    }
  }

  if (result === "win") {
    scores.win++;
  } else if (result === "lose") {
    scores.lose++;
  } else if (result === "tie") {
    scores.tie++;
  }

  localStorage.setItem("scores", JSON.stringify(scores));
  loadScores();
}

// picks computer's move before set the results
function PickMove() {
  let compThink = Math.random();
  let compMove = "";

  if (compThink >= 0 && compThink <= 1 / 3) {
    compMove = "rock";
  } else if (compThink >= 1 / 3 && compThink <= 2 / 3) {
    compMove = "paper";
  } else if (compThink >= 2 / 3 && compThink <= 1) {
    compMove = "scissor";
  }
  return compMove;
}
