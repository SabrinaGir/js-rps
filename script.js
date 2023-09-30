
    
    let computerPoints = 0
    let playerPoints = 0
    let choices = ["rock", "paper", "scissors"]

    game()
    
   


    // run the game  
    function game() {

        let playing = true 
        while (playing == true) {
            if (computerPoints <= 3 && playerPoints <= 3) {
                let computerSelection = getComputerChoice(choices)
                let playerSelection = getPlayerChoice()

                console.log("Computer: " + computerSelection)
                console.log("Player: " + playerSelection)

                winner = playRound(computerSelection, playerSelection)

                console.log("Winner: " + winner) // 1 = player | 2 = computer

                if (winner == 1) {
                    playerPoints = playerPoints + 1
                    console.log("Player Score: " + playerPoints)

                }
                else if (winner == 2) {
                    computerPoints = computerPoints + 1
                    console.log("Computer Score: " + computerPoints)
                }
                else {

                }
            }
            else {
                playing = false
            }
        }
    }


    

    
    // checks to make sure player choice is valid
    function getPlayerChoice() {
        let valid_choice = false

        while (valid_choice == false) {
            let playerSelection = prompt("Rock, paper, scissors?").toLowerCase()
            if (playerSelection == "rock" || playerSelection == "scissors" || playerSelection == "paper") 
            {
                valid_choice = true
                return playerSelection
            }
        }
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
            console.log("You win! Rock beats scissors")
            return 1
        }
        if (playerSelection == "paper" && computerSelection == "rock") {
            console.log("You win! Paper beats rock")
            return 1
        }
        if (playerSelection == "scissors" && computerSelection == "paper") {
            console.log("You win! Scissors beats paper")
            return 1
        }


        // computer wins
        if (computerSelection == "rock" && playerSelection == "scissors") {
            console.log("You lose! Rock beats scissors")
            return 2 
        }
        if (computerSelection == "paper" && playerSelection == "rock") {
            console.log("You lose! Paper beats rock")
            return 2 
        }
        if (computerSelection == "scissors" && playerSelection == "paper") {
            console.log("You lose! Scissors beats paper")
            return 2 
        }

        if (playerSelection == computerSelection) {
            console.log("It's a tie!")
            return 3
        }
    }






