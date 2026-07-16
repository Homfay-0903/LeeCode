/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const res = []
    const totalLength = n * 2

    const backtrack = (leftCount, rightCount, path) => {
        if (path.length === totalLength) {
            res.push(path)
            return
        }

        if (leftCount < n) {
            backtrack(leftCount + 1, rightCount, path + '(')
        }

        if (rightCount < leftCount) {
            backtrack(leftCount, rightCount + 1, path + ')')
        }
    }

    backtrack(0, 0, '')

    return res
};