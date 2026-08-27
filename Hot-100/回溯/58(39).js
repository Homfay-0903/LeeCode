/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const n = candidates.length
    const res = []

    candidates.sort((a, b) => a - b)

    function backTrack(curPos, curSum, path) {
        if (curSum === target) {
            res.push([...path])
            return
        }

        for (let i = curPos; i < n; i++) {
            const curNum = candidates[i]

            if (curNum + curSum > target) {
                return
            } else {
                path.push(curNum)
            }

            backTrack(i, curNum + curSum, path)
            path.pop()
        }
    }

    backTrack(0, 0, [])

    return res
};