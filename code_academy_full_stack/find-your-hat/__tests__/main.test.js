const { Field } = require('../main')

describe('test main', () => {
    test('initializes field', () => {
        // Prepare
        const inputState = [
            ['*', '░', 'O'],
            ['░', 'O', '░'],
            ['░', '^', '░'],
        ]

        // Exercise
        const myField = new Field(inputState)

        // Validate
        expect(myField.currentField).toBe(inputState)
    })

    test('prints field correctly', () => {
        // Prepare
        const inputState = [
            ['*', '░', 'O'],
            ['░', 'O', '░'],
            ['░', '^', '░'],
        ]
        const myField = new Field(inputState)
        const expectedOutput = '*░O\n░O░\n░^░'
        const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {})

        // Exercise
        myField.print()

        // Validate
        expect(logSpy).toHaveBeenCalledWith(expectedOutput)

        // Cleanup
        logSpy.mockRestore()
    })
})

describe('promptUser', () => {
    afterEach(() => {
        jest.resetModules();
        jest.clearAllMocks;
    });

    test('accepts valid input', () => {
        // Setup
        const mockPrompt = jest.fn().mockReturnValue('up');
        const field = new Field([['*']]);
        
        // Exercise
        field.promptUser(mockPrompt);

        // Validate
        expect(field.userChoice).toBe('up');
        expect(mockPrompt).toHaveBeenCalledTimes(1);
    });

    test('rejects invalid input and continues prompting, accepting capitalized letter', () => {
        // Setup
        const mockPrompt = jest
            .fn()
            .mockReturnValueOnce('go home')
            .mockReturnValueOnce('Down')
        const field = new Field([['*']]);
        
        // Exercise
        field.promptUser(mockPrompt);

        // Validate
        expect(field.userChoice).toBe('down');
        expect(mockPrompt).toHaveBeenCalledTimes(2);
    })

})

describe('Check End Game Conditions', () => {
    // Tries to move up off the board
    test('ends game if you try to move off the board', () => {
        const initialField = [['*']];
        const field = new Field(initialField, 0, 0);
        ['up', 'down', 'left', 'right'].forEach((el) => {
            field.userChoice = el;
            field.updateState();
            field.moveOffBoard(0, 0);
            expect(field.continueGame).toBe(false);
            expect(field.endGameReason).toBe('moved off the board :(')
        })
    });

    test('ends game if you move into a hole', () => {
        // Pass in the field and the userRow/Col
        // userRow/Col is standing in a spot with a hole: O
        const initialField = [['O']]
        const field = new Field(initialField, 0, 0);

        // Run the function
        field.entersHole(0, 0);

        // Expect variables to be set
        expect(field.continueGame).toBe(false);
        expect(field.endGameReason).toBe('moved into a hole :(')
    })

    test('ends game if you find a hat', () => {
        // Pass in the field and the userRow/Col
        // userRow/Col is standing in a spot with a hat: O
        const initialField = [['^']]
        const field = new Field(initialField, 0, 0);

        // Run the function
        field.findsHat(0, 0);

        // Expect variables to be set
        expect(field.continueGame).toBe(false);
        expect(field.endGameReason).toBe('found the hat!!!')
    })
})

describe('updateState', () => {
    test('Deals with a move that ends the game', () => {
        // Setup
        const initialField = [
            ['*'],
            ['^'],
        ]
        const field = new Field(initialField, 0, 0)
        field.userChoice = 'down'

        // Exercise
        field.updateState()

        // Validate
        expect(field.continueGame).toBe(false);
        expect(field.endGameReason).toBe('found the hat!!!')

    })
    test('Deals with a move that continues the game', () => {
        // Setup
        const initialField = [
            ['*'],
            ['░'],
        ]
        const field = new Field(initialField, 0, 0)
        const expectedField = [
            ['*'],
            ['*'],
        ]
        field.userChoice = 'down'

        // Exercise
        field.updateState()

        // Validate
        expect(field.continueGame).toBe(true);
        expect(field.endGameReason).toBe(null)
        expect(field.currentField).toStrictEqual(expectedField)
    })
})