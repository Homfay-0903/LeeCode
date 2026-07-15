/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    const res = []
    const path = []

    const backtrack = (start) => {
        if (path.length === k) {
            res.push([...path])
            return
        }

        for (let i = start; i <= n; i++) {
            path.push(i)
            backtrack(i + 1)
            path.pop(i)
        }
    }

    backtrack(1)

    return res
};