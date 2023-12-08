    'use strict';
    
    let computerPoints = 0;
    let playerPoints = 0;
    const choices = ['rock', 'paper', 'scissors'];
    const imgs = document.querySelectorAll('img')

    let computerSelection = getComputerChoice(choices);
    let playerSelection;


    // create interface 
    let computerChoice = document.createElement('p');
    document.querySelector('#current').append(computerChoice);


    let playerChoice = document.createElement('p');
    document.querySelector('#current').append(playerChoice);

    let result = document.createElement('p');
    document.querySelector('#current').append(result);

    let points = document.createElement('p');
    document.querySelector('#score').append(points);
    points.innerText = "Player: 0 ";

    let enemyPoints = document.createElement('p');
    document.querySelector('#score').append(enemyPoints);
    enemyPoints.innerText = "Computer: 0 ";

    let end = document.createElement('p');
    document.querySelector('#end').append(end);
    
    
 
    runGame();

    // run game
    function runGame() {
        
            imgs.forEach(img => img.addEventListener('click', () => {
                end.innerText = "";
                points.innerText = "Player: " + playerPoints;
                enemyPoints.innerText = "Computer: " + computerPoints;

                let computerSelection = getComputerChoice(choices);
                playerSelection = img.id;

            
                // console.log("Computer: " + computerSelection);

            
                computerChoice.innerText = "Computer: " + computerSelection;
                

                // console.log("Player: " + playerChoice);
                playerChoice.innerText = "Player: " + playerSelection;

                // console.log("Winner: " + winner); // 1 = player | 2 = computer
                let winner = playRound(computerSelection, playerSelection);

                result.innerText = "Winner: " + winner;


                if (winner == 'player') {
                    playerPoints = playerPoints + 1;
                    // console.log("Player Score: " + playerPoints);

                    points.innerText = "Player: " + playerPoints;
                    

                }
                else if (winner == 'computer') {
                    computerPoints = computerPoints + 1;
                    // console.log("Computer Score: " + computerPoints);

                    enemyPoints.innerText = "Computer: " + computerPoints;
                }

                if (playerPoints == 5) {
                    end.innerText = "You won!";
                    playerPoints = 0;
                    computerPoints = 0;

                }
                else if (computerPoints == 5) {
                    end.innerText = "You lost!";
                    playerPoints = 0;
                    computerPoints = 0;
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


