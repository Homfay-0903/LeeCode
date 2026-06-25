/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    const sLen = s.length
    const tLen = t.length

    if (!sLen) {
        return true
    }
    if (sLen > tLen) {
        return false
    }

    let i = 0

    for (let j = 0; j < tLen; j++) {
        if (t[j] === s[i]) {
            i++
        }

        if (i === sLen) {
            return true
        }
    }

    return false
};