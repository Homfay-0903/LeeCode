/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    const charStack = []
    let curChar = ''
    let curNum = 0

    for (const char of s) {
        if (/^\d$/.test(char)) {
            curNum = curNum * 10 + (char - '0')
        } else if (char === '[') {
            charStack.push({
                num: curNum,
                str: curChar
            })

            curChar = ''
            curNum = 0
        } else if (char === ']') {
            const {
                num: preNum,
                str: preStr
            } = charStack.pop()

            curChar = preStr + curChar.repeat(preNum)
        } else {
            curChar += char
        }
    }

    return curChar
};