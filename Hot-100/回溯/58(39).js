/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const len = candidates.length
    const res = []

    candidates = candidates.sort((a, b) => a - b)

    const backTrack = (startPos, curSum, path) => {
        if (curSum === target) {
            res.push([...path])
            return
        }

        for (let i = startPos; i < len; i++) {
            const curNum = candidates[i]

            if (curNum + curSum > target) {
                break
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