/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (!digits) {
        return []
    }

    const dightsToletters = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    }

    let combination = dightsToletters[digits[0]].split('')

    for (let i = 1; i < digits.length; i++) {
        const curDights = digits[i]
        const curLetters = dightsToletters[curDights].split('')
        const newCombination = []

        for (const firstLetter of combination) {
            for (const secondLetter of curLetters) {
                newCombination.push(firstLetter + secondLetter)
            }
        }

        combination = newCombination
    }

    return combination
};