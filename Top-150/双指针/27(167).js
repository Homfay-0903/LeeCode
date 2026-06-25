/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    const numsMap = new Map()

    for (let i = 0; i < numbers.length; i++) {
        if (numsMap.has(target - numbers[i])) {
            return [numsMap.get(target - numbers[i]), i + 1]
        } else {
            numsMap.set(numbers[i], i + 1)
        }
    }
};