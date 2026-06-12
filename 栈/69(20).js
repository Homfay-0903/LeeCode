/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const len = s.length
    const bracktsStack = []

    const bracktsMap = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    for (const brackt of s) {
        if (!bracktsMap[brackt]) {
            bracktsStack.push(brackt)
        } else {
            if (!bracktsStack.length || bracktsStack.pop() !== bracktsMap[brackt]) {
                return false
            }
        }
    }

    return !bracktsStack.length ? true : false
};