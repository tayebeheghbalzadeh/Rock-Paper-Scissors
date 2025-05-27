/* ---------------------------------------------------------------
    UNDERESTAND the problem:
    a function that choose a random word from "rock" , "paper" , "scissors"
    input : we don't have
    output : random choice from "rock" , "paper" , "scissors"
-------------------------------------------------------------------
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
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());

/*------------
undrestand:
a funtion that get the choice of the user and return it
input : "rock" , "paper" , "scissors"
output : "rock" , "paper" , "scissors"

------------
plan && pseudocode :
create a function
prompt the user choice
assign the prompt to a varrible
return the varible

------------
*/
//human choice  step two
function getHumanChoice(){
    let userInput = prompt("choose rock, paper, or scissors:");
    return userInput;
}
console.log(getHumanChoice());
