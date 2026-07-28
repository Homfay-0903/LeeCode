/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    const n = prices.length

    if (k >= n / 2) {
        let profit = 0

        for (let i = 1; i < n; i++) {
            if (prices[i] > prices[i - 1]) {
                profit += prices[i] - prices[i - 1]
            }
        }

        return profit
    }

    const dp = new Array(k + 1).fill(0).map(() => [0, -Infinity])

    dp[0][0] = 0

    for (const price of prices) {
        for (let i = k; i >= 1; i--) {
            dp[i][0] = Math.max(dp[i][0], dp[i][1] + price)
            dp[i][1] = Math.max(dp[i][1], dp[i - 1][0] - price)
        }
    }

    let maxProfit = 0

    for (let i = 0; i <= k; i++) {
        maxProfit = Math.max(maxProfit, dp[i][0])
    }

    return maxProfit
};