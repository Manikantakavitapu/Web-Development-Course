// Custom Js Starts Here
// Game Function
var game = () => {
	var gameStart = () => {
		let rock = document.querySelector('.rock');    
		let paper = document.querySelector('.paper');
		let scissor = document.querySelector('.scissor');
		let userOptions = [rock,paper,scissor];
		let computerOptions = ['rock','paper','scissor'];
		
		// Function TO Select Options

		userOptions.forEach(option => {
			option.addEventListener('click',function(){
				let random = Math.floor(Math.random()*3);
				let computerChoice = computerOptions[random];
			// Calling Function to check Winner
				final(this.innerText,computerChoice)
			})
		})
	}

	// Function to decide winner
	var final = (player,computer) => {
        let result = document.querySelector('.result');
		player = player.toLowerCase();
		computer = computer.toLowerCase();
		if(player === computer){
			result.textContent = 'Tie'
		}
		else if(player == 'rock'){
			if(computer == 'paper'){
				result.textContent = 'Computer Won';

			}else{
				result.textContent = 'Player Won'
			}
		}
		else if(player == 'scissor'){
			if(computer == 'rock'){
				result.textContent = 'Computer Won';
			}else{
				result.textContent = 'Player Won';
			}
		}
		else if(player == 'paper'){
			if(computer == 'scissor'){
				result.textContent = 'Computer Won';
			}else{
				result.textContent = 'Player Won';
			}
		}
	}
	// Calling playGame function inside game
	gameStart();	
}

// Calling the game function
game();
