/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    const len = gas.length
    let current = 0
    let total = 0
    let start = 0

    for (let i = 0; i < len; i++) {
        const diff = gas[i] - cost[i]
        current += diff
        total += diff

        if (current < 0) {
            start = i + 1
            current = 0
        }
    }

    return total < 0 ? -1 : start
};