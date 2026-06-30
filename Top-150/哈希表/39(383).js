/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const charMap = new Map()

    for (const char of magazine) {
        charMap.set(char, (charMap.get(char) || 0) + 1)
    }

    for (const char of ransomNote) {
        if (!charMap.has(char) || !charMap.get(char)) {
            return false
        }

        charMap.set(char, charMap.get(char) - 1)
    }

    return true
};