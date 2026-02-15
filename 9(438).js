/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    const res = []
    const sLen = s.length
    const pLen = p.length
    if (sLen < pLen) {
        return res
    }

    const countP = new Array(26).fill(0)
    const countWindow = new Array(26).fill(0)

    for (let i = 0; i < pLen; i++) {
        countP[p.charCodeAt(i) - 'a'.charCodeAt(0)]++
        countWindow[s.charCodeAt(i) - 'a'.charCodeAt(0)]++
    }

    if (arraysEqual(countP, countWindow)) {
        res.push(0)
    }

    for (let i = pLen; i < sLen; i++) {
        countWindow[s.charCodeAt(i - pLen) - 'a'.charCodeAt(0)]--
        countWindow[s.charCodeAt(i) - 'a'.charCodeAt(0)]++

        if (arraysEqual(countP, countWindow)) {
            res.push(i - pLen + 1)
        }
    }

    return res
};

function arraysEqual(arr1, arr2) {
    for (let i = 0; i < 26; i++) {
        if (arr1[i] !== arr2[i]) {
            return false
        }
    }
    return true
}