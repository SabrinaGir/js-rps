    'use strict';
    
    let computerPoints = 0;
    let playerPoints = 0;
    const choices = ['rock', 'paper', 'scissors'];
    const buttons = document.querySelectorAll('button')

    let computerSelection = getComputerChoice(choices);
    let playerChoice;
 
    runGame();

    // run game
    function runGame() {
        
        buttons.forEach(button => button.addEventListener('click', () => {
            
            let computerSelection = getComputerChoice(choices);
            let playerChoice;
            
            playerChoice = button.textContent;
            console.log("Computer: " + computerSelection);
            console.log("Player: " + playerChoice);

            let winner = playRound(computerSelection, playerChoice);

            console.log("Winner: " + winner); // 1 = player | 2 = computer

            if (winner == 'player') {
                playerPoints = playerPoints + 1;
                console.log("Player Score: " + playerPoints);

            }
            else if (winner == 'computer') {
                computerPoints = computerPoints + 1;
                console.log("Computer Score: " + computerPoints);
            }
            

        }))
    
    }


    // get random selection from array for computer choice
    function getComputerChoice(choices) {

    let random_num = Math.floor(Math.random() * 3) 
    let computerChoice = choices[random_num]
    return computerChoice
    }

    // figure out who wins a round
    function playRound(computerSelection, playerChoice) {
    
        // player wins
        if (playerChoice == "rock" && computerSelection == "scissors") {
            console.log("You win! Rock beats scissors");
            return 'player';
        }
        if (playerChoice == "paper" && computerSelection == "rock") {
            console.log("You win! Paper beats rock");
            return 'player';
        }
        if (playerChoice == "scissors" && computerSelection == "paper") {
            console.log("You win! Scissors beats paper");
            return 'player';
        }

        // computer wins
        if (computerSelection == "rock" && playerChoice == "scissors") {
            console.log("You lose! Rock beats scissors");
            return 'computer';
        }
        if (computerSelection == "paper" && playerChoice == "rock") {
            console.log("You lose! Paper beats rock");
            return 'computer';
        }
        if (computerSelection == "scissors" && playerChoice == "paper") {
            console.log("You lose! Scissors beats paper");
            return 'computer';
        }

        if (playerChoice == computerSelection) {
            console.log("It's a tie!");
            return 'tie';
        }
    }
