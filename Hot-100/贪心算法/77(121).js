/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let minPrice = prices[0]
    let maxProfit = 0

    for (let i = 1; i < prices.length; i++) {
        const curPrice = prices[i]

        if (curPrice > minPrice) {
            maxProfit = Math.max(maxProfit, curPrice - minPrice)
        } else {
            minPrice = curPrice
        }
    }

    return maxProfit
};