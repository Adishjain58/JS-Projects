let player1Score = 0;
let player2Score = 0;
let totalScore = 5;
let choices = ["Rock", "Paper", "Scissor"];

let result = {
  Rock: "Scissor",
  Paper: "Rock",
  Scissor: "Paper"
};

let player1Field = document.querySelector(".player1");
let player2Field = document.querySelector(".player2");
let totalScoreField = document.querySelector(".totalScore");
let player1Choice = document.querySelector("#player1Choice");
let player2Choice = document.querySelector("#player2Choice");
let totalScoreChoice = document.querySelector("#totalScoreChoice");
let rock = document.querySelector("#draw");
let reset = document.querySelector("#reset");
let msg = document.querySelector(".countdown");

let setInitialValues = () => {
  player1Field.innerHTML = player1Score;
  player2Field.innerHTML = player2Score;
  totalScoreField.innerHTML = totalScore;
  player1Choice.innerHTML = "";
  player2Choice.innerHTML = "";
  totalScoreChoice.value = "";
};

window.onload = setInitialValues();

// Function to decide the totalscore.
let totalDecide = () => {
  if (
    totalScoreChoice.value == 0 ||
    totalScoreChoice.value == null ||
    totalScoreChoice.value == ""
  ) {
    totalScoreField.innerHTML = totalScore;
  } else {
    totalScoreField.innerHTML = totalScoreChoice.value;
    totalScore = totalScoreChoice.value;
  }
};

let display = message => {
  setTimeout(() => {
    alert(message);
  }, 100);
};

let countdown = (message, time) => {
  setTimeout(() => {
    msg.innerHTML = message;
  }, time);
  setTimeout(() => {
    msg.innerHTML = "";
  }, 1600);
};

let displayImage = (target, path) => {
  target.setAttribute("src", path);
};

displayImage(player1Choice, "./img/rock.png");
displayImage(player2Choice, "./img/rock.png");

let draw = () => {
  countdown("Rock", 0);
  countdown("Paper", 500);
  countdown("Scissor", 1000);
  setTimeout(() => {
    totalScoreChoice.disabled = true;
    if (player1Score < totalScore && player2Score < totalScore) {
      let player2Pick = choices[Math.floor(Math.random() * 3)];
      let player1Pick = choices[Math.floor(Math.random() * 3)];
      if (player1Pick == "Rock") {
        displayImage(player1Choice, "./img/rock.png");
      } else if (player1Pick == "Paper") {
        displayImage(player1Choice, "./img/paper.png");
      } else if (player1Pick == "Scissor") {
        displayImage(player1Choice, "./img/scissor.png");
      }

      if (player2Pick == "Rock") {
        displayImage(player2Choice, "./img/rock.png");
      } else if (player2Pick == "Paper") {
        displayImage(player2Choice, "./img/paper.png");
      } else if (player2Pick == "Scissor") {
        displayImage(player2Choice, "./img/scissor.png");
      }

      if (player1Pick == player2Pick) {
        display("Draw");
      } else if (result[player1Pick] == player2Pick) {
        display("Player 1 wins this round :)");
        player1Score++;
        player1Field.innerHTML = player1Score;
      } else if (result[player2Pick] == player1Pick) {
        display("Player 2 wins this round :)");
        player2Score++;
        player2Field.innerHTML = player2Score;
      }
    }
    if (player1Score == totalScore) {
      player1Field.classList.add("green");
      display("Hooray!!! Player 1 wins the game :)");
      rock.removeEventListener("click", draw);
    }
    if (player2Score == totalScore) {
      player2Field.classList.add("green");
      display("Hooray!!! Player 2 wins the game :)");
      rock.removeEventListener("click", draw);
    }
  }, 1700);
};

let restart = () => {
  rock.addEventListener("click", draw);
  totalScoreChoice.disabled = false;
  player1Score = 0;
  player2Score = 0;
  totalScore = 5;
  setInitialValues();
  player1Field.classList.remove("green");
  player2Field.classList.remove("green");
  player1Choice.setAttribute("src", "");
  player2Choice.setAttribute("src", "");
};

totalScoreChoice.addEventListener("change", totalDecide);
rock.addEventListener("click", draw);
reset.addEventListener("click", restart);
