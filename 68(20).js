/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length % 2 !== 0) {
        return false
    }

    const bracketsMap = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    const stack = []

    for (const char of s) {
        if (char in bracketsMap) {
            if (stack.length === 0 || bracketsMap[char] !== stack.pop()) {
                return false
            }
        } else {
            stack.push(char)
        }
    }

    return stack.length === 0
};