const PS = require('prompt-sync');
const defaultPrompt = PS({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(initialState, userRow = 0, userCol = 0) {
        this.currentField = initialState
        this.userChoice = null // Store user's move
        this.userRow = userRow
        this.userCol = userCol
        this.continueGame = true
        this.endGameReason = null
    }

    // Method
    print() {
        console.log(this.currentField.map(row => row.join('')).join('\n'));
    }
    // processMove wrapper
        // 1. Display the current state of the board
        // 2. Prompt user for input about a move
        // 3. Update the state of the field object
        // 4. Check to see if you have reaced the end of the game
    
    promptUser(promptFn = defaultPrompt) {
        const validMoves = ['up', 'down', 'left', 'right'];
        let input;
        do {
            input = promptFn('Which way? (up/down/left/right): ').toLowerCase();
        } while (!validMoves.includes(input));
        this.userChoice = input;
    }

    updateState() {
        // Determine new position based on userChoice
        let newRow = this.userRow;
        let newCol = this.userCol;
        switch (this.userChoice) {
            case 'up': newRow -= 1; break;
            case 'down': newRow += 1; break;
            case 'left': newCol -= 1; break;
            case 'right': newCol += 1; break;
        }
        // Check the end game conditions
        this.moveOffBoard(newRow, newCol);
        // Adds check to avoid introducing errors into downstream functionality from moving off the board
        if (!this.continueGame) {
            return
        }
        this.entersHole(newRow, newCol);
        this.findsHat(newRow, newCol);

        // Updates user's position
        this.userRow = newRow;
        this.userCol = newCol;

        // Update board to display user's position
        this.currentField[this.userRow][this.userCol] = pathCharacter;
    }

    moveOffBoard(newRow, newCol) {
        if (
            newRow < 0 ||
            newRow >= this.currentField.length ||
            newCol < 0 ||
            newCol >= this.currentField[0].length
        ) {
            this.continueGame = false;
            this.endGameReason = 'moved off the board :('
        }
    }

    // Check if user enters a hole and update the end game variables
    entersHole(newRow, newCol) {
        if (this.currentField[newRow][newCol] === hole) {
            this.continueGame = false;
            this.endGameReason = 'moved into a hole :('
        }
    }

    // Check if user finds a hat and update the end game variables
    findsHat(newRow, newCol) {
        if (this.currentField[newRow][newCol] == hat) {
            this.continueGame = false;
            this.endGameReason = 'found the hat!!!'
        }
    }
    
    // Check whether the game ends 
        // DONE finds the hat ('^')
        // DONE Attempts to move outside if the field
        // DONE moves onto an O (hole)
}

module.exports = { Field }

// Instantiate an object
const field = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
]);

while (field.continueGame) {
    field.print();
    field.promptUser();
    field.updateState();
}

if (field.endGameReason === 'found the hat!!!') {
    console.log(`Congrats! You ${field.endGameReason}`)
} else {
    console.log(`Oooh nooo! You ${field.endGameReason} Try again, I'm sure you'll have better luck next time`)
}