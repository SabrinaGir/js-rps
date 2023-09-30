
    let choices = ["rock", "paper", "scissors"]
    
    
    let computerSelection = getComputerChoice(choices)
    let playerSelection = getPlayerChoice()
    
    
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

    function playRound(computerSelection, playerSelection) {

    }


