/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    function arrEqual(arr1, arr2) {
        for (let i = 0; i < 26; i++) {
            if (arr1[i] !== arr2[i]) {
                return false
            }
        }

        return true
    }

    const res = []
    const sLen = s.length, pLen = p.length
    const countP = new Array(26).fill(0), countWindow = new Array(26).fill(0)

    if (sLen < pLen) {
        return res
    }

    for (let i = 0; i < pLen; i++) {
        const pCharIdx = p[i].charCodeAt(0) - 'a'.charCodeAt(0)
        const sCharIdx = s[i].charCodeAt(0) - 'a'.charCodeAt(0)
        countP[pCharIdx]++, countWindow[sCharIdx]++
    }

    if (arrEqual(countP, countWindow)) {
        res.push(0)
    }

    for (let i = pLen; i < sLen; i++) {
        const preCharIdx = s[i - pLen].charCodeAt(0) - 'a'.charCodeAt(0)
        const curCharIdx = s[i].charCodeAt(0) - 'a'.charCodeAt(0)
        countWindow[preCharIdx]--, countWindow[curCharIdx]++

        if (arrEqual(countP, countWindow)) {
            res.push(i - pLen + 1)
        }
    }

    return res
};