/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
    const n = s.length
    const res = []
    const last = new Array(26).fill(0)

    for (let i = 0; i < n; i++) {
        const charIdx = s.charCodeAt(i) - 'a'.charCodeAt(0)
        last[charIdx] = i
    }

    let start = 0, end = 0
    for (let i = 0; i < n; i++) {
        const charIdx = s.charCodeAt(i) - 'a'.charCodeAt(0)
        const lastIdx = last[charIdx]
        end = Math.max(end, lastIdx)

        if (i === end) {
            res.push(end - start + 1)
            start = end + 1
        }
    }

    return res
};