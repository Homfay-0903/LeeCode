/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = []
    const bracktsMap = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    for (const brackt of s) {
        if (bracktsMap[brackt]) {
            if (stack.pop() !== bracktsMap[brackt]) {
                return false
            }
        } else {
            stack.push(brackt)
        }
    }

    return !stack.length
};