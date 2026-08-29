/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    let curStr = ''
    let curNum = 0
    const stack = []

    for (const char of s) {
        if (/^\d$/.test(char)) {
            curNum = curNum * 10 + (char - '0')
        } else if (char === '[') {
            stack.push({
                str: curStr,
                num: curNum
            })
            curStr = '', curNum = 0
        } else if (char === ']') {
            const { str: preStr, num: preNum } = stack.pop()
            curStr = preStr + curStr.repeat(preNum)
        } else {
            curStr += char
        }
    }

    return curStr
};