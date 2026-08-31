/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    const n = s.length
    const stack = [-1]
    let maxLen = 0

    for (let i = 0; i < n; i++) {
        if (s[i] === '(') {
            stack.push(i)
        } else {
            const idx = stack.pop()

            if (s[idx] !== '(') {
                stack.push(i)
                continue
            }

            maxLen = Math.max(maxLen, i - stack[stack.length - 1])
        }
    }

    return maxLen
};