/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    const sMap = new Map()
    const tMap = new Map()

    if (s.length !== t.length) {
        return false
    }

    for (let i = 0; i < s.length; i++) {
        sMap.set(s[i], (sMap.get(s[i]) || 0) + 1)
    }
    for (let i = 0; i < t.length; i++) {
        tMap.set(t[i], (tMap.get(t[i]) || 0) + 1)
    }

    for (let i = 0; i < s.length; i++) {
        if (sMap.get(s[i]) !== tMap.get(s[i])) {
            return false
        }
    }

    return true
};