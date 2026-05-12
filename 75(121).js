/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let minPrice = prices[0]
    let maxProfit = 0

    for (let i = 0; i < prices.length; i++) {
        const curPrice = prices[i]

        if (curPrice > minPrice) {
            maxProfit = Math.max(maxProfit, curPrice - minPrice)
        }
        if (curPrice < minPrice) {
            minPrice = curPrice
        }
    }

    return maxProfit
};