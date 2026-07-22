/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) {
        return false
    }

    const palindrome = (str, left, right) => {
        while (left < right) {
            if (str[left] !== str[right]) {
                return false
            }

            left++
            right--
        }

        return true
    }

    return palindrome(String(x), 0, String(x).length - 1)
};