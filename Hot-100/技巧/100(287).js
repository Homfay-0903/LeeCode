/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    const map = new Map()

    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1)

        if (map.get(num) > 1) {
            return num
        }
    }
};