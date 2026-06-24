/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const isAlphanumeric = (char) => {
        return ('a' <= char && char <= 'z') ||
            ('A' <= char && char <= 'Z') ||
            ('0' <= char && char <= '9')
    }

    let left = 0, right = s.length - 1

    while (left < right) {
        while (left < right && !isAlphanumeric(s[left])) {
            left++
        }
        while (left < right && !isAlphanumeric(s[right])) {
            right--
        }

        if (s[left].toLocaleLowerCase() !== s[right].toLocaleLowerCase()) {
            return false
        }

        left++
        right--
    }

    return true
};