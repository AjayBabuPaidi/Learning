// function for users choice
const getUserChoice = (userInput) =>{
    userInput = userInput.toLowerCase();
    if(userInput === "rock" || userInput === "paper" || userInput === "scissors" ){
      return userInput;
    }
    console.log("enter allowed input for the game");
  }

  // fucntion for computer choice
  const getComputerChoice = () =>{
    let outcomeNum = Math.floor(Math.random() *3);
    if(outcomeNum === 0){
      return "rock";
    }
    else if(outcomeNum === 1){
      return "paper";
    }
    else{
      return "scissors"
    }
  }
  
  // fucntion to determine the winner
  let determineWinner = (userChoice,compuerChoice) => {
  
    if(userChoice === compuerChoice){
      return "tie";
    }
    if(userChoice === "rock"){
      if(compuerChoice === "paper"){
        return "computer won";
      }
      else {
        return "user won";
      }
    }

  if(userChoice === "paper"){
    if (compuerChoice === "scissors"){
      return "computer won";
    }
    else{
      return "user won";
    }
  }
  
  if(userChoice === "scissors"){
    if (compuerChoice === "rock"){
      return "computer won";
    }
    else{
      return "user won";
    }
  }
}

// function playing the game
const playGame = () => {
  const userChoice = getUserChoice("paper");
  console.log(`user choice is ${userChoice}`);
  const computerChoice = getComputerChoice();
  console.log(`computer choice is ${computerChoice}`);

  console.log(determineWinner(userChoice,computerChoice))
}

// calling the function to see the results
playGame()
  