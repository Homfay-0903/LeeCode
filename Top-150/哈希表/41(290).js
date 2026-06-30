/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    const len = pattern.length
    const str = s.split(' ')
    const pMap = new Map()
    const sMap = new Map()

    if (len !== str.length) {
        return false
    }

    for (let i = 0; i < len; i++) {
        const pChar = pattern[i]
        const sWord = str[i]

        if (pMap.has(pChar) && pMap.get(pChar) !== sWord) {
            return false
        }
        if (sMap.has(sWord) && sMap.get(sWord) !== pChar) {
            return false
        }

        pMap.set(pChar, sWord)
        sMap.set(sWord, pChar)
    }

    return true
};