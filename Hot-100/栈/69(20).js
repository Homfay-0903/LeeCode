/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = []
    const bracketsMap = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    for (const bracket of s) {
        if (bracketsMap[bracket]) {
            stack.push(bracket)
        } else {
            const leftBracket = stack.pop()

            if (bracket !== bracketsMap[leftBracket]) {
                return false
            }
        }
    }

    return stack.length === 0 ? true : false
};