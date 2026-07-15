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

    let preCombination = digitsToLetters[digits[0]].split('')

    for (let i = 1; i < digits.length; i++) {
        const newCombination = []
        const curCombination = digitsToLetters[digits[i]].split('')

        for (const preChar of preCombination) {
            for (const curChar of curCombination) {
                newCombination.push(preChar + curChar)
            }
        }

        preCombination = [...newCombination]
    }

    return preCombination
};