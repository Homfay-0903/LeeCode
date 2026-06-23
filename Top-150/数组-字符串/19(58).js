/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let len = 0
    let point = s.length - 1

    while (point >= 0 && s[point] === ' ') {
        point--
    }
    while (point >= 0 && s[point] !== ' ') {
        len++
        point--
    }

    return len
};