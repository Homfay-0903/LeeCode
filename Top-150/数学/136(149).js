/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
    const n = points.length

    if (n <= 2) {
        return n
    }

    let maxCount = 1

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const x1 = points[i][0], x2 = points[j][0]
            const y1 = points[i][1], y2 = points[j][1]
            let curCount = 2

            for (let k = j + 1; k < n; k++) {
                const x3 = points[k][0]
                const y3 = points[k][1]

                if ((y3 - y1) * (x2 - x1) === (y2 - y1) * (x3 - x1)) {
                    curCount++
                }
            }

            maxCount = Math.max(maxCount, curCount)
        }
    }

    return maxCount
};