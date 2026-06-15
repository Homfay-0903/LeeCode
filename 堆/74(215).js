/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    const threeWayPartition = (nums, left, right) => {
        const randomtIndex = left + Math.floor(Math.random() * (right - left + 1));
        [nums[right], nums[randomtIndex]] = [nums[randomtIndex], nums[right]]
        const pivrot = nums[right]

        let leftEnd = left
        let rightStart = right
        let flag = left

        while (flag <= rightStart) {
            if (nums[flag] < pivrot) {
                [nums[flag], nums[leftEnd]] = [nums[leftEnd], nums[flag]]
                flag++
                leftEnd++
            } else if (nums[flag] > pivrot) {
                [nums[flag], nums[rightStart]] = [nums[rightStart], nums[flag]]
                rightStart--
            } else {
                flag++
            }
        }

        return [leftEnd, rightStart]
    }

    let left = 0
    let right = nums.length - 1
    const targetIndex = nums.length - k

    while (true) {
        const [leftEnd, rightStart] = threeWayPartition(nums, left, right)
        if (targetIndex >= leftEnd && targetIndex <= rightStart) {
            return nums[targetIndex]
        } else if (targetIndex < leftEnd) {
            right = leftEnd - 1
        } else if (targetIndex > rightStart) {
            left = rightStart + 1
        }
    }
};