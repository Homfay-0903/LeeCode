/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const len = s.length
    const charMap = new Map()
    let left = 0
    let right = 0
    let maxLen = 0

    for (; right < len; right++) {
        if (charMap.has(s[right]) && charMap.get(s[right]) >= left) {
            left = charMap.get(s[right]) + 1
        }

        charMap.set(s[right], right)

        maxLen = Math.max(maxLen, right - left + 1)
    }

    return maxLen
};