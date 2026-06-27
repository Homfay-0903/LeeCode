/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    const m = s.length
    const n = t.length
    const haveObj = {}, needObj = {}

    // can cancel
    if (m < n) {
        return ''
    }

    for (let i = 0; i < n; i++) {
        needObj[t[i]] = (needObj[t[i]] || 0) + 1
    }

    let curStart = 0, curEnd = 0
    let charStart = 0
    let strLen = Infinity
    let curSpeices = 0
    let totalSpeices = Object.keys(needObj).length

    for (; curEnd < m; curEnd++) {
        const curChar = s[curEnd]

        haveObj[curChar] = (haveObj[curChar] || 0) + 1

        if (haveObj[curChar] === needObj[curChar]) {
            curSpeices++

            while (curSpeices === totalSpeices) {
                if (curEnd - curStart + 1 < strLen) {
                    strLen = curEnd - curStart + 1
                    charStart = curStart
                }

                const removeChar = s[curStart]
                curStart++

                if (haveObj[removeChar] === needObj[removeChar]) {
                    curSpeices--
                }

                haveObj[removeChar]--
            }
        }
    }

    return strLen === Infinity ? '' : s.substring(charStart, charStart + strLen)
};