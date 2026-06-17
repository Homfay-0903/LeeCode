/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    const len = s.length
    let maxLength = 0

    if (!len) {
        return maxLength
    }

    const stack = [-1]

    for (let i = 0; i < len; i++) {
        if (s[i] === '(') {
            stack.push(i)
        } else {
            stack.pop()

            if (!stack.length) {
                stack.push(i)
                continue
            }

            maxLength = Math.max(maxLength, i - stack[stack.length - 1])
        }
    }

    return maxLength
};