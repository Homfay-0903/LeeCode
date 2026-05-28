/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    const len = intervals.length
    const res = []

    if (!len) {
        return res
    }

    intervals.sort((a, b) => a[0] - b[0])
    res.push(intervals[0])

    for (let i = 1; i < len; i++) {
        const curArray = intervals[i]
        const preArray = res[res.length - 1]

        if (curArray[0] <= preArray[1]) {
            preArray[1] = Math.max(preArray[1], curArray[1])
        } else {
            res.push(curArray)
        }
    }

    return res
};