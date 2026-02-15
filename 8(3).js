/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const charMap = new Map()
    let left = 0
    let maxLength = 0

    for (let right = 0; right < s.length; right++) {
        if (charMap.has(s[right]) && charMap.get(s[right]) >= left) {
            left = charMap.get(s[right]) + 1
        }

        charMap.set(s[right], right)
        maxLength = Math.max(maxLength, right - left + 1)
    }

    return maxLength
};