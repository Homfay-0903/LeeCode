/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const res = []
    const totalLen = 2 * n

    function backTrack(leftCount, rightCount, path) {
        if (path.length === totalLen) {
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