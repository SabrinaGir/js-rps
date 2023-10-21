    "use strict";
    
    let computerPoints = 0;
    let playerPoints = 0;
    let choices = ["rock", "paper", "scissors"];

    game();
    
   // create three buttons and select div element
   let rock = document.createElement('button');
   let paper = document.createElement('button');
   let scissors = document.createElement('button');
   let div = document.querySelector('div')

   // add text to buttons
   rock.innerText = 'Rock';
   paper.innerText = 'Paper';
   scissors.innerText = 'Scissors';

   // append buttons to div

   div.append(rock);
   div.append(paper);
   div.append(scissors);

   // add clickable buttons

  
    

    // run the game  
    function game() {
        
        let computerSelection = getComputerChoice(choices);
        let playerSelection = getPlayerChoice();

        console.log("Computer: " + computerSelection);
        console.log("Player: " + playerSelection);

        let winner = playRound(computerSelection, playerSelection);

        console.log("Winner: " + winner); // 1 = player | 2 = computer

        if (winner == 'player') {
            playerPoints = playerPoints + 1;
            console.log("Player Score: " + playerPoints);

        }
        else if (winner == 'computer') {
            computerPoints = computerPoints + 1;
            console.log("Computer Score: " + computerPoints);
        }
    }
    
    
    // gets players choice from button press
    function getPlayerChoice() {
       
    }

    // get random selection from array for computer choice
    function getComputerChoice(choices) {

    let random_num = Math.floor(Math.random() * 3) 
    let computerChoice = choices[random_num]
    return computerChoice
    }

    // figure out who wins a round using 1 for player and 2 for computer
    // this can probably be done more efficiently. No clue how though.
    function playRound(computerSelection, playerSelection) {

        // player wins
        if (playerSelection == "rock" && computerSelection == "scissors") {
            console.log("You win! Rock beats scissors");
            return 'player';
        }
        if (playerSelection == "paper" && computerSelection == "rock") {
            console.log("You win! Paper beats rock");
            return 'player';
        }
        if (playerSelection == "scissors" && computerSelection == "paper") {
            console.log("You win! Scissors beats paper");
            return 'player';
        }

        // computer wins
        if (computerSelection == "rock" && playerSelection == "scissors") {
            console.log("You lose! Rock beats scissors");
            return 'computer';
        }
        if (computerSelection == "paper" && playerSelection == "rock") {
            console.log("You lose! Paper beats rock");
            return 'computer';
        }
        if (computerSelection == "scissors" && playerSelection == "paper") {
            console.log("You lose! Scissors beats paper");
            return 'computer';
        }

        if (playerSelection == computerSelection) {
            console.log("It's a tie!");
            return 'tie';
        }
    }






