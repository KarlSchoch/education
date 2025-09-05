const PS = require('prompt-sync');
const defaultPrompt = PS({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(
        userRow = 0, userCol = 0, nrows=3, ncols=3, percentageHoles=0.25, initialState=null
    ) {
        if (!initialState) {
            this.currentField = Field.generateField(
                userRow, userCol, nrows, ncols, percentageHoles
            )
        } else {
            this.currentField = initialState
        }
        
        this.userChoice = null // Store user's move
        this.userRow = userRow
        this.userCol = userCol
        this.continueGame = true
        this.endGameReason = null
    }

    // Static methods
    static generateField(userRow=0, userCol=0, nrows=3, ncols=3, percentageHoles=0.25) {
        // Create the baseline field
        const field = []
        for (let i = 0; i < nrows; i++) {
            field.push([]);
            for (let j = 0; j < ncols; j++) {
                field[i].push(fieldCharacter)
            }
        }

        // Place the user
        field[userRow][userCol] = pathCharacter

        // Place the hat
        let hatRow, hatCol;
        do {
            hatRow = Math.floor(Math.random() * nrows);
            hatCol = Math.floor(Math.random() * ncols);
        } while (hatRow === userRow && hatCol === userCol);
        field[hatRow][hatCol] = hat

        // Place the holes
        // ID Number of holes
        const nholes = Math.max(
            1,
            Math.floor((nrows * ncols - 1) * percentageHoles)
        )
        // Iterate until you have placed nholes, randomly selecting hole locations
        let i = 0;
        let holeRow;
        let holeCol;
        while (i < nholes) {
            // Generate a random location for the hole
            holeRow = Math.floor(Math.random() * nrows)
            holeCol = Math.floor(Math.random() * ncols)
            // Validate that you aren't overriding the hat or the user location
            if (
                field[holeRow][holeCol] !== hat && field[holeRow][holeCol] !== pathCharacter
            ) {
                field[holeRow][holeCol] = hole
                i++
            }
        }

        return field
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

// Field.generateField()

// Instantiate an object
// const field = new Field([
//     ['*', '░', 'O'],
//     ['░', 'O', '░'],
//     ['░', '^', '░'],
// ]);
const field = new Field();

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