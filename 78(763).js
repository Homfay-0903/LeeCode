/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
    const last = new Array(26).fill(0)
    const len = s.length

    for (let i = 0; i < len; i++) {
        const charIndex = s.charCodeAt(i) - 'a'.charCodeAt(0)
        last[charIndex] = i
    }

    const res = []
    let start = 0, end = 0

    for (let i = 0; i < len; i++) {
        const charIndex = s.charCodeAt(i) - 'a'.charCodeAt(0)
        end = Math.max(end, last[charIndex])

        if (i === end) {
            res.push(end - start + 1)
            start = end + 1
        }
    }

    return res
};