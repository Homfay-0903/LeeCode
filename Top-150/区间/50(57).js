/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    intervals.push(newInterval)
    intervals.sort((a, b) => a[0] - b[0])

    const res = [intervals[0]]

    for (let i = 1; i < intervals.length; i++) {
        const preInterval = res[res.length - 1]
        const curInterval = intervals[i]

        if (preInterval[1] >= curInterval[0]) {
            preInterval[1] = Math.max(preInterval[1], curInterval[1])
        } else {
            res.push(curInterval)
        }
    }

    return res
};