/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    const threeWayPartition = (left, right) => {
        const random = left + Math.floor(Math.random() * (right - left + 1));
        const pivot = nums[random]

        [nums[right], nums[random]] = [nums[random], nums[right]]

        let leftEnd = left, rightStart = right
        let pointer = left

        while (pointer <= rightStart) {
            if (nums[pointer] < pivot) {
                [nums[pointer], nums[leftEnd]] = [nums[leftEnd], nums[pointer]]
                pointer++
                leftEnd++
            } else if (nums[pointer] > pivot) {
                [nums[pointer], nums[rightStart]] = [nums[rightStart], nums[pointer]]
                rightStart--
            } else {
                pointer++
            }
        }

        return [leftEnd, rightStart]
    }

    let left = 0, right = nums.length - 1
    let target = nums.length - k

    while (true) {
        const [leftEnd, rightStart] = threeWayPartition(left, right)

        if (leftEnd <= target && target <= rightStart) {
            return nums[target]
        } else if (target < leftEnd) {
            right = leftEnd - 1
        } else {
            left = rightStart + 1
        }
    }
};