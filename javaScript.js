// Step 1: Computer Choice 
function getComputerChoice(){
  let randomNumber = Math.random();
  if (randomNumber < 0.34){
    return "rock"
  }  else if(randomNumber < 0.67){
    return "paper"
  }else {
    return "scissors"
  }
};

//  Step 2: human choice  
function getHumanChoice(){
    let userInput = prompt("choose rock, paper, or scissors:");
    return userInput;
}

//  Step 3: playRound Function
function playRound (humanChoice, computerChoice){
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  if (humanChoice === computerChoice){
    console.log("It's a tie!");
    return "tie";
  }else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")){
      console.log(`you win! ${humanChoice} beats ${computerChoice}`);
      return "human";
    }else{
      console.log(`you loose! ${computerChoice} beats ${humanChoice}`);
      return "computer"
    }
}

//  Step 4: playGame Function
function playGame(){
  let humanScore = 0;
  let computerScore = 0;
  for (let round = 1; round <= 5; round++){
    console.log(`--- Round ${round} ---`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const result = playRound(humanSelection, computerSelection);
    if (result === "human"){
      humanScore++;
    }else if (result === "computer"){
      computerScore++;
    }
  }
  console.log(`Final Score:`);
  console.log(`Human: ${humanScore} | Computer: ${computerScore}`);
  if (humanScore > computerScore){
    console.log("You win the game!");
  }else if(computerScore > humanScore){
    console.log("Computer wins the game!");
  }else{
    console.log("It's a tie!");
  }
}
playGame();