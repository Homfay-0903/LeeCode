/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let i = a.length - 1
    let j = b.length - 1
    let carry = 0
    const res = []

    while (i >= 0 || j >= 0 || carry > 0) {
        let curSum = carry

        if (i >= 0) {
            curSum += Number(a[i])
            i--
        }
        if (j >= 0) {
            curSum += Number(b[j])
            j--
        }

        res.push(curSum % 2)
        carry = Math.floor(curSum / 2)
    }

    return res.reverse().join('')
};