let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 9);
}
const compareGuesses = (humanGuess, computerGuess, target) => {
    if (humanGuess < 0 | humanGuess > 9) {
        window.alert('Please enter a valid number between 1 and 9 for your guess.')
        return
    }

    if (
        getAbsoluteDistance(humanGuess, target) <= getAbsoluteDistance(computerGuess, target)
    ) {
        return true;
    } else {
        return false;
    }
}
const getAbsoluteDistance = (num1, num2) => {
    return Math.abs(num1 - num2);
}

const updateScore = winner => {
    if (winner === 'human') {
        humanScore += 1;
    } else {
        computerScore += 1;
    }
}
const advanceRound = () => {
    currentRoundNumber += 1;;
}