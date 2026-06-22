/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
    const n = ratings.length
    const candyCount = new Array(n).fill(1)

    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candyCount[i] = candyCount[i - 1] + 1
        }
    }
    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candyCount[i] = Math.max(candyCount[i], candyCount[i + 1] + 1)
        }
    }

    return candyCount.reduce((acc, val) => (acc + val), 0)
};