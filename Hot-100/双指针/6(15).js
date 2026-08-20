/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const res = []
    const n = nums.length
    let pointer = 0
    nums.sort((a, b) => a - b)

    while (pointer < n - 2) {
        if (nums[pointer] > 0) {
            break
        }

        if (pointer > 0 && nums[pointer] === nums[pointer - 1]) {
            pointer++
            continue
        }

        let idx1 = pointer, idx2 = pointer + 1, idx3 = n - 1
        while (idx2 < idx3) {
            const sum = nums[idx1] + nums[idx2] + nums[idx3]

            if (sum === 0) {
                res.push([nums[idx1], nums[idx2], nums[idx3]])
                idx2++, idx3--

                while (idx2 < idx3 && nums[idx2] === nums[idx2 - 1]) {
                    idx2++
                }
                while (idx2 < idx3 && nums[idx3] === nums[idx3 + 1]) {
                    idx3--
                }
            } else if (sum < 0) {
                idx2++
            } else if (sum > 0) {
                idx3--
            }
        }

        pointer++
    }

    return res
};