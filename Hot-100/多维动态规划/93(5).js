/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    const n = s.length

    if (n < 2) {
        return s
    }

    function expandPalindrome(left, right) {
        while (left >= 0 && right < n && s[left] === s[right]) {
            left--, right++
        }

        return right - left - 1
    }

    let maxLen = 0
    let startPos = 0

    for (let i = 0; i < n; i++) {
        const odd = expandPalindrome(i, i)
        const even = expandPalindrome(i, i + 1)
        const curLen = Math.max(odd, even)

        if (curLen > maxLen) {
            maxLen = curLen
            startPos = i - Math.floor((maxLen - 1) / 2)
        }
    }

    return s.substring(startPos, startPos + maxLen)
};