/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    const sLen = s.length
    const tLen = t.length

    if (sLen < tLen) {
        return ''
    }

    const needObj = {}
    const haveObj = {}

    for (let i = 0; i < tLen; i++) {
        const char = t[i]

        needObj[char] = (needObj[char] || 0) + 1
    }

    let curStart = 0, curEnd = 0
    let charStart = 0
    let species = 0
    let charLen = Infinity
    const needSize = Object.keys(needObj).length

    while (curEnd < sLen) {
        const char = s[curEnd]
        curEnd++

        haveObj[char] = (haveObj[char] || 0) + 1

        if (haveObj[char] === needObj[char]) {
            species++
        }

        while (species === needSize) {
            if (curEnd - curStart < charLen) {
                charStart = curStart
                charLen = curEnd - curStart
            }

            const removeChar = s[curStart]
            curStart++

            if (haveObj[removeChar] === needObj[removeChar]) {
                species--
            }

            haveObj[removeChar]--
        }
    }

    return charLen === Infinity ? '' : s.substring(charStart, charStart + charLen)
};