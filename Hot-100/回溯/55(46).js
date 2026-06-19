/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const len = nums.length
    const res = []
    const isUsed = new Array(len).fill(false)

    const backTrack = (curPath) => {
        if (curPath.length === len) {
            res.push([...curPath])
            return
        }

        for (let i = 0; i < len; i++) {
            if (!isUsed[i]) {
                isUsed[i] = true
                curPath.push(nums[i])

                backTrack(curPath)

                isUsed[i] = false
                curPath.pop()
            }
        }
    }

    backTrack([])

    return res
};