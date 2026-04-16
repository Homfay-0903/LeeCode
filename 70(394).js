/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    const stack = []
    let curChar = ''
    let curNum = 0

    for (const char of s) {
        if (/^\d$/.test(char)) {
            curNum = curNum * 10 + (char - '0')
        } else if (char === '[') {
            stack.push({ str: curChar, num: curNum })
            curChar = ''
            curNum = 0
        } else if (char === ']') {
            const { str: preStr, num: preNum } = stack.pop()
            curChar = preStr + curChar.repeat(preNum)
        } else {
            curChar += char
        }
    }

    return curChar
};