/* 
    UNDERESTAND the problem:
    a function that choose a random word from "rock" , "paper" , "scissors"
    input : we don't have
    output : random choice from "rock" , "paper" , "scissors"


    PLAN && PSEUDOCODE:
    one) we have three choices :"rock" , "paper" , "scissors"
    two) choose a random number betweeb 0 and 1 using math.random()
    three)divide the random number to three part
        if number < 0.34 => "rock"
        if 0.34 =< number < 0.67 => "paper"
        if number => 0.67 = "scissors"
    four)return the choice
  
*/
// Computer Choice step 1
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
console.log(getComputerChoice());


////////////////////////////////////////////////////
/*
undrestand:
a funtion that get the choice of the user and return it
input : "rock" , "paper" , "scissors"
output : "rock" , "paper" , "scissors"


plan && pseudocode :
create a function
prompt the user choice
assign the prompt to a varrible
return the varible

*/
//human choice  step 2
function getHumanChoice(){
    let userInput = prompt("choose rock, paper, or scissors:");
    return userInput;
}
console.log(getHumanChoice());


////////////////////////////////////////////////////
//  step 3
let humanScore = 0;
let computerScore = 0;

////////////////////////////////////////////////////
//  Step 4: playRound Function

/* 
UNDERSTAND:
- The function takes two choices: human and computer.
- It determines the winner of a single round.
- It logs the result and updates the score.

PLAN (Pseudocode):
1. Convert humanChoice to lowercase to make it case-insensitive.
2. Compare humanChoice and computerChoice:
   - If equal => tie
   - Else, apply rules:
     - rock beats scissors
     - paper beats rock
     - scissors beats paper
3. Log the result.
4. Increment the score of the winner.
*/

function playRound (humanChoice, computerChoice){
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  if (humanChoice === computerChoice){
    console.log("It's a tie!");
  }else if (
    humanChoice === "rock" && computerChoice === "scissors" ||
    humanChoice === "paper" && computerChoice === "rock" ||
    humanChoice === "scissors" && computerChoice === "paper"){
      console.log(`you win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    }else{
      console.log(`you loose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }
    console.log(`Score => Human: ${humanScore}, Computer: ${computerScore}`);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);