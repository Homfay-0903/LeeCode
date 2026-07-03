/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const stack = []
    const operators = new Set(['+', '-', '*', '/'])

    for (const token of tokens) {
        if (operators.has(token)) {
            const rightNum = stack.pop()
            const leftNum = stack.pop()

            let newNum = 0

            switch (token) {
                case '+':
                    newNum = leftNum + rightNum
                    break
                case '-':
                    newNum = leftNum - rightNum
                    break
                case '*':
                    newNum = leftNum * rightNum
                    break
                case '/':
                    newNum = Math.trunc(leftNum / rightNum)
                    break
            }

            stack.push(newNum)
        } else {
            stack.push(Number(token))
        }
    }

    return stack[0]
};