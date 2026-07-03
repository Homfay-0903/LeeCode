/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    const len = s.length
    const stack = []

    let index = 0
    let sign = 1
    let res = 0

    while (index < len) {
        const curChar = s[index]

        if (curChar === ' ') {
            index++
        } else if (curChar === '+') {
            sign = 1
            index++
        } else if (curChar === '-') {
            sign = -1
            index++
        } else if (curChar === '(') {
            stack.push(res)
            stack.push(sign)

            res = 0
            sign = 1
            index++
        } else if (curChar === ')') {
            const preSign = stack.pop()
            const preRes = stack.pop()

            res = preRes + preSign * res
            index++
        } else {
            let curNum = 0

            while (index < len && /^\d$/.test(s[index])) {
                curNum = curNum * 10 + (s[index].charCodeAt(0) - '0'.charCodeAt(0))
                index++
            }

            res += sign * curNum
        }
    }

    return res
};