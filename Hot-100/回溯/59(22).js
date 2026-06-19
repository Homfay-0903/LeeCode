/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const res = []
    const totalLength = 2 * n

    const backTrack = (leftCount, rightCount, path) => {
        if (path.length === totalLength) {
            res.push(path)
            return
        }

        if (leftCount < n) {
            backTrack(leftCount + 1, rightCount, path + '(')
        }
        if (rightCount < leftCount) {
            backTrack(leftCount, rightCount + 1, path + ')')
        }
    }

    backTrack(0, 0, '')

    return res
};