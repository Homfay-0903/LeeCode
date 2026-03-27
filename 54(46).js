/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const res = []
    const used = new Array(nums.length).fill(false)

    const backTrack = (path) => {
        if (path.length === nums.length) {
            res.push([...path])
            return
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) {
                continue
            }

            used[i] = true
            path.push(nums[i])

            backTrack(path)

            used[i] = false
            path.pop()
        }
    }

    backTrack([])

    return res
};