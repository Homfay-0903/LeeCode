/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    const sLen = s.length, tLen = t.length
    const needObj = {}, haveObj = {}

    for (let i = 0; i < tLen; i++) {
        const char = t[i]
        needObj[char] = (needObj[char] || 0) + 1
    }

    let strStart = 0
    let curStart = 0, curEnd = 0
    let curSpecies = 0, totalSpecies = Object.keys(needObj).length
    let minLen = Infinity

    while (curEnd < sLen) {
        const char = s[curEnd]
        haveObj[char] = (haveObj[char] || 0) + 1

        if (haveObj[char] === needObj[char]) {
            curSpecies++

            while (curSpecies === totalSpecies) {
                if (curEnd - curStart + 1 < minLen) {
                    minLen = curEnd - curStart + 1
                    strStart = curStart
                }

                const removeChar = s[curStart]
                curStart++

                if (haveObj[removeChar] === needObj[removeChar]) {
                    curSpecies--
                }

                haveObj[removeChar]--
            }
        }

        curEnd++
    }

    return minLen === Infinity ? '' : s.substring(strStart, strStart + minLen)
};