/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (intervals.length === 0) {
        return []
    }

    intervals.sort((a, b) => a[0] - b[0])
    const result = [intervals[0]]

    for (let i = 1; i < intervals.length; i++) {
        const curNum = intervals[i]
        const last = result[result.length - 1] //上一次的，浅复制

        if (curNum[0] <= last[1]) {
            last[1] = Math.max(last[1], curNum[1])
        } else {
            result.push(curNum)
        }
    }

    return result
};