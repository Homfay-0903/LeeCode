/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const res = []
    const len = candidates.length
    candidates.sort((a, b) => a - b)

    const backtrack = (startPos, curSum, path) => {
        if (curSum === target) {
            res.push([...path])
            return
        }

        for (let i = startPos; i < len; i++) {
            const curNum = candidates[i]

            if (curSum + curNum > target) {
                return
            } else {
                path.push(curNum)
            }

            backtrack(i, curSum + curNum, path)

            path.pop()
        }
    }

    backtrack(0, 0, [])

    return res
};