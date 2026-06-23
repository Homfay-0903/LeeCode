/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    const trimedStr = s.trim()
    const words = trimedStr.split(/\s+/)
    const newWords = words.reverse()

    return newWords.join(' ')
};