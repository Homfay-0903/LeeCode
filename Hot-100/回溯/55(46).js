/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const res = []
    const n = nums.length
    const isUsed = new Array(n).fill(false)

    function backTrack(path) {
        if (path.length === n) {
            res.push([...path])
        }

        for (const num of nums) {
            if (!isUsed[num]) {
                path.push(num)
                isUsed[num] = true

                backTrack(path)

                path.pop(num)
                isUsed[num] = false
            }
        }
    }

    backTrack([])

    return res
};