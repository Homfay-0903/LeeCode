/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0])

    const res = [intervals[0]]

    for (let i = 1; i < intervals.length; i++) {
        const preArray = res[res.length - 1]
        const curArray = intervals[i]

        if (preArray[1] >= curArray[0]) {
            preArray[1] = Math.max(preArray[1], curArray[1])
        } else {
            res.push(curArray)
        }
    }

    return res
};