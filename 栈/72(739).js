/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    const len = temperatures.length
    const answer = new Array(len).fill(0)
    const temperaturesStack = []

    for (let i = 0; i < len; i++) {
        while (temperaturesStack.length > 0
            && temperatures[i] > temperatures[temperaturesStack[temperaturesStack.length - 1]]) {
            const popIndex = temperaturesStack.pop()
            answer[popIndex] = i - popIndex
        }

        temperaturesStack.push(i)
    }

    return answer
};