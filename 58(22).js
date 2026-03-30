/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const results = []
    const totalLength = 2 * n

    const backTrack = (left, right, path) => {
        if (path.length === totalLength) {
            results.push(path)
            return
        }

        if (left < n) {
            backTrack(left + 1, right, path + '(')
        }

        if (right < left) {
            backTrack(left, right + 1, path + ')')
        }
    }

    backTrack(0, 0, '')

    return results
};