/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const res = []
    const len = nums.length
    const isUsed = new Array(len).fill(false)

    const backtrack = (path) => {
        if (path.length === len) {
            res.push([...path])
            return
        }

        for (let i = 0; i < len; i++) {
            if (!isUsed[i]) {
                path.push(nums[i])
                isUsed[i] = true

                backtrack(path)

                path.pop(nums[i])
                isUsed[i] = false
            }
        }
    }

    backtrack([])

    return res
};