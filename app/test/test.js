// const { describe, test, expect } = require('jest')
const Calculator = require('../calculator')

const cases = [
    ["73 -3", 70], // Case 1
    ["73 * 2", 146], // Case 2
    ["8 / 4 * (6 + 2 * 4) + 32 - 2",58], //Case 3
]

describe("Dry run Calculator", () => {
    test.each(cases)("Input '%p' should give output '%p'", (input, output) => {
        const calculator = new Calculator(input);
        expect(calculator.calculate()).toEqual(output);
    })
})