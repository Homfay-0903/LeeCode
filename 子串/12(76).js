/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    const sLen = s.length
    const tLen = t.length

    if (!tLen || sLen < tLen) {
        return ''
    }

    const needObj = {}
    const haveObj = {}

    for (let i = 0; i < tLen; i++) {
        const char = t[i]

        needObj[char] = (needObj[char] || 0) + 1
    }

    let curStart = 0, curEnd = 0
    let start = 0
    let curSize = 0
    let charLen = Infinity
    const needSize = Object.keys(needObj).length

    while (curEnd < sLen) {
        const char = s[curEnd]
        curEnd++

        if (needObj[char]) {
            haveObj[char] = (haveObj[char] || 0) + 1

            if (haveObj[char] === needObj[char]) {
                curSize++
            }
        }

        while (curSize === needSize) {
            if (curEnd - curStart < charLen) {
                start = curStart
                charLen = curEnd - curStart
            }

            const removeChar = s[curStart]
            curStart++

            if (needObj[removeChar]) {
                if (needObj[removeChar] === haveObj[removeChar]) {
                    curSize--
                }

                haveObj[removeChar]--
            }
        }
    }

    return charLen === Infinity ? '' : s.substring(start, start + charLen)
};