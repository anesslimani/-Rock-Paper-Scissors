
const choices = ["rock", "papper", "scissors"];
function getComputerChoice() {
  const cpchoice = choices[Math.floor(Math.random() * choices.length)];
  return cpchoice;
}
function playRound(playerSelection, computerSelection) {
  let a =
    choices.indexOf(playerSelection.toLowerCase()) -
    choices.indexOf(computerSelection);
  // a peut etre egal à: 1 ou -2 en cas de victoire
  if (a === 1 || a === -2) {
    return ["You Win! " + playerSelection + " beats " + computerSelection, 1];
  }
  //a peut etre egal à: -1 ou 2 en cas de defaite
  else if (a === -1 || a === 2) {
    return ["You Lose! " + computerSelection + " beats " + playerSelection, -1];
  }
  //a est egal a 0 en cas de match nul
  else if (a === 0) {
    return ["match nul", 0];
  }
}

function game() {
  let compteur = 0;
  let i = 0;
  while (i < 5) {
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Choose Rock Paper or Scissors!");
    let player = playerSelection.toLowerCase();

    let cpchoice = choices.indexOf(player);

    //Verification de l'input du joueur
    if (cpchoice === -1) {
      console.log("entrez un choix adéquat");
    } else {
      let msg = playRound(playerSelection, computerSelection);
      console.log(msg[0]);
      compteur += msg[1];
      i++;
    }
  }

  if (compteur < 0) {
    return "You lose!";
  } else if (compteur > 0) {
    return "Congratulation, You Win!";
  } else if (compteur === 0) {
    return "Match nul!";
  }
}
game();
