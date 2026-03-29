/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const results = []
    const length = candidates.length
    candidates.sort((a, b) => (a - b))

    const backTrack = (start, sum, path) => {
        if (sum === target) {
            results.push([...path])
            return
        }

        for (let i = start; i < length; i++) {
            const curNum = candidates[i]

            if (sum + curNum > target) {
                break
            } else {
                path.push(curNum)
            }

            backTrack(i, sum + curNum, path)

            path.pop()
        }
    }

    backTrack(0, 0, [])

    return results
};