/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    const len = s.length
    const sToT = new Map()
    const tToS = new Map()

    for (let i = 0; i < len; i++) {
        const sChar = s[i], tChar = t[i]

        if (sToT.has(sChar) && sToT.get(sChar) !== tChar) {
            return false
        }
        if (tToS.has(tChar) && tToS.get(tChar) !== sChar) {
            return false
        }

        sToT.set(sChar, tChar)
        tToS.set(tChar, sChar)
    }

    return true
};