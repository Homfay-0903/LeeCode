/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    if (!t.length || s.length < t.length) {
        return ''
    }

    const need = {}
    const have = {}

    for (const char of t) {
        need[char] = (need[char] || 0) + 1
    }

    let left = 0, right = 0
    let start = 0
    let valid = 0
    let len = Infinity
    const needSize = Object.keys(need).length

    while (right < s.length) {
        const char = s[right]
        right++

        if (need[char]) {
            have[char] = (have[char] || 0) + 1
            if (have[char] === need[char]) {
                valid++
            }
        }

        while (valid === needSize) {
            if (right - left < len) {
                start = left
                len = right - left
            }

            const d = s[left]
            left++
            if (need[d]) {
                if (need[d] === have[d]) {
                    valid--
                }
                have[d]--
            }
        }
    }

    return len === Infinity ? '' : s.substring(start, start + len)
};