/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length < 2) {
        return s
    }
    let maxLen = 1
    let start = null

    const expandFromCenter = (s, left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--
            right++
        }

        return right - left - 1
    }

    for (let i = 0; i < s.length; i++) {
        const oddCenter = expandFromCenter(s, i, i)
        const evenCenter = expandFromCenter(s, i, i + 1)
        const curMaxLen = Math.max(oddCenter, evenCenter)

        if (curMaxLen > maxLen) {
            maxLen = curMaxLen
            start = i - Math.floor((maxLen - 1) / 2)
        }
    }

    return s.substring(start, start + maxLen)
};