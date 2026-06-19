/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    const len = s.length

    if (len < 2) {
        return s
    }

    const expandFromCenter = (str, left, right) => {
        while (left >= 0 && right < len && str[left] === str[right]) {
            left--
            right++
        }

        return right - left - 1
    }

    let maxLen = 0
    let charStart = null

    for (let i = 0; i < len; i++) {
        const oddCenterLen = expandFromCenter(s, i, i)
        const evenCenterLen = expandFromCenter(s, i, i + 1)
        const curMaxLen = Math.max(oddCenterLen, evenCenterLen)

        if (curMaxLen > maxLen) {
            maxLen = curMaxLen
            charStart = i - Math.floor((maxLen - 1) / 2)
        }
    }

    return s.substring(charStart, charStart + maxLen)
};