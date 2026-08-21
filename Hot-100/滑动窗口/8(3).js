/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const n = s.length
    const map = new Map()
    let maxLen = 0
    let left = 0, right = 0

    while (right < n) {
        if (map.has(s[right]) && map.get(s[right]) >= left) {
            left = map.get(s[right]) + 1
        }
        map.set(s[right], right)
        maxLen = Math.max(maxLen, right - left + 1)
        right++
    }

    return maxLen
};