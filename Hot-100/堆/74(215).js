/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    function treeWayPartion(left, right) {
        const random = left + Math.floor(Math.random() * (right - left + 1));
        [nums[right], nums[random]] = [nums[random], nums[right]]
        const pivot = nums[right]

        let leftEnd = left
        let rightStart = right
        let pointer = left

        while (pointer <= rightStart) {
            if (nums[pointer] < pivot) {
                [nums[pointer], nums[leftEnd]] = [nums[leftEnd], nums[pointer]]
                pointer++
                leftEnd++
            } else if (nums[pointer] === pivot) {
                pointer++
            } else {
                [nums[pointer], nums[rightStart]] = [nums[rightStart], nums[pointer]]
                rightStart--
            }
        }

        return [leftEnd, rightStart]
    }

    let target = nums.length - k
    let left = 0, right = nums.length - 1

    while (true) {
        const [leftEnd, rightStart] = treeWayPartion(left, right)

        if (leftEnd <= target && target <= rightStart) {
            return nums[target]
        } else if (target < leftEnd) {
            right = leftEnd - 1
        } else {
            left = rightStart + 1
        }
    }
};