/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    const stack = [-1]
    const len = s.length
    if (!len) {
        return 0
    }

    let maxLength = 0

    for (let i = 0; i < len; i++) {
        if (s[i] === '(') {
            stack.push(i)
        } else {
            stack.pop()

            if (!stack.length) {
                stack.push(i)
            } else {
                maxLength = Math.max(maxLength, i - stack[stack.length - 1])
            }
        }
    }

    return maxLength
};