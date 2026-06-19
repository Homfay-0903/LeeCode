/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const digitsToLetters = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    }

    let combination = digitsToLetters[digits[0]].split('')

    for (let i = 1; i < digits.length; i++) {
        const newCombination = []
        const curDigits = digits[i]
        const curLettersChar = digitsToLetters[curDigits].split('')

        for (const preChar of combination) {
            for (const curChar of curLettersChar) {
                newCombination.push(preChar + curChar)
            }
        }

        combination = newCombination
    }

    return combination
};