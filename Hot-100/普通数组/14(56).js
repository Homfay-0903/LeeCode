/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    const n = intervals.length
    intervals.sort((a, b) => a[0] - b[0])
    const res = [intervals[0]]

    for (let i = 1; i < n; i++) {
        const pre = res[res.length - 1]
        const cur = intervals[i]

        if (pre[1] >= cur[0]) {
            pre[1] = Math.max(pre[1], cur[1])
        } else {
            res.push(cur)
        }
    }

    return res
};