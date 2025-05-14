const game = ()=> {
  let pScore = 0;
  let cScore = 0;


  //start the game
  const startGame = ()=> {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", ()=> {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  //play match
  const playMatch = ()=> {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand =>{
      hand.addEventListener("animationend", function(){
        this.style.animation = "";
      });
    });
    //computer options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach(option => {
      option.addEventListener("click", function() {
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() =>{
          //here is where we call compare hands
          compareHands(this.textContent, computerChoice);
          //update images
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);

        //animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";

      });
    });



  };

  const updateScore = () =>{
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;

    }

  const compareHands = (playerChoice, computerChoice) =>{
    //here is where we update text
    const winner = document.querySelector(".winner");
    //checking for a tie
    if(playerChoice === computerChoice){
      winner.textContent = "It's a tie!"
      return;
    }

    //checking for Rock
    if(playerChoice === "rock"){
      if(computerChoice === "scissors"){
        winner.textContent = "Player Wins!!";
        pScore++;
        updateScore();
        return;
      }else{
        winner.textContent = "Computer Wins!!";
        cScore++;
        updateScore();
        return;
      }
    }

    //checking for Paper
    if(playerChoice === "paper"){
      if(computerChoice === "scissors"){
        winner.textContent = "Computer Wins!!";
        cScore++;
        updateScore();
        return;
      }else{
        winner.textContent = "Player Wins!!";
        pScore++;
        updateScore();
        return;
      }
    }

    //checking for scissors
    if(playerChoice === "scissors"){
      if(computerChoice === "rock"){
        winner.textContent = "Computer Wins!!";
        cScore++;
        updateScore();
        return;
      }else{
        winner.textContent = "Player Wins!!";
        pScore++;
        updateScore();
        return;
      }

      
    }
  };

  

  //call all the inner functions
  startGame();
  playMatch();
};


//start the game function
game();


















function newFunction(pScore, cScore) {
  if (pScore === 10) {
    console.log("Game Over!:PlayerWins!");
  } else if (cScore === 10) {
    console.log("Game Over!:ComputerWins!");
  };
}

