/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (!x) {
        return 0
    }

    let left = 1, right = x
    let ans = 0

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)

        if (mid <= x / mid) {
            ans = mid
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return ans
};